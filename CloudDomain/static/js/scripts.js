// Objeto com as traduções
const translations = {
  pt: {
    "boleto-text": "Boleto",
    "title-cartao": "Dados do Cartão",
    "label-card-name": "Nome do Portador",
    "label-card-number": "Número do Cartão",
    "label-card-validity": "Validade",
    "label-card-cvc": "CVC",
    "card-name-placeholder": "Digite o nome do portador",
    "card-number-placeholder": "0000 0000 0000 0000",
    "card-validity-placeholder": "MM/AA",
    "card-cvc-placeholder": "123",
    "domain-unavailable": "Este domínio já está registrado.",
    "domain-available": "Este domínio está disponível!",
    "domain-error": "Ocorreu um erro ao verificar o domínio.",
    "domain-invalid": "Por favor, insira um domínio válido.",
    "welcome-title-cadastro": "Crie sua conta",
    "welcome-title-login": "Seja bem-vindo",
    "form-title": "Comece agora mesmo",
    "form-subtitle": "É rápido e fácil.",
    "name-label": "Nome",
    "email-label": "Email",
    "password-label": "Senha",
    "length-label": "Comprimento",
    "letters-label": "Letras",
    "numbers-label": "Números",
    "symbols-label": "Símbolos",
    "confirm-password-label": "Confirme a senha",
    "password-help": "Use 8 ou mais caracteres com uma combinação de letras, números e símbolos.",
    "password-help-link": "Gerar senha",
    "generate-options-title": "Gerar uma senha segura",
    "generate-button": "Gerar senha",
    "generated-password-text": "Senha gerada:",
    "copy-button": "Copiar",
    "copy-success": "Copiado!",
    possui: "Já tenho conta",
    "submit-button": "Cadastrar",
    "login-page-title": "Entrar",
    "login-form-title": "Entre na sua conta",
    "login-form-subtitle": "Acesse sua conta para continuar.",
    "login-possui": "Não tenho conta",
    "login-submit-button": "Entrar",
    "purchase-page-title": "Confirmação de compra",
    "back-text": "Voltar",
    "summary-title": "Resumo do pedido",
    "features-title": "Recursos inclusos",
    "billing-form-title": "Informações de cobrança",
    "first-name-label": "Nome",
    "last-name-label": "Sobrenome",
    "purchase-email-label": "Email",
    "phone-label": "Telefone",
    "country-label": "País",
    "state-label": "Estado",
    "city-label": "Cidade",
    "payment-title": "Forma de pagamento",
    "credit-card-text": "Cartão de crédito",
    "pix-text": "PIX",
    "subtotal-label": "Subtotal",
    "tax-label": "Imposto",
    "total-label": "Total",
    "purchase-btn-text": "Finalizar compra",
    "success-title": "Compra realizada com sucesso!",
    "success-message": "Agradecemos a sua compra. Em breve você receberá um email com os detalhes do seu pedido.",
    "back-home-btn": "Voltar para a página inicial",
    "plan-period": "por mês",
    "first-name-placeholder": "Digite seu nome",
    "last-name-placeholder": "Digite seu sobrenome",
    "purchase-email-placeholder": "Digite seu email",
    "phone-placeholder": "Digite seu telefone",
    "state-placeholder": "Selecione o estado",
    "city-placeholder": "Digite sua cidade",
    processing: "Processando...",
    "banner-subtitle": "Os melhores serviços para projetos de todos os tamanhos!",
    "service-security-title": "Segurança",
    "service-security-desc":
      "Proteção avançada com certificados SSL, firewall e backup automático para manter seus dados sempre seguros e protegidos contra ameaças.",
    "service-performance-title": "Performance",
    "service-performance-desc":
      "Servidores de alta performance com SSD, CDN global e otimização automática para garantir velocidade máxima do seu site.",
    "service-support-title": "Suporte 24 horas",
    "service-support-desc":
      "Equipe especializada disponível 24/7 para resolver qualquer problema e tirar suas dúvidas através de chat, email ou telefone.",
    "pricing-title": "Planos e preços",
    "pricing-subtitle": "Selecione o plano que atende suas necessidades",
    "plan-basic": "Básico",
    "plan-professional": "Profissional",
    "plan-business": "Business",
    "plan-month-1": "mês",
    "plan-month-2": "mês",
    "plan-month-3": "mês",
    "plan-space-1": "5GB Espaço SSD",
    "plan-subdomain-1": "2 Sub-domínios",
    "plan-email-1": "10 Contas de email",
    "plan-bandwidth-1": "100GB Tráfego",
    "plan-support-1": "Suporte 24 horas",
    "plan-space-2": "15GB Espaço SSD",
    "plan-subdomain-2": "5 Sub-domínios",
    "plan-email-2": "25 Contas de email",
    "plan-bandwidth-2": "500GB Tráfego",
    "plan-support-2": "Suporte 24 horas",
    "plan-space-3": "50GB Espaço SSD",
    "plan-subdomain-3": "15 Sub-domínios",
    "plan-email-3": "50 Contas de email",
    "plan-bandwidth-3": "Tráfego Ilimitado",
    "plan-support-3": "Suporte 24 horas",
    "plan-buy-0": "Comprar",
    "plan-buy-1": "Comprar",
    "plan-buy-2": "Comprar",
    "text-rec": "Recomendado",
    "domain-title": "Qual domínio você deseja para seu site?",
    "domain-subtitle": "Verifique se o seu domínio está disponível",
    "domain-search-btn": "Procurar domínio",
    "contact-title": "Envie uma mensagem",
    "contact-subtitle": "Mande a sua mensagem, em até 4 horas um especialista entrará em contato",
    "contact-submit": "Enviar",
    "nav-domain": "Domínio",
    "nav-prices": "Preços",
    "nav-contact": "Contato",
    "nav-login": "Entrar",
    "nav-logout": "Sair",
  },
  en: {
    "boleto-text": "Bank slip",
    "title-cartao": "Card Data",
    "label-card-name": "Cardholder Name",
    "label-card-number": "Card Number",
    "label-card-validity": "Expiration Date",
    "label-card-cvc": "CVC",
    "card-name-placeholder": "Enter cardholder name",
    "card-number-placeholder": "0000 0000 0000 0000",
    "card-validity-placeholder": "MM/YY",
    "card-cvc-placeholder": "123",
    "domain-unavailable": "This domain is already registered.",
    "domain-available": "This domain is available!",
    "domain-error": "An error occurred while checking the domain.",
    "domain-invalid": "Please enter a valid domain.",
    "welcome-title-cadastro": "Create your account",
    "welcome-title-login": "Welcome",
    "form-title": "Get started now",
    "form-subtitle": "It's quick and easy.",
    "name-label": "Name",
    "email-label": "Email",
    "password-label": "Password",
    "length-label": "Length",
    "letters-label": "Letters",
    "numbers-label": "Numbers",
    "symbols-label": "Symbols",
    "confirm-password-label": "Confirm password",
    "password-help": "Use 8 or more characters with a combination of letters, numbers, and symbols.",
    "password-help-link": "Generate password",
    "generate-options-title": "Generate a secure password",
    "generate-button": "Generate password",
    "generated-password-text": "Generated password:",
    "copy-button": "Copy",
    "copy-success": "Copied!",
    possui: "Already have an account",
    "submit-button": "Sign Up",
    "login-page-title": "Login",
    "login-form-title": "Log in to your account",
    "login-form-subtitle": "Access your account to continue.",
    "login-possui": "Don't have an account",
    "login-submit-button": "Login",
    "purchase-page-title": "Purchase Confirmation",
    "back-text": "Back",
    "summary-title": "Order summary",
    "features-title": "Included features",
    "billing-form-title": "Billing information",
    "first-name-label": "First Name",
    "last-name-label": "Last Name",
    "purchase-email-label": "Email",
    "phone-label": "Phone",
    "country-label": "Country",
    "state-label": "State",
    "city-label": "City",
    "payment-title": "Payment method",
    "credit-card-text": "Credit card",
    "pix-text": "PIX",
    "subtotal-label": "Subtotal",
    "tax-label": "Tax",
    "total-label": "Total",
    "purchase-btn-text": "Complete purchase",
    "success-title": "Purchase successful!",
    "success-message": "Thank you for your purchase. You will soon receive an email with your order details.",
    "back-home-btn": "Back to homepage",
    "plan-period": "per month",
    "first-name-placeholder": "Enter your first name",
    "last-name-placeholder": "Enter your last name",
    "purchase-email-placeholder": "Enter your email",
    "phone-placeholder": "Enter your phone number",
    "state-placeholder": "Select state",
    "city-placeholder": "Enter your city",
    processing: "Processing...",
    "banner-subtitle": "The best services for projects of all sizes!",
    "service-security-title": "Security",
    "service-security-desc":
      "Advanced protection with SSL certificates, firewall and automatic backup to keep your data always safe and protected against threats.",
    "service-performance-title": "Performance",
    "service-performance-desc":
      "High performance servers with SSD, global CDN and automatic optimization to ensure maximum speed for your website.",
    "service-support-title": "24/7 Support",
    "service-support-desc":
      "Specialized team available 24/7 to solve any problem and answer your questions through chat, email or phone.",
    "pricing-title": "Plans and pricing",
    "pricing-subtitle": "Select the plan that meets your needs",
    "plan-basic": "Basic",
    "plan-professional": "Professional",
    "plan-business": "Business",
    "plan-month-1": "month",
    "plan-month-2": "month",
    "plan-month-3": "month",
    "plan-space-1": "5GB SSD Space",
    "plan-subdomain-1": "2 Subdomains",
    "plan-email-1": "10 Email accounts",
    "plan-bandwidth-1": "100GB Bandwidth",
    "plan-support-1": "24/7 Support",
    "plan-space-2": "15GB SSD Space",
    "plan-subdomain-2": "5 Subdomains",
    "plan-email-2": "25 Email accounts",
    "plan-bandwidth-2": "500GB Bandwidth",
    "plan-support-2": "24/7 Support",
    "plan-space-3": "50GB SSD Space",
    "plan-subdomain-3": "15 Subdomains",
    "plan-email-3": "50 Email accounts",
    "plan-bandwidth-3": "Unlimited Bandwidth",
    "plan-support-3": "24/7 Support",
    "plan-buy-0": "Buy Now",
    "plan-buy-1": "Buy Now",
    "plan-buy-2": "Buy Now",
    "text-rec": "Recommended",
    "domain-title": "What domain do you want for your website?",
    "domain-subtitle": "Check if your domain is available",
    "domain-search-btn": "Search domain",
    "contact-title": "Send a message",
    "contact-subtitle": "Send your message, within 4 hours a specialist will contact you",
    "contact-submit": "Send",
    "nav-domain": "Domain",
    "nav-prices": "Pricing",
    "nav-contact": "Contact",
    "nav-login": "Login",
    "nav-logout": "Logout",
  },
}

function applyCardTranslations(language) {
  const currentTranslations = translations[language]

  // Traduzir textos dos elementos
  const textElements = {
    "title-cartao": "title-cartao",
    "label-card-name": "label-card-name",
    "label-card-number": "label-card-number",
    "label-card-validity": "label-card-validity",
    "label-card-cvc": "label-card-cvc",
  }

  for (const [id, key] of Object.entries(textElements)) {
    const el = document.getElementById(id)
    if (el && currentTranslations[key]) {
      el.textContent = currentTranslations[key]
    }
  }

  // Traduzir placeholders dos campos
  const placeholderElements = {
    "card-name": "card-name-placeholder",
    "card-number": "card-number-placeholder",
    "card-validity": "card-validity-placeholder",
    "card-cvc": "card-cvc-placeholder",
  }

  for (const [id, placeholderKey] of Object.entries(placeholderElements)) {
    const el = document.getElementById(id)
    if (el && currentTranslations[placeholderKey]) {
      el.placeholder = currentTranslations[placeholderKey]
    }
  }
}

// Função para mudar idioma (página principal) - VERSÃO CORRIGIDA
function changeLanguage() {
  const selectedLanguage = document.getElementById("language").value
  const elementsToTranslate = translations[selectedLanguage]
  console.log("Mudando idioma para:", selectedLanguage) // Debug

  // Atualizar o atributo lang do HTML
  document.documentElement.lang = selectedLanguage

  // Traduzir todos os elementos da página principal
  const mainPageElements = {
    "banner-subtitle": "banner-subtitle",
    "service-security-title": "service-security-title",
    "service-security-desc": "service-security-desc",
    "service-performance-title": "service-performance-title",
    "service-performance-desc": "service-performance-desc",
    "service-support-title": "service-support-title",
    "service-support-desc": "service-support-desc",
    "pricing-title": "pricing-title",
    "pricing-subtitle": "pricing-subtitle",
    "plan-basic": "plan-basic",
    "plan-professional": "plan-professional",
    "plan-business": "plan-business",
    "plan-month-1": "plan-month-1",
    "plan-month-2": "plan-month-2",
    "plan-month-3": "plan-month-3",
    "plan-space-1": "plan-space-1",
    "plan-subdomain-1": "plan-subdomain-1",
    "plan-email-1": "plan-email-1",
    "plan-bandwidth-1": "plan-bandwidth-1",
    "plan-support-1": "plan-support-1",
    "plan-space-2": "plan-space-2",
    "plan-subdomain-2": "plan-subdomain-2",
    "plan-email-2": "plan-email-2",
    "plan-bandwidth-2": "plan-bandwidth-2",
    "plan-support-2": "plan-support-2",
    "plan-space-3": "plan-space-3",
    "plan-subdomain-3": "plan-subdomain-3",
    "plan-email-3": "plan-email-3",
    "plan-bandwidth-3": "plan-bandwidth-3",
    "plan-support-3": "plan-support-3",
    "plan-buy-0": "plan-buy-0",
    "plan-buy-1": "plan-buy-1",
    "plan-buy-2": "plan-buy-2",
    "text-rec": "text-rec",
    "domain-title": "domain-title",
    "domain-subtitle": "domain-subtitle",
    "domain-search-btn": "domain-search-btn",
    "contact-title": "contact-title",
    "contact-subtitle": "contact-subtitle",
    "contact-submit": "contact-submit",
    "nav-domain": "nav-domain",
    "nav-prices": "nav-prices",
    "nav-contact": "nav-contact",
    "nav-login": "nav-login",
    "nav-logout": "nav-logout",
  }

  // Traduzir elementos da página principal
  for (const [elementId, translationKey] of Object.entries(mainPageElements)) {
    const element = document.getElementById(elementId)
    if (element && elementsToTranslate[translationKey]) {
      if (element.tagName === "INPUT" && element.type === "submit") {
        element.value = elementsToTranslate[translationKey]
      } else {
        element.textContent = elementsToTranslate[translationKey]
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/planos")
      .then((response) => response.json())
      .then((planos) => {
        planos.forEach((plano, index) => {
          if (index < 3) {
            document.getElementById(`plan-${plano.Nome.toLowerCase()}`).textContent = plano.Nome
            document.getElementById(`price-${index + 1}`).textContent = plano.Preco
            document.getElementById(`plan-space-${index + 1}`).textContent = plano.Espaco
            document.getElementById(`plan-subdomain-${index + 1}`).textContent = plano.Subdominios
            document.getElementById(`plan-email-${index + 1}`).textContent = plano.Emails
            document.getElementById(`plan-bandwidth-${index + 1}`).textContent = plano.Trafego
            document.getElementById(`plan-support-${index + 1}`).textContent = plano.Suporte
          }
        })
      })
      .catch((error) => console.error("Erro ao carregar planos:", error))
  })

  // Atualizar placeholders
  updatePlaceholders(selectedLanguage)

  // Salvar preferência no localStorage
  localStorage.setItem("preferredLanguage", selectedLanguage)

  applyCardTranslations(selectedLanguage)

  console.log("Tradução aplicada com sucesso!") // Debug
}

function redirectToPurchase(planoId) {
  const currentLanguage = localStorage.getItem("preferredLanguage") || "pt"
  window.location.href = `/compra/${planoId}?lang=${currentLanguage}`
}

// Função para aplicar traduções na página de CADASTRO
function applyRegisterTranslations(language) {
  const currentTranslations = translations[language]

  // Atualizar título da página
  if (document.title.includes("Cadastre-se") || document.title.includes("Sign Up")) {
    document.title = language === "pt" ? "Cadastre-se" : "Sign Up"
  }

  // Atualizar atributo lang do HTML
  document.documentElement.lang = language

  // Traduzir título de boas-vindas
  const welcomeTitle = document.querySelector("#banner-layer h1")
  if (welcomeTitle) {
    welcomeTitle.textContent = currentTranslations["welcome-title-cadastro"]
  }

  // Traduzir título do formulário
  const formTitle = document.querySelector("#register-form h2")
  if (formTitle) {
    formTitle.textContent = currentTranslations["form-title"]
  }

  // Traduzir subtítulo do formulário
  const formSubtitle = document.querySelector("#register-form > p:first-of-type")
  if (formSubtitle) {
    formSubtitle.textContent = currentTranslations["form-subtitle"]
  }

  // Traduzir labels
  const labels = document.querySelectorAll("label")
  labels.forEach((label) => {
    const forAttr = label.getAttribute("for")
    switch (forAttr) {
      case "name":
        label.textContent = currentTranslations["name-label"]
        break
      case "email":
        label.textContent = currentTranslations["email-label"]
        break
      case "password":
        label.textContent = currentTranslations["password-label"]
        break
      case "length":
        label.textContent = currentTranslations["length-label"]
        break
      case "letters":
        label.textContent = currentTranslations["letters-label"]
        break
      case "numbers":
        label.textContent = currentTranslations["numbers-label"]
        break
      case "symbols":
        label.textContent = currentTranslations["symbols-label"]
        break
      case "confirmpassword":
        label.textContent = currentTranslations["confirm-password-label"]
        break
    }
  })

  // Traduzir outros elementos específicos do cadastro
  const passwordHelpP = document.querySelector("#register-form > p:nth-of-type(2)")
  if (passwordHelpP) {
    passwordHelpP.innerHTML =
      currentTranslations["password-help"] +
      ' <span id="open-generate-password">' +
      currentTranslations["password-help-link"] +
      "</span>"

    // Re-adicionar o event listener após atualizar o HTML
    const newOpenCloseButton = document.querySelector("#open-generate-password")
    if (newOpenCloseButton) {
      newOpenCloseButton.addEventListener("click", () => {
        const generatePasswordContainer = document.querySelector("#generate-options")
        if (generatePasswordContainer) {
          generatePasswordContainer.classList.toggle("hide")
        }
      })
    }
  }

  const generateOptionsP = document.querySelector("#generate-options > p")
  if (generateOptionsP) {
    generateOptionsP.textContent = currentTranslations["generate-options-title"]
  }

  const generateButton = document.querySelector("#generate-password")
  if (generateButton) {
    generateButton.textContent = currentTranslations["generate-button"]
  }

  const generatedPasswordP = document.querySelector("#generated-password > p")
  if (generatedPasswordP) {
    generatedPasswordP.textContent = currentTranslations["generated-password-text"]
  }

  const copyButton = document.querySelector("#copy-password")
  if (copyButton) {
    copyButton.textContent = currentTranslations["copy-button"]
  }

  // Traduzir link "Já tenho conta"
  const possuiLink = document.querySelector("#possui")
  if (possuiLink) {
    possuiLink.textContent = currentTranslations["possui"]
  }

  // Traduzir botão de submit para CADASTRAR
  const submitButton = document.querySelector('input[type="submit"]')
  if (submitButton) {
    submitButton.value = currentTranslations["submit-button"]
  }

  // Atualizar placeholders da página de cadastro
  updateLoginPlaceholders(language)
}

// Função para aplicar traduções na página de LOGIN
function applyLoginTranslations(language) {
  const currentTranslations = translations[language]

  // Atualizar título da página
  if (document.title.includes("Entrar") || document.title.includes("Login")) {
    document.title = currentTranslations["login-page-title"]
  }

  // Atualizar atributo lang do HTML
  document.documentElement.lang = language

  // Traduzir título de boas-vindas
  const welcomeTitle = document.querySelector("#banner-layer h1")
  if (welcomeTitle) {
    welcomeTitle.textContent = currentTranslations["welcome-title-login"]
  }

  // Traduzir título do formulário
  const formTitle = document.querySelector("#login-form h2")
  if (formTitle) {
    formTitle.textContent = currentTranslations["login-form-title"]
  }

  // Traduzir subtítulo do formulário
  const formSubtitle = document.querySelector("#login-form > p:first-of-type")
  if (formSubtitle) {
    formSubtitle.textContent = currentTranslations["login-form-subtitle"]
  }

  // Traduzir labels
  const labels = document.querySelectorAll("label")
  labels.forEach((label) => {
    const forAttr = label.getAttribute("for")
    switch (forAttr) {
      case "email":
        label.textContent = currentTranslations["email-label"]
        break
      case "password":
        label.textContent = currentTranslations["password-label"]
        break
    }
  })

  // Traduzir placeholders
  const emailInput = document.getElementById("email")
  if (emailInput) {
    emailInput.placeholder = language === "pt" ? "Digite seu e-mail" : "Enter your email"
  }

  const passwordInput = document.getElementById("password")
  if (passwordInput) {
    passwordInput.placeholder = language === "pt" ? "Digite a sua senha" : "Enter your password"
  }

  // Traduzir link "Não tenho conta"
  const possuiLink = document.querySelector("#possui")
  if (possuiLink) {
    possuiLink.textContent = currentTranslations["login-possui"]
  }

  // Traduzir botão de submit para ENTRAR
  const submitButton = document.querySelector('input[type="submit"]')
  if (submitButton) {
    submitButton.value = currentTranslations["login-submit-button"]
  }
}

// Função para aplicar traduções na página de compra
function applyPurchaseTranslations(language) {
  const currentTranslations = translations[language]

  // Atualizar título da página
  if (document.title.includes("Confirmação") || document.title.includes("Purchase")) {
    document.title = currentTranslations["purchase-page-title"]
  }

  // Atualizar atributo lang do HTML
  document.documentElement.lang = language

  // Traduzir elementos por ID
  const purchaseElements = {
    "back-text": "back-text",
    "summary-title": "summary-title",
    "features-title": "features-title",
    "form-title": "billing-form-title",
    "first-name-label": "first-name-label",
    "last-name-label": "last-name-label",
    "email-label": "purchase-email-label",
    "phone-label": "phone-label",
    "country-label": "country-label",
    "state-label": "state-label",
    "city-label": "city-label",
    "payment-title": "payment-title",
    "credit-card-text": "credit-card-text",
    "pix-text": "pix-text",
    "boleto-text": "boleto-text",
    "subtotal-label": "subtotal-label",
    "tax-label": "tax-label",
    "total-label": "total-label",
    "purchase-btn-text": "purchase-btn-text",
    "success-title": "success-title",
    "success-message": "success-message",
    "back-home-btn": "back-home-btn",
  }

  // Aplicar traduções
  for (const [elementId, translationKey] of Object.entries(purchaseElements)) {
    const element = document.getElementById(elementId)
    if (element && currentTranslations[translationKey]) {
      element.textContent = currentTranslations[translationKey]
    }
  }

  // Atualizar período do plano
  const planPeriod = document.getElementById("plan-period")
  if (planPeriod) {
    planPeriod.textContent = currentTranslations["plan-period"]
  }

  // Atualizar placeholders da página de compra
  updatePurchasePlaceholders(language)

  // APLICAR TRADUÇÕES DO CARTÃO
  applyCardTranslations(language)
}

// Função para atualizar placeholders
function updatePlaceholders(language) {
  const placeholders = {
    pt: {
      domain: "Digite seu domínio",
      name: "Seu nome",
      email: "Seu e-mail",
      message: "Descreva o que você precisa ou seu projeto aqui...",
    },
    en: {
      domain: "Enter your domain",
      name: "Your name",
      email: "Your email",
      message: "Describe what you need or your project here...",
    },
  }

  for (const [id, placeholder] of Object.entries(placeholders[language])) {
    const element = document.getElementById(id)
    if (element) {
      element.placeholder = placeholder
    }
  }
}

// Função para atualizar placeholders da página de login
function updateLoginPlaceholders(language) {
  const loginPlaceholders = {
    pt: {
      name: "Digite seu nome",
      email: "Digite seu e-mail",
      password: "Digite a sua senha",
      confirmpassword: "Confirme a sua senha",
    },
    en: {
      name: "Enter your name",
      email: "Enter your email",
      password: "Enter your password",
      confirmpassword: "Confirm your password",
    },
  }

  for (const [id, placeholder] of Object.entries(loginPlaceholders[language])) {
    const element = document.getElementById(id)
    if (element) {
      element.placeholder = placeholder
    }
  }
}

// Função para atualizar placeholders da página de compra
function updatePurchasePlaceholders(language) {
  const currentTranslations = translations[language]
  const placeholderElements = {
    firstName: "first-name-placeholder",
    lastName: "last-name-placeholder",
    email: "purchase-email-placeholder",
    phone: "phone-placeholder",
    state: "state-placeholder",
    city: "city-placeholder",
  }

  for (const [id, translationKey] of Object.entries(placeholderElements)) {
    const element = document.getElementById(id)
    if (element && currentTranslations[translationKey]) {
      element.placeholder = currentTranslations[translationKey]
    }
  }
}

function atualizarImposto() {
  const subtotalElement = document.getElementById("subtotal-value")
  const taxValueElement = document.getElementById("tax-value")
  const totalValueElement = document.getElementById("total-value")

  if (!subtotalElement || !taxValueElement || !totalValueElement) return

  let precoTexto = subtotalElement.textContent.trim()
  // Remove "R$" se existir
  precoTexto = precoTexto.replace("R$", "").trim()
  // Converte para número
  let precoNumero = Number.parseFloat(precoTexto)
  if (isNaN(precoNumero)) precoNumero = 0

  // Calcula 5%
  const imposto = precoNumero * 0.05
  const total = precoNumero + imposto

  // Formata os valores para R$ XX,XX
  taxValueElement.textContent = "R$ " + imposto.toFixed(2).replace(".", ",")
  totalValueElement.textContent = "R$ " + total.toFixed(2).replace(".", ",")
}

document.addEventListener("DOMContentLoaded", atualizarImposto)

// Processar compra
function processPurchase(event) {
  event.preventDefault()
  const currentLanguage = localStorage.getItem("preferredLanguage") || "pt"
  const form = document.getElementById("purchase-form")
  const purchaseBtn = document.getElementById("purchase-btn")
  const btnText = document.getElementById("purchase-btn-text")

  if (!form || !purchaseBtn || !btnText) return

  // Validar formulário
  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }

  // Mostrar loading
  form.classList.add("loading")
  btnText.textContent = translations[currentLanguage]["processing"]
  purchaseBtn.disabled = true

  // Simular processamento
  setTimeout(() => {
    // Remover loading
    form.classList.remove("loading")
    purchaseBtn.disabled = false
    btnText.textContent = translations[currentLanguage]["purchase-btn-text"]

    // Mostrar modal de sucesso
    const successModal = document.getElementById("success-modal")
    if (successModal) {
      successModal.style.display = "block"
    }

    // Limpar dados do plano
    localStorage.removeItem("selectedPlan")
    localStorage.removeItem("selectedPlanType")
  }, 3000)
}

// Conecta a função ao evento submit do formulário
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("purchase-form")
  if (form) {
    form.addEventListener("submit", processPurchase)
  }
})

// Função para verificar domínio usando DNS do Google
function verificarDominio(event) {
  event.preventDefault()
  const dominio = document.getElementById("domain").value.trim()
  const resultado = document.getElementById("resultado")
  const currentLanguage =
    document.getElementById("language")?.value || localStorage.getItem("preferredLanguage") || "pt"

  // Verifica se há domínio
  if (dominio) {
    resultado.textContent = currentLanguage === "pt" ? "Verificando..." : "Checking..."
    resultado.style.color = "#4a90e2"

    var url = "https://dns.google/resolve?name=" + dominio + "&type=A"

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Status === 0) {
          // Domínio existe (não disponível)
          resultado.textContent = translations[currentLanguage]["domain-unavailable"]
          resultado.style.color = "#f45c57"
        } else {
          // Domínio não existe (disponível)
          resultado.textContent = translations[currentLanguage]["domain-available"]
          resultado.style.color = "#4a90e2"
        }
      })
      .catch((error) => {
        resultado.textContent = translations[currentLanguage]["domain-error"]
        resultado.style.color = "#f45c57"
        console.error("Erro ao verificar domínio:", error)
      })
  } else {
    resultado.textContent = translations[currentLanguage]["domain-invalid"]
    resultado.style.color = "#f45c57"
  }
}

// Função para aplicar traduções básicas em páginas que não são a main
function applyBasicTranslations(language) {
  const currentTranslations = translations[language]

  // Traduzir título da página baseado no título atual
  if (document.title.includes("Cadastre-se") || document.title === "Cadastre-se") {
    document.title = language === "pt" ? "Cadastre-se" : "Sign Up"
  } else if (document.title.includes("Entrar") || document.title === "Entrar") {
    document.title = currentTranslations["login-page-title"]
  }

  // Traduzir link "Já possui conta" ou "Não tenho conta" se existir
  const possuiLink = document.querySelector("#possui")
  if (possuiLink) {
    // Detectar se é página de login pelo ID do formulário
    if (document.getElementById("login-form")) {
      // Página de login: "Não tenho conta"
      possuiLink.textContent = currentTranslations["login-possui"]
    } else if (document.getElementById("register-form")) {
      // Página de cadastro: "Já tenho conta"
      possuiLink.textContent = currentTranslations["possui"]
    }
  }

  // Atualizar atributo lang do HTML
  document.documentElement.lang = language
}

// Carregar idioma salvo ao inicializar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("preferredLanguage") || "pt"

  // Se estiver na página principal
  const languageSelect = document.getElementById("language")
  if (languageSelect) {
    languageSelect.value = savedLanguage
    changeLanguage()
  } else {
    // Se NÃO estiver na página principal, aplicar traduções básicas primeiro
    applyBasicTranslations(savedLanguage)
  }

  // Se estiver na página de cadastro (register-form)
  const registerForm = document.getElementById("register-form")
  if (registerForm) {
    // Aplicar traduções específicas de CADASTRO
    applyRegisterTranslations(savedLanguage)
  }

  // Se estiver na página de login (login-form)
  const loginForm = document.getElementById("login-form")
  if (loginForm) {
    // Aplicar traduções específicas de LOGIN
    applyLoginTranslations(savedLanguage)
  }

  // Se estiver na página de compra
  const purchaseForm = document.getElementById("purchase-form")
  if (purchaseForm) {
    applyPurchaseTranslations(savedLanguage)

    // Event listener para formulário de compra
    purchaseForm.addEventListener("submit", processPurchase)

    // Fechar modal clicando fora
    const successModal = document.getElementById("success-modal")
    if (successModal) {
      successModal.addEventListener("click", (e) => {
        if (e.target.id === "success-modal") {
          e.target.style.display = "none"
        }
      })
    }
  }
})

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

//LOGIN//

// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")

// Após refatoração
const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")

// Funções do gerador de senha
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
  return Math.floor(Math.random() * 11).toString()
}

const getSymbol = () => {
  const symbols = "(){}[]=<>/,.!@#$%^&*"
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
  let password = ""
  const passwordLength = lengthInput.value

  // Após refatoração
  const generators = []

  if (lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase)
  }

  if (numbersInput.checked) {
    generators.push(getNumber)
  }

  if (symbolsInput.checked) {
    generators.push(getSymbol)
  }

  if (generators.length === 0) {
    return
  }

  for (let i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue = generators[Math.floor(Math.random() * generators.length)]()
      password += randomValue
    })
  }

  password = password.slice(0, passwordLength)

  generatedPasswordElement.style.display = "block"
  generatedPasswordElement.querySelector("h4").innerText = password
}

// Eventos do gerador de senha
if (generatePasswordButton) {
  generatePasswordButton.addEventListener("click", (e) => {
    e.preventDefault()
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
  })
}

if (openCloseGeneratorButton) {
  openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide")
  })
}

if (copyPasswordButton) {
  copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault()
    const password = generatedPasswordElement.querySelector("h4").innerText
    const currentLanguage = localStorage.getItem("preferredLanguage") || "pt"

    navigator.clipboard.writeText(password).then(() => {
      copyPasswordButton.textContent = translations[currentLanguage]["copy-success"]
      setTimeout(() => {
        copyPasswordButton.textContent = translations[currentLanguage]["copy-button"]
      }, 1000)
    })
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const cartaoDiv = document.getElementById("box-cartao")
  const paymentOptions = document.querySelectorAll('input[name="payment"]')

  paymentOptions.forEach((option) => {
    option.addEventListener("change", function () {
      const currentLanguage = localStorage.getItem("preferredLanguage") || "pt"

      if (this.value === "credit") {
        cartaoDiv.style.display = "block"
        // Aplicar traduções quando o cartão for exibido
        applyCardTranslations(currentLanguage)
      } else {
        cartaoDiv.style.display = "none"
      }
    })
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const pixDiv = document.getElementById("box-pix")
  const paymentOptions = document.querySelectorAll('input[name="payment"]')

  paymentOptions.forEach((option) => {
    option.addEventListener("change", function () {
      if (this.value === "pix") {
        pixDiv.style.display = "block"
      } else {
        pixDiv.style.display = "none"
      }
    })
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const boletoDiv = document.getElementById("box-boleto")
  const paymentOptions = document.querySelectorAll('input[name="payment"]')

  paymentOptions.forEach((option) => {
    option.addEventListener("change", function () {
      if (this.value === "boleto") {
        boletoDiv.style.display = "block"
      } else {
        boletoDiv.style.display = "none"
      }
    })
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const purchaseBtn = document.getElementById("purchase-btn")
  if (purchaseBtn) {
    purchaseBtn.addEventListener("click", (e) => {
      fetch("/verificar-sessao")
        .then((response) => response.json())
        .then((data) => {
          if (!data.logado) {
            alert("Você precisa estar logado para finalizar a compra.")
            window.location.href = "/login"
          } else {
            document.getElementById("purchase-form").submit()
          }
        })
        .catch((error) => {
          console.error("Erro ao verificar a sessão:", error)
          alert("Erro ao validar sessão. Tente novamente.")
        })
    })
  }
})