let sliderElement = document.querySelector("#slider")
let button = document.querySelector("#button")

let cont = document.querySelector('#valor')
let password = document.querySelector("#password")

let container = document.querySelector('#container-password')


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"

let novaSenha = '';

cont.innerHTML = sliderElement.value

slider.oninput = function (){
    cont.innerHTML = this.value
}

function generatePassword(){
   let pass = '';
   for(let i = 0 ,n = charset.length;i <= sliderElement.value;++i) {
    pass += charset.charAt(Math.floor(Math.random() * n))
   }
   container.classList.remove("hide")
   password.innerHTML = pass
   novaSenha=pass
}
function copyPassWord(){
    alert("senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha)
}
