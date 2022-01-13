class GenerarSecciones {

    gererarSeccionHome = () => {
        $('header').hide()
        return `<div class="titulo">
        <h2>Bienvenides a Ta Luego Cuadernos</h2>
        <div class="titulo__caja">
        <h3>¿Cómo Crear Tu Cuaderno?</h3>
        <img src="./img/Simbolos/cuadro.png" alt="">
        </div>
        </div>   
        <div class="mapa">
        <div class="mapa__paso1">
        <div class="mapa__paso1--title">
        <img src="./img/Simbolos/botonconblanco.png" alt="">
        <h3>Paso 1</h3>
        </div>
        <div class="mapa__paso1--caja">
        <img src="./img/Simbolos/cajita.png" alt="" class="mapa__caja--img">
        <p class="mapa__caja--cont">Elegí el diseño de tapa que más te guste.</p>            
        </div>
        </div>
        <div class="mapa__arrow">
        <img src="./img/Simbolos/flecha.png" alt="" class="mapa__arrow--img">
        </div>
        <div class="mapa__paso2">
        <div class="mapa__paso2--title">
        <img src="./img/Simbolos/botonconblanco.png" alt="">
        <h3>Paso 2</h3>
        </div>
        <div class="mapa__paso2--caja">
        <img src="./img/Simbolos/cajita.png" alt="" class="mapa__caja--img">
        <p class="mapa__caja--cont">Seleccioná el interior.</p>            
        </div>
        </div>
        <div class="mapa__arrow">
        <img src="./img/Simbolos/flecha.png" alt="" class="mapa__arrow--img">
        
        </div>
        <div class="mapa__paso3">
        <div class="mapa__paso3--title">
        <img src="./img/Simbolos/botonconblanco.png" alt="">
        <h3>Paso 3</h3>
        </div>
        <div class="mapa__paso3--caja">
        <img src="./img/Simbolos/cajita.png" alt="" class="mapa__caja--img">
        <p class="mapa__caja--cont">Tipo de Cuaderno: Cosido o Anillado.</p>            
        </div>
        </div>
        </div>
        <div class="btnInicio">
        <button type="submit" id='iniciarApp' >Iniciar APP</button>
        </div>`
    }
    
    generarSeccionTapas = () => {
        
        $.getJSON(URLGET, function (respuesta,estado) {
            if (estado === 'success') {
                let datos = respuesta["tapas"]
                $('.home').toggle()
                vistasNav.navPasoUno()
                $('header').show()
                $('#seccionTapas').toggle()
                
                for (const dato of datos) {
                    let cardTapa = new Tapa(dato.url)
                    $('.tapas').prepend (cardTapa.cardTapa())
                }
                $('.btnCancelTapa').hide()
            }
        })
    }
    
    generarSeccionInteriores() {
        if (arr.length==1) { //Una vez confirmada la tapa se genera el conteneido de la seccion interiores
            $('#seccionTapas').fadeOut(600)
            $('#seccionInterior').fadeIn(600)
            vistasNav.navPasoDos()
            $('.interiores').parent().prepend(`  <div class="mx-auto d-flex justify-content-center container my-3">
            <button class="btn btn-info w-40 text-center" id="volverTapa">Volver a elegir Tapa</button>
            </div>`)
            $.getJSON(URLGET, function (respuesta, estado){
                if (estado === 'success') {
                    let datos = respuesta["interiores"]
                    for (const dato of datos) {
                        const cardInterior = new Interior(dato.urlFirst, dato.urlSecond, dato.urlThird, dato.h5, dato.info, dato.id, dato.precio)
                        $('.interiores').prepend(cardInterior.cardInt())
                    }
                }
                $('.btnCancelInt').hide()
                
            })
        } else {
            $('#seccionTapas').find('.errorTapas').remove()
            $('.tapas').after('<p class="errorTapas">Error: Por favor seleccione un diseño de tapa para avanzar</p>')
        }
    }
    
    generarSeccionEncuadernacion() {
        if (arr.length==3) { //Una vez confirmado interior se genera el conteneido de la seccion interiores
            $('#seccionInterior').fadeOut(300)
            $('#seccionEncuadernacion').fadeIn(300)
            vistasNav.navPasoTres()
            $('.encuadernacion').parent().prepend(`  <div class="mx-auto d-flex justify-content-center container my-3">
            <button class="btn btn-info w-40 text-center" id="volverInterior">Volver a elegir Interior</button>
            </div>`)
            $.getJSON(URLGET, function (respuesta, estado){
                if (estado === 'success') {
                    let datos = respuesta["encuadernacion"]
                    for (const dato of datos) {
                        let cardEncuadernacion = new Encuadernacion(dato.url, dato.h5, dato.info) 
                        $('.encuadernacion').prepend(cardEncuadernacion.cardEnc())
                    }
                }
                $('.btnCancelEnc').hide()
                
            })
            
        } else {
            $('#seccionInterior').find('.errorInterior').remove()
            $('.interiores').after('<p class="errorInterior">Error: Por favor seleccione un diseño de interior para avanzar</p>')

        }
    }
    generarSeccionCarrito() {
        const contenidoStorage = JSON.parse(localStorage.getItem('cuaderno')) || []
        if (arr.length === 4 ) {
            vistasNav.navCarrito()

            $('header').hide()
            $('#seccionEncuadernacion').fadeOut('slow')
            $('#armadoEnProgreso').hide()

            $('#seccionCarrito').fadeIn('slow')
            $('#seccionCarrito').prepend(`  <div class="mx-auto d-flex justify-content-center container my-3">
            <button class="btn btn-info w-40 text-center" id="volverEnc">Volver a Encuadernacion</button>
            </div>`)
            contenidoStorage.forEach(contenido => {
                const agregarCarrito = document.createElement('div')
                const cuadernoStorage = new Cuaderno(contenido.id,contenido.tapa, contenido.interior, contenido.precio, contenido.encuadernacion )
                const cardCarrito = cuadernoStorage.armarTarjeta()
                agregarCarrito.innerHTML=cardCarrito
                $('#seccionCarrito').append(agregarCarrito)
            })
            $('#seccionCarrito').append(`<h3>El total a pagar es: $${calcularTotal()}</h3>`)
        } else {
            $('#seccionEncuadernacion').find('.errorEnc').remove()
            $('.encuadernacion').after('<p class="errorEnc">Error: Por favor seleccione un tipo de encuadernación para avanzar</p>')

        }
    }

    generarSeccionFormEnviado(){
        $('main').children().fadeOut()
        $('main').prepend(`<div class="formularioEnviado">
                                <h3 class="formularioEnviado__titulo">Gracias por elegirnos</h3>
                                <p class="formularioEnviado__texto">A la brevedad nos comunicaremos para coordinar medio de pago y envío</p>
                                <img src="../img/logoSinFondo.png" alt="" class="formularioEnviado__logo">
                                <button class="formularioEnviado__btnInicio">Volver a Home</button>
                            </div>`)}
}
    
    