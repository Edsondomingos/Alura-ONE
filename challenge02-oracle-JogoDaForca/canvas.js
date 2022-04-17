let tela = document.querySelector('#forca')
let pincel = tela.getContext('2d')
let img = document.querySelector('img')
img.style.display ='none'

function telaPrincipal(){
    pincel.drawImage(img,0,0,1200,800)
    pincel.fillStyle ='black'

    pincel.fillRect(0,700,1200,10) 
    pincel.fillRect(10,700,10,-400) 
    pincel.beginPath()
    pincel.moveTo(10,400)
    pincel.lineTo(100,300)
    pincel.lineTo(120,300)
    pincel.lineTo(10,430)
    pincel.fill()
    pincel.fillRect(10,300,200,10) 
    pincel.fillRect(200,300,10,70) 
}
telaPrincipal()

function cabeca(){
    pincel.beginPath()
    pincel.arc(205,395,25,0,2* 3.14)
    pincel.fill()
}

function tronco(){
    pincel.fillRect(200,400,5,150)
}


function bracoEsquerdo(){
    pincel.beginPath()
    pincel.moveTo(205,420)
    pincel.lineTo(120,500)
    pincel.lineTo(130,510)
    pincel.fill() 
}

function bracoDireito(){
    pincel.beginPath()
    pincel.moveTo(200,420)
    pincel.lineTo(250,500)
    pincel.lineTo(260,510)
    pincel.fill() 
}

function pernaEsquerda(){
    pincel.beginPath()
    pincel.moveTo(200,550)
    pincel.lineTo(150,650)
    pincel.lineTo(200,510)
    pincel.fill() 
}

function pernaDireita(){
    pincel.beginPath()
    pincel.moveTo(200,550)
    pincel.lineTo(250,650)
    pincel.lineTo(200,500)
    pincel.fill()
}

function inforcado(){    
    pincel.fillStyle = 'red'
    pincel.font = '400px Arial'
    pincel.fillText('x', 110,550)
    pincel.fillStyle = 'black'
    pincel.font = '70px Arial'
    pincel.fillText('INFORCADO', 30,480)
}

function naoTem(){
    pincel.font= '25px cursive'
    pincel.fillText('LETRAS QUE NÃO TEM:',10,730)  
}
naoTem()

function parabens(){
    pincel.fillStyle = '#5d5'
    pincel.font = '100px cursive'
    pincel.fillText('VOCÊ ACERTOU!!!', 200,150)
}