let form = document.querySelector('form');
let bt = document.querySelector('[data-submit]');
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');
let msg = document.getElementById('msg');

function verifica() {
    if (nome.value == ''){
        nome.setCustomValidity('Coloque seu nome para contato');
    } else {
        nome.setCustomValidity('');
    }

    if (email.value == ''){
        email.setCustomValidity('Deixe seu email para retorno');
    } else {
        email.setCustomValidity('');
    }

    if (assunto.value == ''){
        assunto.setCustomValidity('Qual o seu interesse?');
    } else {
        assunto.setCustomValidity('');
    }

    if (msg.value == ''){
        msg.setCustomValidity('Me de alguns detalhes');
    } else {
        msg.setCustomValidity('');
    }

}

bt.addEventListener('click', verifica)
