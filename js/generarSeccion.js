const generarSeccionTapas = () => {
    $.getJSON(URLGET, function (respuesta,estado) {
        if (estado === 'success') {
            let datos = respuesta["tapas"]
            for (const dato of datos) {
                let cardTapa = new Tapa(dato.url)
                $('.tapas').prepend (cardTapa.cardTapa())
            }
            $('.btnCancelTapa').hide()
        }
    })
}

function generarSeccionInteriores() {
    if (arr.length==1) { //Una vez confirmada la tapa se genera el conteneido de la seccion interiores
        $('#seccionTapas').slideUp('slow',)
        $('#seccionInterior').toggle('slow')
        $('.interiores').parent().prepend(`  <div class="mx-auto d-flex justify-content-center container my-3">
                                            <button class="btn btn-info w-40 text-center" id="volverTapa">Volver a elegir Tapa</button>
                                        </div>`)
        $.getJSON(URLGET, function (respuesta, estado){
            if (estado === 'success') {
                let datos = respuesta["interiores"]
                for (const dato of datos) {
                    let cardInterior = new Interior(dato.url, dato.h5)
                    $('.interiores').prepend(cardInterior.cardInt())
                }
            }
            $('.btnCancelInt').hide()
        })
        } else {
            alert('Debe elegir una diseño de tapa para avanzar')
        }
}
function generarSeccionEncuadernacion() {
    if (arr.length==2) { //Una vez confirmada la tapa se genera el conteneido de la seccion interiores
        $('#seccionInterior').slideUp('slow')
        $('#seccionEncuadernacion').show().slideDown('slow')
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