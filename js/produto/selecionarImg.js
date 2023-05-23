const imagens = [...containerImgs.children]
imagens.map(img=> {
    img.addEventListener("click", ()=> {
        selecionada.src = img.src
    })
})