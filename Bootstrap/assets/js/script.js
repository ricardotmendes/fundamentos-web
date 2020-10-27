let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let nomeOk = false
let emailOk = false
let senhaOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}


function validaSenha(){
    let txtSenha = document.querySelector('#txtSenha')
    let caracteres = ["!","£","$","%","^","&","*","_","@","#","~","?"]

    for(let i = 0; i < caracteres.length; i++){
        if(senha.value.length < 8 || senha.value.indexOf(caracteres[i])== -1){
        
            txtSenha.innerHTML = 'A senha é fraca'
            txtSenha.style.color = 'red'
            
        } else {
            
            txtSenha.innerHTML = 'A senha é forte'
            txtSenha.style.color = 'green'
            senhaOk = true
            break
        }
    }

   
}





function enviar(){

    if (nomeOk == true && emailOk == true && senhaOk== true){
        alert ('Cadastro realizado! Seja bem vindo!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar!!!')
    }
}