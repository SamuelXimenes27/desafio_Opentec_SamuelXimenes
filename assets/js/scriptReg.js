function meuEscopo() {
    const form = document.querySelector('.formulario-reg');

    function clicka() {
        location.href = '../open-teste/index.html';
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const valueEmail = form.querySelector('#email-reg');
        const emailRegOpen = valueEmail.value;
        const valueSenha = form.querySelector('#password-reg');
        const senhaRegOpen = valueSenha.value;


        function checkReg() {
            if (emailRegOpen == 'usuario@teste.com.br' && senhaRegOpen == 'senha123') {
                alertify.success('Successfully registered, you will be redirected to the login screen.');
                setTimeout(function() { clicka() }, 3000);
            } else {
                alertify.error('The chosen Email or Password is not correct.');
            }
        }
        checkReg();

    }
    form.addEventListener('submit', recebeEventoForm)
}


meuEscopo();