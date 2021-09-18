function meuEscopo() {
    const form = document.querySelector('.formulario');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const valueEmail = form.querySelector('#email');
        const emailOpen = valueEmail.value;
        const valueSenha = form.querySelector('#password');
        const senhaOpen = valueSenha.value;

        function checkEmail(evento) {
            if (emailOpen == 'usuario@teste.com.br' && senhaOpen === 'senha123') {
                /*alertify.set('notifier', 'position', 'bottom-left');*/
                alertify.success('Olá, usuario@teste.com.br! Seja bem vindo.');
            } else {
                alertify.error('Email or Password is not correct');
            }
        }
        checkEmail();

    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();