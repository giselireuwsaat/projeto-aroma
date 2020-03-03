let carregaProdutos = (elementoHtml, nroProdutos) => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(resposta => resposta.json())
        .then(dadosBrutos => {
            //pegando apenas 8 dados da lista
            let dados = dadosBrutos.slice(0, nroProdutos)
            let html = ''

            dados.forEach(dado => {
                // incremento 
                html += `
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="card text-center card-product">
                        <div class="card-product__img">
                            <img class="card-img" src="${dado.url}" alt="">
                            <ul class="card-product__imgOverlay">
                            <li><button><i class="ti-search"></i></button></li>
                            <li><button><i class="ti-shopping-cart"></i></button></li>
                            <li><button><i class="ti-heart"></i></button></li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <p>Acessórios</p>
                            <h4 class="card-product__title"><a href="single-product.html">${dado.title}</a></h4>
                            <p class="card-product__price">$150.00</p>
                        </div>
                        </div>
                  </div>
                    `
            })
            // imprimi foreach
            elementoHtml.innerHTML = html
        })

}


let carregaNoticias = elementoHtml => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(resposta => resposta.json())
        .then(dadosBrutos => {
            //pegando apenas 8 dados da lista
            let dados = dadosBrutos.slice(0, 3)
            let html = ''

            dados.forEach(dado => {
                // incremento 
                html += `
                                        <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                            <div class="card card-blog">
                                            <div class="card-blog__img">
                                                <img class="card-img rounded-0" src="${dado.url}" alt="">
                                            </div>
                                            <div class="card-body">
                                                <ul class="card-blog__info">
                                                <li><a href="#">By Admin</a></li>
                                                <li><a href="#"><i class="ti-comments-smiley"></i> 2 Comments</a></li>
                                                </ul>
                                                <h4 class="card-blog__title"><a href="single-blog.html">${dado.title}</a></h4>
                                                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                                                <a class="card-blog__link" href="#">Read More <i class="ti-arrow-right"></i></a>
                                            </div>
                                            </div>
                                        </div> 
                                `
            })
            // imprimi foreach
            elementoHtml.innerHTML = html
        })


}

//seletores
let divProdutos = document.querySelector('#produtos')
let divNoticias = document.querySelector('#noticias')

// executa a função
carregaProdutos(divProdutos, 10)
carregaNoticias(divNoticias)