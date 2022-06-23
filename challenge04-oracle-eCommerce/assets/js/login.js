// LOGIN
let formLogin = document.querySelector('.login_formulario')
let email = document.querySelector('[type=email]')
let senha = document.querySelector('[type=password]')

let admins = {
    nome: 'admin@email.com',
    senha: '1'
}
let autenticacao = false

localStorage.setItem('usuarios',JSON.stringify(admins))
localStorage.setItem('auth', JSON.stringify(autenticacao))

let url = window.location.href

formLogin.addEventListener('submit', e => {
    e.preventDefault()
    if (email.value == admins.nome && senha.value == admins.senha){
        localStorage.setItem('auth', JSON.stringify([true]))
        let caminho = url.slice(0, url.indexOf('login')) 
        window.location.href = caminho + 'admin.html'
    } else {
        let aviso = document.querySelector('.aviso')
        aviso.style.visibility = 'visible'
        aviso.style.color = '#f00'
        aviso.textContent = 'Usuario ou senha incorreto(s)'
        setTimeout(function(){
            aviso.style.visibility = 'hidden'
        }, 2000)
        
    }
        
})