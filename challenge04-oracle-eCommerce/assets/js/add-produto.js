

// add-produto

let formProduto = document.querySelector('.add-produto_formulario')

let nomeProduto = document.querySelector('#nome-produto')
let precoProduto = document.querySelector('#preco-produto')
let descricaoProduto = document.querySelector('.input_formulario-msg')

function validaContato(){
    // if (!nomeProduto.checkValidity()){  //Valida segundo as opções do html
        
    // }
    if (nomeProduto.value == ''){
        console.log(nomeProduto.value)
        nomeProduto.setCustomValidity('Digite o nome do produto')       
    } else if (nomeProduto.checkValidity()){
        
        nomeProduto.checkValidity() 
        nomeProduto.setCustomValidity('')
    }

    if (precoProduto.value.length == 0){
        precoProduto.setCustomValidity('Digite um valor')        
    } else {
        precoProduto.setCustomValidity('') 
        console.log(precoProduto.value)
        descricaoProduto.checkValidity()
    }

    if (descricaoProduto.value.length == 0){
        descricaoProduto.setCustomValidity('Descreva o produto')        
    } else {
        console.log(descricaoProduto.value)
        descricaoProduto.setCustomValidity('') 
        descricaoProduto.checkValidity()
    }
}
function add_produto(){
    return fetch('http://localhost:5500/assets/produtos.json',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome:nomeProduto,
            preco: precoProduto,
            descricao: descricaoProduto
        })
    }).then(resposta => {
        if(resposta.ok){
            console.log('Foi')
            return resposta.body
        }else {
            console.log('Não enviou')
        }
    })
}

// fetch('http://localhost:5500/assets/produtos.json')
//     .then(resposta => {
//         // console.log(resposta)
//         if(resposta.ok){
//             console.log(resposta)
//         }else {
//             console.log('Não enviou')
//         }
//     })


formProduto.addEventListener('submit', e => {
    e.preventDefault()
    // validaContato()
    add_produto()
    nomeProduto.value = ''
    precoProduto.value = ''
    descricaoProduto.value = ''
})

