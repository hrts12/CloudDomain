from flask import Flask, render_template, request, redirect, url_for, flash, session
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
import pymysql
import json

app = Flask(__name__)
app.secret_key = '1234567890qwertyuiop'

DB_CONFIG = {
    'host': '127.0.0.1',
    'database': 'clouddomain',
    'user': 'Seu_user',
    'password': 'Sua_senha',
    'port': 3306,
    'charset': 'utf8mb4',
    'cursorclass': pymysql.cursors.DictCursor
}

@app.route('/')
def home():
    conn = create_db_connection()
    planos = []
    if conn:
        try:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM Planos WHERE Ativo = 1")
                planos = cursor.fetchall()
        finally:
            conn.close()
    return render_template('main.html', planos=planos)

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/cadastro')
def cadastro():
    return render_template('cadastro.html')

@app.route('/verificar-sessao')
def verificar_sessao():
    logado = 'usuario_id' in session
    return {'logado': logado}

def create_db_connection():
    try:
        connection = pymysql.connect(
            host=DB_CONFIG['host'],
            user=DB_CONFIG['user'],
            password=DB_CONFIG['password'],
            database=DB_CONFIG['database'],
            port=DB_CONFIG['port'],
            charset=DB_CONFIG['charset'],
            cursorclass=DB_CONFIG['cursorclass']
        )
        print("Conexão com o banco de dados estabelecida com sucesso!")
        return connection
    except Exception as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        return None
    
@app.route("/compra/<int:plano_id>", methods=['GET'])
def compra(plano_id):
    if 'usuario_id' not in session:
        return redirect(url_for('login'))

    idioma = request.args.get('lang', 'pt')

    nomes_planos = {
        'pt': {1: 'Básico', 2: 'Profissional', 3: 'Business'},
        'en': {1: 'Basic', 2: 'Professional', 3: 'Business'}
    }

    conn = create_db_connection()
    if conn:
        try:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM Planos WHERE ID = %s", (plano_id,))
                plano = cursor.fetchone()
                if plano:
                    plano['Nome'] = nomes_planos.get(idioma, nomes_planos['pt']).get(plano_id, plano['Nome'])

                    recursos = [
                        f"{plano['Espaco']} SSD Space" if idioma == 'en' else f"{plano['Espaco']} Espaço SSD",
                        f"{plano['Subdominios']} Subdomains" if idioma == 'en' else f"{plano['Subdominios']} Subdomínios",
                        f"{plano['Contas']} Email Accounts" if idioma == 'en' else f"{plano['Contas']} Contas de email",
                        f"{plano['Trafego']} Traffic" if idioma == 'en' else f"{plano['Trafego']} Tráfego",
                        "With C-panel" if idioma == 'en' and plano['C_painel'] else ("Without C-panel" if idioma == 'en' else ("C-panel" if plano['C_painel'] else "Sem C-panel")),
                        "24h Support" if idioma == 'en' and plano['Suporte'] else ("No Support" if idioma == 'en' else ("Suporte 24 horas" if plano['Suporte'] else "Sem Suporte"))
                    ]

                    return render_template("compra.html", plano=plano, recursos=recursos)
        finally:
            conn.close()

    flash("Plano não encontrado.")
    return redirect(url_for("home"))

@app.route('/finalizar_compra', methods=['POST'])
def finalizar_compra():
    if 'usuario_id' not in session:
        return redirect(url_for('login'))

    usuario_id = session['usuario_id']
    plano_id = request.form.get('plano_id')

    pais = request.form.get('country')
    estado = request.form.get('state')
    cidade = request.form.get('city')
    telefone = request.form.get('phone')

    if not all([plano_id, pais, estado, cidade, telefone]):
        flash("Por favor, preencha todos os campos obrigatórios.", "error")
        return redirect(request.referrer or url_for('compra', plano_id=plano_id))

    conn = create_db_connection()
    if conn:
        try:
            with conn.cursor() as cursor:
                cursor.execute(
                    """
                    INSERT INTO Cliente (UsuarioID, PlanoID, Pais, Estado, Cidade, Telefone)
                    VALUES (%s, %s, %s, %s, %s, %s)
                    """,
                    (usuario_id, plano_id, pais, estado, cidade, telefone)
                )
                conn.commit()
        finally:
            conn.close()

    flash("Compra finalizada com sucesso!", "success")
    return redirect(url_for('home'))

@app.route('/submit_message', methods=['POST'])
def submit_message():
    nome = request.form.get('name')
    email = request.form.get('email')
    assunto = request.form.get('assunto')

    if not nome or not email or not assunto:
        flash('Por favor, preencha todos os campos do formulário.', 'main')
        return redirect(url_for('home'))

    connection = create_db_connection()
    if connection:
        try:
            with connection.cursor() as cursor:
                query = """
                    INSERT INTO Mensagens (Nome, Email, Assunto)
                    VALUES (%s, %s, %s)
                """
                cursor.execute(query, (nome, email, assunto))
                connection.commit()
                flash('Sua mensagem foi enviada com sucesso! Em breve um especialista entrará em contato.', 'main')
        except Exception as e:
            flash(f'Ocorreu um erro ao enviar sua mensagem: {e}', 'main')
            connection.rollback()
        finally:
            connection.close()
    else:
        flash('Não foi possível conectar ao banco de dados. Por favor, tente novamente mais tarde.', 'main')

    return redirect(url_for('home'))

@app.route('/cadastrar', methods=['POST'])
def cadastrar_usuario():
    nome = request.form.get('name')
    email = request.form.get('email')
    senha = request.form.get('password')
    confirma_senha = request.form.get('confirmpassword')

    if not nome or not email or not senha or not confirma_senha:
        flash("Todos os campos são obrigatórios", 'cadastro')
        return redirect(url_for('cadastro'))

    if senha != confirma_senha:
        flash("As senhas não coincidem", 'cadastro')
        return redirect(url_for('cadastro'))

    senha_hash = generate_password_hash(senha)

    try:
        conn = pymysql.connect(**DB_CONFIG)
        with conn.cursor() as cursor:
            cursor.execute("SELECT 1 FROM Usuario WHERE Email = %s", (email,))
            if cursor.fetchone():
                flash("Email já cadastrado na tabela de usuários.", 'cadastro')
                return redirect(url_for('cadastro'))

            sql = "INSERT INTO Usuario (Nome, Email, Senha) VALUES (%s, %s, %s)"
            cursor.execute(sql, (nome, email, senha_hash))

        conn.commit()
        flash("Cadastro realizado com sucesso!", 'cadastro')
        return redirect(url_for('login'))

    except Exception as e:
        flash(f"Erro no banco de dados: {e}", 'cadastro')
        return redirect(url_for('cadastro'))

    finally:
        conn.close()

@app.route('/login', methods=['POST'])
def login_usuario():
    email = request.form.get('email')
    senha = request.form.get('password')

    if not email or not senha:
        flash("Todos os campos são obrigatórios", 'login')
        return redirect(url_for('login'))

    try:
        conn = pymysql.connect(**DB_CONFIG)
        with conn.cursor() as cursor:

            cursor.execute("SELECT ID, Nome, Senha FROM Usuario WHERE Email = %s", (email,))
            usuario = cursor.fetchone()

            if not usuario:
                flash("Email não encontrado.", 'login')
                return redirect(url_for('login'))

            id_usuario = usuario['ID']
            nome_usuario = usuario['Nome']
            senha_salva = usuario['Senha']

            if not check_password_hash(senha_salva, senha):
                flash("Senha incorreta.", 'login')
                return redirect(url_for('login'))

            session['usuario_id'] = id_usuario
            session['usuario_nome'] = nome_usuario
            flash("Login realizado com sucesso!", 'login')
            return redirect(url_for('home'))

    except Exception as e:
        flash(f"Erro no banco de dados: {e}", 'login')
        return redirect(url_for('login'))

    finally:
        conn.close()

@app.route('/logout', methods=['POST'])
def logout():
    session.clear()
    flash("Você saiu com sucesso.", 'main')
    return redirect(url_for('home'))

@app.route('/api/planos', methods=['GET'])
def planos():
    conn = create_db_connection()
    if conn:
        try:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM Planos WHERE Ativo = 1")
                resultados = cursor.fetchall()
                return json.dumps(resultados, ensure_ascii=False, indent=2), 200, {'Content-Type': 'application/json'}
        except Exception as e:
            return {'erro': str(e)}, 500
        finally:
            conn.close()
    else:
        return {'erro': 'Erro ao conectar ao banco de dados.'}, 500

if __name__ == '__main__':
    app.run(debug=True)
