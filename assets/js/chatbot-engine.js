let responses = {};
const chatBody = document.getElementById("chat-body");
const closeButton = document.getElementById("close-button");
const resetButton = document.getElementById("reset-button");


// Close button logic
closeButton.addEventListener("click", () => {
    chatBody.innerHTML = "";
    responses = {}; // Reset responses
    document.getElementById("chatbot").classList.remove("opened");
});

// Reset button logic
resetButton.addEventListener("click", () => {
    if(!Object.keys(responses).length == 0){
        chatBody.innerHTML = "";
        responses = {}; // Reset responses
        startChat();        
    }
});

function startChat() {
    const typingIndicator = createTypingIndicator(chatBody);

    setTimeout(() => {
        typingIndicator.remove();

        const botMessage = document.createElement("div");
        botMessage.className = "chat-message bot-message";
        botMessage.innerHTML = `
            Bonjour !<br><br>Quel service recherchez-vous ?
            <div class="options-container" id="service-options">
                <button class="option-button" onclick="selectService('Le développement', 'service-options')">Le développement</button>
                <button class="option-button" onclick="selectService('La maintenance et la sécurité', 'service-options')">La maintenance et la sécurité</button>
                <button class="option-button" onclick="selectService('Autres services IT', 'service-options')">Autres services IT</button>
            </div>
        `;
        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 700);
}

function selectService(service, containerId) {
    const chatBody = document.getElementById("chat-body");

    // Clear previous options
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    // Save user response
    responses.service = service;

    // Add user response
    const userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.innerText = service;
    chatBody.appendChild(userMessage);

    // Typing indicator
    const typingIndicator = createTypingIndicator(chatBody);

    setTimeout(() => {
        typingIndicator.remove();

        if (service === "Le développement") {
            askDevelopmentType();
        } else if (service === "La maintenance et la sécurité") {
            askMaintenanceDetails();
        } else if (service === "Autres services IT") {
            askOtherITDetails();
        }
    }, 700);
}

function askDevelopmentType() {
    const chatBody = document.getElementById("chat-body");

    const botMessage = document.createElement("div");
    botMessage.className = "chat-message bot-message";
    botMessage.innerHTML = `
        Quel type de développement recherchez-vous ?
        <div class="options-container" id="development-options">
            <button class="option-button" onclick="selectDevelopmentType('Site Web', 'development-options')">Site Web</button>
            <button class="option-button" onclick="selectDevelopmentType('Application Mobile', 'development-options')">Application Mobile</button>
            <button class="option-button" onclick="selectDevelopmentType('Logiciel', 'development-options')">Logiciel</button>
        </div>
    `;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function selectDevelopmentType(type, containerId) {
    const chatBody = document.getElementById("chat-body");

    // Clear previous options
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    // Save user response
    responses.developmentType = type;

    // Add user response
    const userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.innerText = type;
    chatBody.appendChild(userMessage);

    // Typing indicator
    const typingIndicator = createTypingIndicator(chatBody);

    setTimeout(() => {
        typingIndicator.remove();

        if (type === "Site Web") {
            askWebsiteDetails();
        } else {
            askCommonDevelopmentQuestions();
        }
    }, 700);
}

function askWebsiteDetails() {
    const chatBody = document.getElementById("chat-body");

    const botMessage = document.createElement("div");
    botMessage.className = "chat-message bot-message";
    botMessage.innerHTML = `
        Quel type de site souhaitez-vous ?
        <div class="options-container" id="website-type-options">
            <button class="option-button" onclick="selectWebsiteType('Site E-commerce', 'website-type-options')">Site E-commerce</button>
            <button class="option-button" onclick="selectWebsiteType('Site de Gestion Interne', 'website-type-options')">Site de Gestion Interne</button>
            <button class="option-button" onclick="selectWebsiteType('Portfolio', 'website-type-options')">Portfolio</button>
            <button class="option-button" onclick="selectWebsiteType('Blog', 'website-type-options')">Blog</button>
            <button class="option-button" onclick="selectWebsiteType('Autre', 'website-type-options')">Autre</button>
        </div>
    `;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function selectWebsiteType(type, containerId) {
    const chatBody = document.getElementById("chat-body");

    // Clear previous options
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    // Save user response
    responses.websiteType = type;

    // Add user response
    const userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.innerText = type;
    chatBody.appendChild(userMessage);

    // Typing indicator
    const typingIndicator = createTypingIndicator(chatBody);

    setTimeout(() => {
        typingIndicator.remove();

        askCommonDevelopmentQuestions();
    }, 700);
}

function askCommonDevelopmentQuestions() {
    const chatBody = document.getElementById("chat-body");

    const botMessage = document.createElement("div");
    botMessage.className = "chat-message bot-message";
    botMessage.innerHTML = `
        Avez-vous déjà une maquette prête ?
        <div class="options-container" id="mockup-options">
            <button class="option-button" onclick="saveAnswer('Oui', 'mockup-options')">Oui</button>
            <button class="option-button" onclick="saveAnswer('Non', 'mockup-options')">Non</button>
        </div>
    `;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function saveAnswer(answer, containerId) {
    const chatBody = document.getElementById("chat-body");

    // Clear previous options
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    // Save user response
    responses.mockup = answer;

    // Add user response
    const userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.innerText = answer;
    chatBody.appendChild(userMessage);

    chatBody.scrollTop = chatBody.scrollHeight;

    // Typing indicator
    const typingIndicator = createTypingIndicator(chatBody);

    setTimeout(() => {
        typingIndicator.remove();
        askContactInfos(); // Final question to collect the contact for this service
    }, 700);
}

function createTypingIndicator(chatBody) {
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "chat-message bot-message typing-indicator";
    typingIndicator.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
    chatBody.appendChild(typingIndicator);

    chatBody.scrollTop = chatBody.scrollHeight;

    return typingIndicator;
}

function askMaintenanceDetails() {
    const chatBody = document.getElementById("chat-body");

    const botMessage = document.createElement("div");
    botMessage.className = "chat-message bot-message";
    botMessage.innerHTML = `
        Quel service de maintenance et de sécurité recherchez-vous ?
        <div class="options-container" id="maintenance-options">
            <button class="option-button" onclick="selectMaintenanceDetail('Mises à jour et correctifs', 'maintenance-options')">Mises à jour et correctifs</button>
            <button class="option-button" onclick="selectMaintenanceDetail('Audits de sécurité', 'maintenance-options')">Audits de sécurité</button>
            <button class="option-button" onclick="selectMaintenanceDetail('Protection contre les cybermenaces', 'maintenance-options')">Protection contre les cybermenaces</button>
            <button class="option-button" onclick="selectMaintenanceDetail('Autre', 'maintenance-options')">Autre</button>
        </div>
    `;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function selectMaintenanceDetail(detail, containerId) {
    const chatBody = document.getElementById("chat-body");

    // Clear previous options
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    // Save user response
    responses.maintenanceDetail = detail;

    // Add user response
    const userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.innerText = detail;
    chatBody.appendChild(userMessage);

    // Typing indicator
    const typingIndicator = createTypingIndicator(chatBody);

    setTimeout(() => {
        typingIndicator.remove();

        askCommonMaintenanceQuestions();
    }, 700);
}

function askCommonMaintenanceQuestions() {
    const chatBody = document.getElementById("chat-body");

    const botMessage = document.createElement("div");
    botMessage.className = "chat-message bot-message";
    botMessage.innerHTML = `
        Avez-vous déjà un contrat de maintenance en cours ?
        <div class="options-container" id="contract-options">
            <button class="option-button" onclick="saveAnswer('Oui', 'contract-options')">Oui</button>
            <button class="option-button" onclick="saveAnswer('Non', 'contract-options')">Non</button>
        </div>
    `;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function askOtherITDetails() {
    const chatBody = document.getElementById("chat-body");

    const botMessage = document.createElement("div");
    botMessage.className = "chat-message bot-message";
    botMessage.innerHTML = `
        Quel type de service IT recherchez-vous ?
        <div class="options-container" id="other-it-options">
            <button class="option-button" onclick="selectOtherITDetail('Solutions de calcul et d\\'automatisation', 'other-it-options')">Solutions de calcul et d'automatisation</button>
            <button class="option-button" onclick="selectOtherITDetail('Nettoyage d\\'ordinateur', 'other-it-options')">Nettoyage d'ordinateur</button>
            <button class="option-button" onclick="selectOtherITDetail('Récupération des données', 'other-it-options')">Récupération des données</button>
            <button class="option-button" onclick="selectOtherITDetail('Autre', 'other-it-options')">Autre</button>
        </div>
    `;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function selectOtherITDetail(detail, containerId) {
    const chatBody = document.getElementById("chat-body");

    // Clear previous options
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    // Save user response
    responses.otherITDetail = detail;

    // Add user response
    const userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.innerText = detail;
    chatBody.appendChild(userMessage);

    // Typing indicator
    const typingIndicator = createTypingIndicator(chatBody);

    setTimeout(() => {
        typingIndicator.remove();

        askContactInfos(); // Final question to collect the contact for this service
    }, 700);
}

function askContactInfos() {
    const estimationMessage=createEstimationMessage();
    const chatBody = document.getElementById("chat-body");

    const botMessage = document.createElement("div");
    botMessage.className = "chat-message bot-message justify-text";
    botMessage.innerHTML = `
        Merci pour vos réponses ! <br><br>
        ${estimationMessage}
        Pour que nous puissions vous envoyer une estimation précise, pourriez-vous fournir votre adresse email ou votre numéro de télephone pour vous appeler ?
        <div class="contact-input-container">
            <input type="text" id="contact-input" placeholder="Entrer votre email ou télephone ici" class="contact-input" />
            <button id="submit-contact" class="submit-contact-button" onclick="submitContactInfo()">Envoyer</button>
        </div>
    `;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function submitContactInfo() {
    const contactInput = document.getElementById("contact-input");
    const contact = contactInput.value;

    if (!validateEmail(contact) && !validatePhone(contact)) {
        alert("Veuillez entrer une adresse email ou un numéro de téléphone valide.");
        return;
    }

    if (contact.includes("@")) {
        // Validate as email
        responses.contactMethod = "email";
        responses.contact = contact;
        processContactInfo(contact, createFinalMessage());
    } else {
        // Validate as phone number
        responses.contactMethod = "phone";
        responses.contact = contact;
        processContactInfo(contact, createFinalMessage());
    }
}

function createEstimationMessage() {
    if (
        responses.developmentType === "Autre" ||
        responses.websiteType === "Autre" ||
        responses.maintenanceDetail === "Autre" ||
        responses.otherITDetail === "Autre"
    ) {
        // If at least one "Autre" was chosen
        return ``;
    }

    // For other cases, mention a minimum cost
    const minCost = estimateMinCost(); // Example minimum cost, you can adjust this value
    return `Le coût minimum pour ce service est de ${minCost} €.`;
}

function createFinalMessage(){
    if (responses.contact.includes("@")) {
        return "Merci pour votre adresse email ! Nous vous contacterons sous peu avec une estimation.";
    } else {
        return "Merci pour votre numéro de téléphone ! Nous vous appellerons sous peu pour discuter de votre estimation.";
    }
}

function processContactInfo(contact, successMessage) {
    const chatBody = document.getElementById("chat-body");

    // Add user response
    const userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.innerText = contact;
    chatBody.appendChild(userMessage);

    const submitButton = document.getElementById("submit-contact");
    const contactInput = document.getElementById("contact-input");

    contactInput.disabled = true;
    submitButton.disabled = true;
    submitButton.classList.add("disabled-btn");

    // Typing indicator
    const typingIndicator = createTypingIndicator(chatBody);

    setTimeout(() => {
        typingIndicator.remove();

        // Final bot message
        const botMessage = document.createElement("div");
        botMessage.className = "chat-message bot-message";
        botMessage.innerHTML = successMessage;
        chatBody.appendChild(botMessage);

        chatBody.scrollTop = chatBody.scrollHeight;
    }, 700);
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
}

function estimateMinCost() {
    let baseCost = 50;

    // Adjust cost based on the type of service
    if (responses.service === "Le développement") {
        baseCost += 200; // Development services have a higher base cost

        if(responses.mockup === 'Non'){
            baseCost+=200;
        }

        // Adjust based on development type
        if (responses.developmentType === "Site Web") {
            baseCost += 300; // Web development cost
            if (responses.websiteType === "Site E-commerce") {
                baseCost += 500; // E-commerce sites are more expensive
            } else if (responses.websiteType === "Site de Gestion Interne") {
                baseCost += 700; // Internal management systems cost more
            } else if (responses.websiteType === "Portfolio" || responses.websiteType === "Blog") {
                baseCost += 200; // Portfolio or Blog is less expensive
            }
        } else if (responses.developmentType === "Application Mobile") {
            baseCost += 700; // Mobile applications cost more
        } else if (responses.developmentType === "Logiciel") {
            baseCost += 1000; // Custom software is expensive
        }
    } else if (responses.service === "La maintenance et la sécurité") {
        baseCost += 150; // Maintenance services base cost

        // Adjust based on maintenance details
        if (responses.maintenanceDetail === "Mises à jour et correctifs") {
            baseCost += 200; // Regular updates
        } else if (responses.maintenanceDetail === "Audits de sécurité") {
            baseCost += 400; // Security audits
        } else if (responses.maintenanceDetail === "Protection contre les cybermenaces") {
            baseCost += 600; // Cybersecurity protection
        }
    } else if (responses.service === "Autres services IT") {
        if(responses.otherITDetail=="Solutions de calcul et d'automatisation"){
            baseCost += 200;
        }
    }

    // Return the estimated cost
    return baseCost;
}


async function openChatBot(){
    const chatBot = document.getElementById("chatbot");
    if(!chatBot.classList.contains("opened")){
        chatBot.classList.add("opened");
        await sleep(500);
        startChat();        
    }
}

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}