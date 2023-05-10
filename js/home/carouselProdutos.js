$(document).ready(()=> {
    var carrosel = $(".owl-carousel")

    carrosel.owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
})