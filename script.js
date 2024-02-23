document.addEventListener('DOMContentLoaded', function() {
    // Carregar dados salvos, se existirem
    document.getElementById('nome').value = localStorage.getItem('nome') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';

    // Adiciona evento de 'blur' para salvar dados ao sair do campo
    document.getElementById('nome').addEventListener('blur', salvarDados);
    document.getElementById('email').addEventListener('blur', salvarDados);
});

function salvarDados() {
    // Obter valores dos inputs
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    // Armazenar no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Simples validação dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    if(nome.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Feedback para o usuário
    alert('Dados salvos com sucesso!');
});