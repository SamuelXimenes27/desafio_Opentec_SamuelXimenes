function formsScope() {
    const formLogin = document.querySelector('.formulario');
    const formRegister = document.getElementById('formulario-reg');

    let pages = [];
    let links = [];

    function getEventLoginForm(evento) {
        evento.preventDefault();

        const valueEmail = formLogin.querySelector('#email');
        const emailOpen = valueEmail.value;
        const valueSenha = formLogin.querySelector('#password');
        const senhaOpen = valueSenha.value;

        function checkEmail() {
            if (emailOpen == 'usuario@teste.com.br' && senhaOpen === 'senha123') {
                /*alerta personalizado */
                alertify.success('Hi, usuario@teste.com.br! Welcome.');
            } else {
                alertify.error('Email or Password is not correct');
            }
        }
        checkEmail();

    }
    formLogin.addEventListener('submit', getEventLoginForm);

    function redirect() {
        location.href = '/';
    }

    function getEventRegisterForm(evento) {
        evento.preventDefault();

        const valueEmail = formRegister.querySelector('#email-reg');
        const emailRegOpen = valueEmail.value;
        const valuePassword = formRegister.querySelector('#password-reg');
        const passwordRegOpen = valuePassword.value;


        function checkReg() {
            if (emailRegOpen == 'usuario@teste.com.br' && passwordRegOpen == 'senha123') {
                alertify.success('Successfully registered, you will be redirected to the login screen.');
                setTimeout(function() { redirect() }, 3000);
            } else {
                alertify.error('The chosen Email or Password is not correct.');
            }
        }
        checkReg();

    }
    formRegister.addEventListener('submit', getEventRegisterForm)


    
    document.addEventListener("DOMContentLoaded", function(){
        pages = document.querySelectorAll('[data-page]');
        links = document.querySelectorAll('[data-role="link"]');
        [].forEach.call(links, function(link){
            link.addEventListener("click", navigate)
        });
    });
    
    function navigate(ev){
        ev.preventDefault();
        let id = ev.currentTarget.href.split("#")[1];
        [].forEach.call(pages, function(page){
           if(page.id ===id){
               page.classList.add('active');
           }else{
               page.classList.remove('active');
           } 
        });
        return false;
    }
    
    return {
        pages,
        links,
        xhr: ajax
    }
}

formsScope();