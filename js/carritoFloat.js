$('.carritoFloat').click(() => {
    $('nav').siblings().hide()
    $('#seccionCarrito').show()
    armarCarrito(arr)
})
$('#seccionCarrito').on('click', '#armadoEnProgreso', ()=>{
    $('nav').siblings().hide()
    vistasNav.vaciarNav()
    vistasNav.generarNav()
    $('header').show()
    $('.tarjetaCompra').remove()
    $('#armadoEnProgreso').remove()
    switch(arr.length) {
        case 1:
            $('#seccionTapas').show()
            $('#volverTapa').remove()
            $('.interiores').children().remove()
            vistasNav.navPasoUno()
        break;
        case 3:
            $('#seccionInterior').show()
            $('#volverInterior').remove()
            $('.encuadernacion').children().remove()
            vistasNav.navPasoDos()
        break;
         default:
            $('#seccionTapas').show()
            vistasNav.navPasoUno()
        break;

    }
})