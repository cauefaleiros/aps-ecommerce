const catalogo = document.getElementById("catalogo")

function desenharProdutos(produtos) {
    let template = ""
    let formatoMoeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})

    catalogo.innerHTML = ""

    if(produtos.length <= 0) {
        resultadosEncontrados.innerHTML = "Nenhum resultado encontrado"
    } else {
        produtos.forEach(el=> {
            template+= `<div class="produtos">
                            <a href="../produto/index.html?id=${el.id}" class=""><img src="${el.thumbnail}" alt="imagem produto"></a>
                            <h3>${el.nome}</h3>
                            <h4>${formatoMoeda.format(el.preco)}</h4>
                            <div class="btn-dest">
                                <button onclick="window.location = \'../produto/index.html?id=${el.id}\'">Comprar</button>
                                <a href=""><i class='bx bx-cart icon'></i></a>
                                <a href=""><i class='bx bxs-heart icon heart'></i></a>
                            </div>
                        </div>`
        });
    }

    catalogo.innerHTML = template
}

function desenharResultados(produtos) {
    const i = produtos.length
    resultadosEncontrados.innerHTML = i > 0 ? `${i} produtos encontrados` : "Nenhum produto encontrado" ;
}

function desenhar(produtos) {
    desenharProdutos(produtos)
    desenharResultados(produtos)
}