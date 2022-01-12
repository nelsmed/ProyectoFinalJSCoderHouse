class GenerarSecciones {

    gererarSeccionHome = () => {
        $('header').hide()
        return `<div class="titulo">
        <h2>Bienvenides a Ta Luego Cuadernos</h2>
        <div class="titulo__caja">
        <h3>¿Cómo Crear Tu Cuaderno?</h3>
        <img src="../img/Simbolos/cuadro.png" alt="">
        </div>
        </div>   
        <div class="mapa">
        <div class="mapa__paso1">
        <div class="mapa__paso1--title">
        <img src="../img/Simbolos/botonconblanco.png" alt="">
        <h3>Paso 1</h3>
        </div>
        <div class="mapa__paso1--caja">
        <img src="../img/Simbolos/cajita.png" alt="" class="mapa__caja--img">
        <p class="mapa__caja--cont">Elegí el diseño de tapa que más te guste.</p>            
        </div>
        </div>
        <div class="mapa__arrow">
        <img src="../img/Simbolos/flecha.png" alt="" class="mapa__arrow--img">
        </div>
        <div class="mapa__paso2">
        <div class="mapa__paso2--title">
        <img src="../img/Simbolos/botonconblanco.png" alt="">
        <h3>Paso 2</h3>
        </div>
        <div class="mapa__paso2--caja">
        <img src="../img/Simbolos/cajita.png" alt="" class="mapa__caja--img">
        <p class="mapa__caja--cont">Selecciona el interior.</p>            
        </div>
        </div>
        <div class="mapa__arrow">
        <img src="../img/Simbolos/flecha.png" alt="" class="mapa__arrow--img">
        
        </div>
        <div class="mapa__paso3">
        <div class="mapa__paso3--title">
        <img src="../img/Simbolos/botonconblanco.png" alt="">
        <h3>Paso 3</h3>
        </div>
        <div class="mapa__paso3--caja">
        <img src="../img/Simbolos/cajita.png" alt="" class="mapa__caja--img">
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
            alert('Debe elegir una diseño de tapa para avanzar')
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
                        let cardEncuadernacion = new Encuadernacion(dato.url, dato.h5) 
                        $('.encuadernacion').prepend(cardEncuadernacion.cardEnc())
                    }
                }
                $('.btnCancelEnc').hide()
                
            })
            
        } else {
            alert('Debe elegir una diseño de tapa para avanzar')
        }
    }
}
    
    