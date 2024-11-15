document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores dos campos do formulário
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validação básica
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Exibe uma mensagem de sucesso
    alert("Formulário enviado com sucesso!");
    // Limpa o formulário após o envio
    document.getElementById("contactForm").reset();
});

// Função para validar o formato do e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
