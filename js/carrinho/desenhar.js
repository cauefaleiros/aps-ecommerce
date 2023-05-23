let listaLocal = listaProdutos
let produtosAdicionados = []

const formatoMoeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})

function selecionarProdutoId(produtos, id) {
    return produtos.filter(el=> {
        return el.id === id
    })
}

function adicionarProduto(produto, listaAdicionar) {
    listaAdicionar.push(...produto)
}

function removerProduto(id, listaRemover) {
    return listaRemover.filter(el=> {
        return el.id != id
    })
}

function adicionarEventoBtnRemover(btns) { 
    btns.map(btn=> {
        btn.addEventListener("click", ()=> {
            produtosAdicionados = removerProduto(parseInt(btn.dataset.id), produtosAdicionados)
            atualizar()
        })
    })
}
function adicionarEventUnidadeAtualizar(inputs) {
    inputs.map((input, i)=> {
        input.addEventListener("input", ()=> {
            produtosAdicionados[i].unidades = input.value
            atualizar()
        })
    })
}

function desenhar(produtos) {
    let template = ""

    if(produtos.length > 0) {
        produtos.map(el=> {
            template+= `<div class="container card-produto row">
                            <img class="col-1" src="${el.thumbnail}" alt="">
                            <div class="col">
                                <h1>${el.nome}</h1>
                                <p id="preco" data-valor="${el.preco}">${formatoMoeda.format(el.preco)}</p>
                            </div>
                            <p class="col-2 d-flex align-items-center">unidades: <input class="inputUnidade" type="number" min="1" max="10" value="${el.unidades}"></p>
                            <i class='bx icon bxs-x-circle col-1 remover' data-id="${el.id}"></i>
                        </div>`
        })
    } else {
        template = `<div id="carrinhoVazio" class="container">
                        <i class='bx bx-cart d-flex justify-content-center' id="cart-icon"></i>
                        <h1 class="d-flex justify-content-center">O seu carrinho está vazio!</h1>
                        <p class="d-flex justify-content-center">Clique no símbolo de carrinho em um produto para adiciona-lo aqui!</p>
                    </div>`
    }

    template+= `<div id="infoProd" class="row">
                    <p class="col d-flex justify-content-center">Preço Total: <span id="precoTotal"></span></p>
                    
                    <div class="col d-flex justify-content-center align-items"> 
                        <button>Finalizar Compra</button>
                    </div>
                </div>`

    document.getElementById("produtos").innerHTML = template

    const btnsRemover = [...document.getElementsByClassName("remover")]
    const inputsUnidade = [...document.getElementsByClassName("inputUnidade")]

    adicionarEventoBtnRemover(btnsRemover)
    adicionarEventUnidadeAtualizar(inputsUnidade)
}

function calcPrecoTotal() {
    const produtos = [...document.getElementsByClassName("card-produto")]
    const precoTotal = document.getElementById("precoTotal")
    let valorTotal = 0

    produtos.map((el, i)=> {
        valorTotal+= parseFloat(el.children[1].children[1].dataset.valor)*el.children[2].children[0].value
    })
    precoTotal.innerHTML = formatoMoeda.format(valorTotal)
}

function atualizar() {
    desenhar(produtosAdicionados)
    calcPrecoTotal()
}

document.getElementById("btnAdicionarProduto").addEventListener("click", ()=> {
    adicionarProduto(selecionarProdutoId(listaLocal, parseInt(document.getElementById("inputIdProduto").value)), produtosAdicionados)
    produtosAdicionados.map(el=> {
        el.unidades = 1
    })

    atualizar()
})

atualizar()