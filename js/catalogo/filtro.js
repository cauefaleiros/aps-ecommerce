let filtroCamada1 = listaProdutos
let filtroCamada2 = filtroCamada1
let filtroCamada3 = filtroCamada2

function filtrarTagUnica(produtos, tag) {
    let aux = new Array()
    produtos.filter((elemento)=> {
        elemento.tags.map((el)=> {
            if(el.toLowerCase() === tag.toLowerCase()) {
                aux.push(elemento)
            }
        }) 
    })

    return aux
}
function filtrarTags(produtos, tags) {
    let aux
    if(typeof(tags) == "object") {
        tags.map((el, i)=> {
            if(i === 0) {
                aux = filtrarTagUnica(produtos, el)
            } else {
                aux = filtrarTagUnica(aux, el)
            }
        })
    } else {
        aux = filtrarTagUnica(produtos, tags)
    }

    return aux
}
function filtrarTagsClick() {
    let tagsSeleciondas = checkBoxTag.filter((el)=> {
        return el.checked
    })
    tagsSeleciondas.map((el, i)=> {
        tagsSeleciondas[i] = el.value
    })
    const produtosEncontrados = filtrarTags(filtroCamada1, tagsSeleciondas)
    filtroCamada2 = produtosEncontrados
    if(typeof(produtosEncontrados) === "object") {
        if(produtosEncontrados.length >= 0)
            desenhar(produtosEncontrados)
    } else {
        filtroCamada2 = listaProdutos
        desenhar(filtroCamada2)
    }
}

function pesquisaKeyUp(ev) {
    const pesquisar = ev.target.value

    const produtosEncontrados = filtrarPesquisa(pesquisar)
    filtroCamada3 = produtosEncontrados
    if(produtosEncontrados.length >= 0) {
        desenhar(produtosEncontrados)
        filtrarPrecoClick()
    }
}
function filtrarPesquisa(pesquisar) {
    return filtroCamada2.filter((el)=> {
        return el.nome.toLowerCase().includes(pesquisar.toLowerCase())
    })
}

function filtrarPrecoClick() {
    filtroCamada3 = filtrarPesquisa(pesquisa.value)
    const produtosEncontrados = filtrarPrecos(filtroCamada3, inputMin.value, inputMax.value)
    filtroCamada3 = produtosEncontrados
    if(produtosEncontrados.length >= 0)
        desenhar(produtosEncontrados)
}
function filtrarPrecos(produtos, min, max) {
    return produtos.filter((el)=> {
        return ((el.preco >= min) && (el.preco <= max))
    })
}

function ordenarCrescenteClick() {
    ordenarCrescente(filtroCamada3)
}
function ordenarCrescente(produtos) {
    produtos.sort((a, b)=> {
        return a.preco - b.preco
    })
    desenhar(produtos)
}

function ordenarDecrescenteClick() {
    ordenarDecrescente(filtroCamada3)
}
function ordenarDecrescente(produtos) {
    produtos.sort((a, b)=> {
        return b.preco - a.preco
    })
    desenhar(produtos)
}

function filtrarOpcoesFiltros(a) {
    filtrarTagsClick()
    filtrarPrecoClick()
}

btnOrdenarDecrescente.addEventListener("click", ordenarDecrescenteClick)
btnOrdenarCrescente.addEventListener("click", ordenarCrescenteClick)
btnFiltrar.addEventListener("click", filtrarOpcoesFiltros)
pesquisa.addEventListener("keyup", _.debounce(pesquisaKeyUp, 800))

desenhar(listaProdutos)