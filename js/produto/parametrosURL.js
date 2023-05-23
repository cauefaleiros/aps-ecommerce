const urlSearchParams = new URLSearchParams(window.location.search)
const urlParametroId = parseInt(urlSearchParams.get("id"))
const elementoSelecionado = listaProdutos.filter((el)=> { return el.id === urlParametroId })
