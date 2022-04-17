
let iniciarJogo = document.querySelector('#iniciar-jogo')
let inputNovaPalavra = document.querySelector('#input-nova-palavra')
let btAddNovaPalavra = document.querySelector('#nova-palavra')
let letras = 'ABCDFEGHIJKLMNOPQRSTUVWXYZ'
let div = document.querySelector('.div-forca')

div.style.display = 'none'

//  Adiciona palavra ao localStore
if (!localStorage.getItem('palavras')){
    localStorage.setItem('palavras',JSON.stringify(['ALURA','EDSON','DESAFIO']))
} 

let sugestaoPalavra = JSON.parse(localStorage.getItem('palavras'))


btAddNovaPalavra.addEventListener('click', e => {
    if (inputNovaPalavra.value != ''){    
        sugestaoPalavra.push(inputNovaPalavra.value.toUpperCase())
        localStorage.setItem('palavras',JSON.stringify(sugestaoPalavra))
        inputNovaPalavra.value = ''
    }
})

//  Cria os botões na tela(teclado virtual)
for(let i = 0; i < letras.length; i++){
    let button = document.createElement('button')
    button.classList.add('letra')
    button.textContent = letras[i]
    document.querySelector('#letras').appendChild(button)

}

// Sorteia palavra
let numAleatorio = Math.floor(Math.random()*sugestaoPalavra.length)
let palavraEscolhida = sugestaoPalavra[numAleatorio]
let contErros = 0
let trocaLetra = []
let letraDigitada = []
let arrLetra = palavraEscolhida.split('')

iniciarJogo.addEventListener('click', function(){
    window.location.href = 'http://127.0.0.1:5500/index.html#forca'
    telaPrincipal() // tela inicial da forca
    div.style.display = 'block'
    div.style.margin = 'auto'
    habilitaTodosBotoes()    
    let numAleatorio = Math.floor(Math.random()*sugestaoPalavra.length)
    palavraEscolhida = sugestaoPalavra[numAleatorio]
    contErros = 0
    trocaLetra = []
    preencheTrocaLetra()
    letraDigitada = []
    arrLetra = palavraEscolhida.split('')
    desenhaPalavra()
    naoTem()
})

function habilitaTodosBotoes(){
    button.forEach(botao => {botao.disabled = false})
}

function desabilitaTodosBotoes(){
    button.forEach(botao => {botao.disabled = true})
}


function preencheTrocaLetra(){
  for (let i = 0; i < palavraEscolhida.length; i++){
        trocaLetra.push('_')
    }  
}
preencheTrocaLetra()

function troca_Letra(indice,letra){
    trocaLetra[indice] = letra
    desenhaPalavra()
    let comparacao = trocaLetra.toString().replace(/,/g,'')
    if ( comparacao == palavraEscolhida){
        desabilitaTodosBotoes()
        parabens()
    }
}

function desenhaPalavra(){
    let x = 400
    for (let i = 0; i < palavraEscolhida.length; i++){ 
        pincel.font= '100px cursive'
        pincel.fillText(trocaLetra[i],x,300)
        x += 100
    }    
}


function letrasDigitadas(){
    let x = 10
    for (let i = 0; i < letraDigitada.length; i++){ 
        pincel.font= '50px cursive'
        pincel.fillText(letraDigitada[i],x,780)
        x += 60
    }    
}

let erros = [
    cabeca,
    tronco,
    bracoEsquerdo,
    bracoDireito,
    pernaEsquerda,
    pernaDireita,
    inforcado
]


//  Desabilita e envia o botão na tela após clicado
let button = document.querySelectorAll('.letra')

button.forEach(e => e.addEventListener('click', function(){
    
    e.disabled = true
    arrLetra.forEach((letra,indice) =>{
        if(arrLetra[indice] == e.textContent){
            troca_Letra(indice,letra)
        }
    })
    if(palavraEscolhida.indexOf(e.textContent) == -1){                
        if(contErros <= 6){
            erros[contErros]()
            letraDigitada.push(e.textContent)
            letrasDigitadas()           
        } 
        if (contErros == 6) {
            desabilitaTodosBotoes()
            pincel.fillStyle = 'red'
            pincel.font= '50px cursive'
            let certa = 'A palavra era ' + palavraEscolhida
            pincel.fillText(certa,450,200)           
        }
        contErros++
    }
    
    
}))
 
// Botoes do teclado
document.querySelector('body').addEventListener('keydown', function(event) { 
    event.key.disabled = true
    button.forEach(e => {
        if (e.textContent == event.key.toUpperCase()){
           e.disabled = true
        }
        
    })
    
    arrLetra.forEach((letra,indice) =>{
        if(arrLetra[indice] == event.key.toUpperCase()){            
            troca_Letra(indice,letra)
        }
    })
    
    if(
        palavraEscolhida.indexOf(event.key.toUpperCase()) == -1 &&
        letraDigitada.indexOf(event.key.toUpperCase()) == -1
    ){                
        if(contErros <= 6){
            erros[contErros]()
            
            letraDigitada.push(event.key.toUpperCase())
            letrasDigitadas()
                     
        } 
        if (contErros == 6) {
            desabilitaTodosBotoes()
            pincel.fillStyle = 'red'
            pincel.font= '50px cursive'
            let certa = 'A palavra era ' + palavraEscolhida
            pincel.fillText(certa,450,200)            
        }
        contErros++
    }
    
})



inputNovaPalavra.addEventListener('focus', function(event){
    div.style.display = 'none'
})
