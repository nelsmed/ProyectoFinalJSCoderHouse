//La web consiste en el armado de un cuaderno a como lo quiera el usuario, elige la tapa, el interior y el tipo de encuadernacion.

let arr = []
const URLGET = "./json/contenido.json"
$(document).ready(() => {
    $(document).tooltip()
    $('#seccionInterior').hide()
    $('#seccionEncuadernacion').hide()
    $('#seccionCarrito').hide()
    
    generarSeccionTapas()
    
    
    $('#seccionInterior').on('click', '#volverTapa', () => {
        if (arr.length == 2) {
            eliminarItem()
        }
        $('.contenedorElementoInt').remove()
        $('#volverTapa').remove()
        $('#seccionTapas').toggle('slow')
        $('#seccionInterior').slideUp('slow') 
    } )
    
    //Seleccionar Tapa
    $( '#seccionTapas').on('click', '.agregarTapa', agregarElemento)
    $( '#seccionTapas').on('click', '.agregarTapa', botonCancelar)
    $( '#seccionTapas').on('click', '.agregarTapa', deshabilitarContenido)
    //Cancelar Seleccion de Tapa
    $('#seccionTapas').on('click', '.btnCancel', eliminarItem)
    $('#seccionTapas').on('click', '.btnCancel', habilitarContenido)
    $('#seccionTapas').on('click', '.btnCancel', botonCancelar)
    //Confirmar seleccion tapa
    const confirmarTapa = document.getElementById('confirmarTapa')
    confirmarTapa.addEventListener('click', generarSeccionInteriores)                       
    
    
    
    
    $('#seccionEncuadernacion').on('click', '#volverInterior', () => {
        if (arr.length == 3) {
            eliminarItem()
        }
        $('.contenedorElementoEnc').remove()
        $('#volverInterior').remove()
        $('#seccionInterior').show().slideDown('slow')
        $('#seccionEncuadernacion').slideUp('slow')
    } )
    
    //Evento selección de tipo de interior
    $( '#seccionInterior').on('click', '.agregarInterior', agregarElemento)
    $( '#seccionInterior').on('click', '.agregarInterior', botonCancelar)
    $( '#seccionInterior').on('click', '.agregarInterior', deshabilitarContenido)
    //Cancelar Seleccion de Interior
    $('#seccionInterior').on('click', '.btnCancel', eliminarItem)
    $('#seccionInterior').on('click', '.btnCancel', habilitarContenido)
    $('#seccionInterior').on('click', '.btnCancel', botonCancelar)
    //Confirmar seleccion Interior
    const confirmarInterior = document.getElementById('confirmarInterior')
    confirmarInterior.addEventListener('click', generarSeccionEncuadernacion)

    
    
    //Seleccion de encuadernacion
    $( '#seccionEncuadernacion').on('click', '.encuadernacionTipo', agregarElemento)
    $( '#seccionEncuadernacion').on('click', '.encuadernacionTipo', botonCancelar)
    $( '#seccionEncuadernacion').on('click', '.encuadernacionTipo', deshabilitarContenido)
    //Cancelar Seleccion de Encuadernacion
    $('#seccionEncuadernacion').on('click', '.btnCancel', eliminarItem)
    $('#seccionEncuadernacion').on('click', '.btnCancel', habilitarContenido)
    $('#seccionEncuadernacion').on('click', '.btnCancel', botonCancelar)
    //Confirmar Seleccion de tipo de encuadernacion
    const confirmarEncuadernacion = document.getElementById('confirmarEncuadernacion')
    confirmarEncuadernacion.addEventListener('click', () => {
            if (arr.length == 3) {
                $('#seccionEncuadernacion').slideUp('slow')
                $('#seccionCarrito').show().slideDown('slow')
                
                armarCarrito(arr[0],arr[1],arr[2]) // la funcion armarCarrito generara el contenido del carrito.
            } else {
                alert('Debe elegir un tipo de encuadernacion para avanzar')
            }
        })
        
    
    const armarNuevo = document.getElementById('nuevoCuaderno') 
    armarNuevo.addEventListener('click', () =>  {
        localStorage.setItem('cuaderno', JSON.stringify(arrayCarrito)) //se guarda en el local storage al array para armar el carrito y sumarlo al cuaderno nuevo
        location.reload(true)
    })
                
            
    const terminarCompra = document.getElementById('terminarCompra')
    terminarCompra.addEventListener('click', () => {
    alert('gracias por completar su compra')
    localStorage.clear() // una vez completada la compra se realiza limpieza del local storage para iniciar una compra desde 0.
    location.reload(true)})




})