let main = document.querySelector('.galeria')


function criaSecao(nomeSecao){
    // if(Object.values(nomeSecao) != ''){
        let section = document.createElement('section')
        section.classList.add('galeria_linha')
        section.innerHTML = `
            <header class="galeria_linha-topo">
                <h2>${nomeSecao}</h2>
                <a href="#" class="botoao-vertudo" id="linha1">Ver tudo</a>
            </header>
            <article class="galeria_linha-figuras">

            </article>
        `
        main.appendChild(section)
    // }
}


function addProduto(valoresArr){
    let article = document.querySelectorAll(`.galeria_linha-figuras`)
    if(Object.values(valoresArr) != ''){
        let figure = document.createElement('figure')
        figure.innerHTML = `
            <img src="${valoresArr.imgP}" alt="" class="galeria_linha1-figuras-img" class="galeria_linha1-figuras-img">
            <p>${valoresArr.nome}</p>
            <figcaption class="galeria_linha1-figuras-img-preco">R$ ${valoresArr.preco}</figcaption>
            <a href="./pages/produto.html">Ver produto</a>
        `
        article[article.length-1].appendChild(figure)  
    }
    
}

const url = 'http://localhost:5500/assets/produtos.json'

fetch(url)
    .then(resposta => {
        resposta.json().then(produtos =>{           
            let info = Object.values(produtos.produtos[0])
            for(let i = 0; i < info.length; i++){
                let nomeSecao = Object.keys(produtos.produtos[0])[i]
                criaSecao(nomeSecao)
                // console.log(Object.values(Object.keys(produtos.produtos[0])))
                
                for(let j = 0; j < info[i].length; j++){
                    // console.log(info[i][j])
                    addProduto(info[i][j]);
                }
            }
        })
    })

