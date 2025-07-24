
# ☁️ CloudDomain

CloudDomain é uma aplicação web moderna para venda de planos de hospedagem e registro de domínios. A plataforma permite cadastro de usuários, simulação de compras com múltiplos métodos de pagamento, geração de senhas seguras e verificação de disponibilidade de domínios — tudo isso com suporte multilíngue dinâmico (PT/EN).

## Funcionalidades

- Cadastro e login de usuários com hash de senha (`werkzeug.security`)
- Autenticação de credenciais ligada ao Banco de Dados
- Simulação de compra com cartão de crédito, PIX e boleto
- Internacionalização com troca de idioma dinâmica
- Exibição e compra de planos hospedados no banco de dados
- Verificação de domínio via Google DNS API
- Geração de senhas seguras no frontend
- Formulário de contato com persistência
- Cálculo automático de impostos no carrinho
- API pública em `/api/planos` (JSON)
- Script SQL pronto para MySQL

## Tecnologias Utilizadas

### Frontend
- HTML5, CSS3, JavaScript
- Templates Jinja2 (Flask)
- Font Awesome, Google Fonts (Montserrat)
- `scripts.js` com suporte a tradução, domínios, senhas, impostos, API, Fomularios

### Backend
- Python 3
- Flask
- PyMySQL
- Werkzeug

### Banco de Dados

- MySQL (Script tabelas e inserts incluso)

## Estrutura de Diretórios

clouddomain/
├── app.py
├── querys.txt
├── templates/
│   ├── main.html
│   ├── login.html
│   ├── cadastro.html
│   ├── compra.html
├── static/
│   ├── css/
│   │   ├── main.css
│   │   ├── login.css
│   │   ├── cadastro.css
│   │   └── compra.css
│   │
│   ├── js/
│   │   └── scripts.js
│   │ 
│   └── img/
│       ├── logo.png
│       ├── login.png
│       ├── cadastro.png
│       ├── mainbanner.png
│       ├── icon.png
│       └── codigo de barra.jpg

## Como Executar o Projeto

### 1. Clone o repositório

bash
git clone https://github.com/seu-usuario/clouddomain.git
cd clouddomain

### 2. Crie e ative um ambiente virtual

bash
python -m venv venv
source venv/bin/activate      # Linux/macOS
venv\Scriptsctivate         # Windows

### 3. Instale as dependências

bash
pip install flask, pymysql, werkzeug

### 4. Configure o banco de dados MySQL

- Crie o banco:

sql
CREATE DATABASE clouddomain;
USE clouddomain;

- Execute o script `querys.txt`:

sql
Tabelas:
CREATE TABLE Usuario (...);
CREATE TABLE Planos (...);
CREATE TABLE Cliente (...);
CREATE TABLE Mensagens (...);

Dados iniciais:
INSERT INTO Planos (...) VALUES (...);

> Alternativamente, copie o conteúdo do arquivo `querys.txt` e cole no seu cliente MySQL.

### 5. Rode o servidor

bash
flask run

Acesse no navegador:

http://localhost:5000

## Configurações Sensíveis

No arquivo `app.py`, atualize os dados de conexão com seu banco de dados MySQL:

## 🌐 Rotas da Aplicação

| Rota                     | Método | Descrição                             |
|--------------------------|--------|---------------------------------------|
| `/`                      | GET    | Página inicial com os planos          |
| `/cadastro`              | GET    | Página de registro de usuários        |
| `/cadastrar`             | POST   | Submissão do cadastro                 |
| `/login`                 | GET/POST | Login do usuário                    |
| `/logout`                | POST   | Logout e limpeza da sessão            |
| `/compra/<int:plano_id>` | GET    | Página de compra                      |
| `/finalizar_compra`      | POST   | Envia os dados do cliente             |
| `/submit_message`        | POST   | Envia mensagem de contato             |
| `/api/planos`            | GET    | API pública de planos (JSON)          |
| `/verificar-sessao`      | GET    | Verifica se o usuário está logado     |

---

## Contato

- **Email:** [felipeharitos1253@gmail.com](mailto:felipeharitos1253@gmail.com)
