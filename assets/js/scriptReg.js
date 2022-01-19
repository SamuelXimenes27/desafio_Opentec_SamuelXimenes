function meuEscopo() {
    const form = document.querySelector('.formulario-reg');

    /*função que redireciona para a pagina de login */
    function clicka() {
        location.href = 'https://samuelximenes27.github.io/desafio_Opentec_SamuelXimenes/';
    }

    /*função que pega os valores do email e senha e verifica
    se são iguais ao valor setado de acordo com os valores fornecidos no teste. */
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const valueEmail = form.querySelector('#email-reg');
        const emailRegOpen = valueEmail.value;
        const valueSenha = form.querySelector('#password-reg');
        const senhaRegOpen = valueSenha.value;


        function checkReg() {
            if (emailRegOpen == 'usuario@teste.com.br' && senhaRegOpen == 'senha123') {
                /*alerta personalizado */
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
