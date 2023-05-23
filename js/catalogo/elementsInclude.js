const inputMax = document.getElementById("inputMax")
const inputMin = document.getElementById("inputMin")
const txtInputMax = document.getElementById("txtInputMax")
const txtInputMin = document.getElementById("txtInputMin")
const pesquisa = document.getElementById("barra_pesquisa")
const resultadosEncontrados = document.getElementById("label_resultados")
const checkBoxTag = [
    document.getElementById("cbTagXbox"),
    document.getElementById("cbTagPlayStation"),
    document.getElementById("cbTagNintendo"),
    document.getElementById("cbTagConsoles"),
    document.getElementById("cbTagControles"),
    document.getElementById("cbTagAcessorios")
]
const btnFiltrar = document.getElementById("btnFiltrar")
const btnOrdenarCrescente = document.getElementById("ordenarCrescente")
const btnOrdenarDecrescente = document.getElementById("ordenarDecrescente")

function funcionamentoRange(event) {
    let valueMax = inputMax.value
    let valueMin = inputMin.value

    txtInputMax.innerHTML = valueMax
    txtInputMin.innerHTML = valueMin

    if((valueMax - valueMin) <= 0) {
        inputMin.value = valueMax - 50
    }
}

inputMax.addEventListener("input", funcionamentoRange)
inputMin.addEventListener("input", funcionamentoRange)