//El boton de carrito es creado para poder acceder al mismo en cualquier momento que el usuario navegue por la pagina
//En este archivo es donde se manejan todos los eventos relacionados a ese boton


$('.carritoFloat').click(() => {
    $('header').hide()
    //Se genera el contenido del carrito.
    const contenidoStorage = JSON.parse(localStorage.getItem('cuaderno')) || []
    let i=0
    contenidoStorage.forEach(contenido => {
    i += 1
    const agregarCarrito = document.createElement('div')
    const cuadernoStorage = new Cuaderno(i,contenido.tapa, contenido.interior, contenido.precio, contenido.encuadernacion )
    const cardCarrito = cuadernoStorage.armarTarjeta()
    agregarCarrito.innerHTML=cardCarrito
    $('#seccionCarrito').prepend(agregarCarrito)
    })
    $('#seccionCarrito').append(`<h3>El total a pagar es: ${calcularTotal()}</h3>`)
    vistasNav.navCarrito() 
    
    
    //Se ocultan todas las Secciones y se crea el boton #armadoEnProgreso para que el usuario vuelva al punto donde estaba al momento de pulsar el boton .carritoFloat
    $('nav').siblings().hide()
    $('#seccionCarrito').show()
        $('#seccionCarrito').append(`<button class="btn btn-primary col-4 mx-3" id="armadoEnProgreso">Continuar con armado en progreso</button>`)
    $("#armadoEnProgreso").mouseover((e)=>$(e.target).css('box-shadow','none'))
    $("#armadoEnProgreso").mouseout((e)=>$(e.target).css('box-shadow','rgba(0, 0, 0, 0.24) 0px 3px 8px'))
    if (arr.length===4) {
        $('#armadoEnProgreso').hide()
    }
})

//Esta funcion vuelve al usuario al punto donde estaba y tambien genera el contenido del nav correspondiente a cada seccion
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