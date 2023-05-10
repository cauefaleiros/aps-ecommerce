const urlSearchParams = new URLSearchParams(window.location.search)

const urlParametroPesquisa = urlSearchParams.get("pesquisa")

window.onload = ()=> {
    pesquisa.value = urlParametroPesquisa
    const produtosEncontrados = filtrarPesquisa(urlParametroPesquisa)
    filtroCamada3 = produtosEncontrados
    desenhar(filtroCamada3)
}