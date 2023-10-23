function login(){
const email = document.getElementById('login-email').value;
const senha = document.getElementById('login-senha').value;


const users = JSON.parse(localStorage.getItem('users')) || [];

const user = users.find(u => u.email === email && u.senha === senha);

if (user) {
    document.getElementById('result').innerHTML = 'Login bem-sucedido';
    window.location.href = 'https://vargahenrique.github.io/CasaDosSmokings/';
} else {
    document.getElementById('result').innerHTML = 'Login falhou';
}


}

function register() {
//variáveis que salvam o prompt do HTML
const email = document.getElementById('register-email').value;
const senha = document.getElementById('register-senha').value;
const nome = document.getElementById('register-nome').value;
const nomeError = document.getElementById('nomeError');
const senhaError = document.getElementById('senhaError');


//recupera os dados de cadastro do localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

if(! nome || email || senha || senha.lengh < 8){
    document.getElementById('result').innerHTML = 'Cadastro falhou'; 
}

//registra o email e a senha no banco de dados
users.push({email, senha, nome})

//salva a lista atualizada de usuários no localStorage
localStorage.setItem('users', JSON.stringify(users));
document.getElementById('result').innerHTML = 'Cadastro bem-sucedido';


const loginEmail = document.getElementById('login-email').value;
const loginSenha = document.getElementById('login-senha').value;

//Autentificação:
//Após o login bem-sucedido, o usuário deve ser redirecionado para a página principal da loja.
if (loginEmail === email && loginSenha === senha) {
    // leva para o link
    window.location.href = 'https://vargahenrique.github.io/CasaDosSmokings/';
    //experiência de usuário:
}else{
    loginError.textContent = 'Credenciais inválidas. Tente novamente.';
    nomeError.textContent = '';
    senhaError.textContent = '';
}

}

//Ocultar/mostrar a senha do login 
document.addEventListener('DOMContentLoaded', function(){
const passwordField = document.getElementById('login-senha')
const img = document.getElementById("olho")

img.addEventListener('click', function(){
if(passwordField.type === 'password'){
   passwordField.type = 'text';
}else{
    passwordField.type = 'password';
}
});
});

//Ocultar/mostrar a senha do cadastro
document.addEventListener('DOMContentLoaded', function(){
    const espaçoSenha = document.getElementById('register-senha')
    const img = document.getElementById("olho2")
    
    img.addEventListener('click', function(){
    if(espaçoSenha.type === 'password'){
       espaçoSenha.type = 'text';
    }else{
        espaçoSenha.type = 'password';
    }
});
});



