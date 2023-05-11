const btnPesquisar = document.getElementById("btnPesquisar")
const inputPesquisar = document.getElementById("navPesquisar")

function eventoPesquisar() {
    window.location.href = "catalogo/index.html?pesquisa=" + inputPesquisar.value
}

btnPesquisar.addEventListener("click", eventoPesquisar)
inputPesquisar.addEventListener("keyup", (evento)=> {
    if(evento.key === "Enter" && inputPesquisar.value != "")
        eventoPesquisar()
})