const selecionada = document.getElementById("selecionada")
const formatoMoeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})
const containerImgs = document.getElementById("imgsEscolher")

function calcParcelas(produto) { return produto.preco/10 }

function desenhar(produto) {
    const prodInfo = document.getElementById("prodInfo")
    const descricao = document.getElementById("descricao")

    containerImgs.innerHTML = `<img class="img img-thumbnail" src="${produto.thumbnail}" alt="">
                               <img class="img img-thumbnail" src="${produto.imgs[0]}" alt="">
                               <img class="img img-thumbnail" src="${produto.imgs[1]}" alt="">
                               <img class="img img-thumbnail" src="${produto.imgs[2]}" alt="">`
    selecionada.src = produto.thumbnail
    prodInfo.innerHTML = `<h1>${produto.nome}</h1>
                          <p id="preco">${formatoMoeda.format(produto.preco)}</p>
                          <p>até 10 parcelas de <span id="precoParcelado">${formatoMoeda.format(calcParcelas(produto))}</span> sem juros</p>
  
                          <div id="btn-dest">
                              <button class="btn">Comprar</button>
                              <a href=""><i class='bx bx-cart icon'></i></a>
                              <a href=""><i class='bx bxs-heart icon heart'></i></a>
                          </div>`
    descricao.innerHTML = `<h1>Descrição do produto</h1>
                           <hr>
                           <p>${produto.descricao}</p>`
}
desenhar(elementoSelecionado[0])