const btnPesquisar = document.getElementById("btnPesquisar")

function btnEventoPesquisar() {
    let textoPesquisar = document.getElementById("navPesquisar").value

    window.location.href = "catalogo/index.html?pesquisa=" + textoPesquisar
}
btnPesquisar.addEventListener("click", btnEventoPesquisar)