//La web consiste en el armado de un cuaderno a como lo quiera el usuario, elige la tapa, el interior y el tipo de encuadernacion.

let arr = [] //este array es donde se guardara la info de lo que va seleccionando el usuario. 
const URLGET = "./json/contenido.json"
const contenidoApp = new GenerarSecciones()
const vistasNav = new Nav()
$(document).ready(() => {
    
    
    
    $(document).tooltip()
    
    //Se oculta todo el contenido de la web
    $('nav').hide()
    $('#seccionTapas').hide()
    $('#seccionInterior').hide()
    $('#seccionEncuadernacion').hide()
    $('#seccionCarrito').hide()
    $('.carritoFloat').children('span').hide()
    
    
    
   
    //Si hay datos guardados en local storage significa que el usuario ya armo un cuaderno,no es necesaria la pagina de Home.
    const storageContent = JSON.parse(localStorage.getItem('cuaderno')) || []
    if (storageContent.length>0) {
        vistasNav.generarNav()
        contenidoApp.generarSeccionTapas()
        $('.carritoFloat').children('span').show()
        } else {
        $('.home').prepend(contenidoApp.gererarSeccionHome())
        $('.home').on('click','#iniciarApp',() => vistasNav.generarNav())
        $('.home').on('click','#iniciarApp',() => contenidoApp.generarSeccionTapas())
        $('header').children('span').hide()
        
    }


    
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
    confirmarTapa.addEventListener('click', () => contenidoApp.generarSeccionInteriores())                       
    
    
    //Evento para volver a la seccion tapas
    $('#seccionInterior').on('click', '#volverTapa', () => {
        if (arr.length == 3) {
            eliminarItem()
        }
        $('.contenedorElementoInt').remove()
        $('#volverTapa').remove()
        $('#seccionTapas').toggle('slow')
        $('#seccionInterior').slideUp('slow') 
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
    confirmarInterior.addEventListener('click', () => contenidoApp.generarSeccionEncuadernacion())
    
    //Evento para volver a la seccion interiores
    $('#seccionEncuadernacion').on('click', '#volverInterior', () => {
        if (arr.length == 4) {
            eliminarItem()
        }
        $('.contenedorElementoEnc').remove()
        $('#volverInterior').remove()
        $('#seccionInterior').show().slideDown('slow')
        $('#seccionEncuadernacion').slideUp('slow')
    } )
    
    
    //Seleccion de encuadernacion
    $( '#seccionEncuadernacion').on('click', '.encuadernacionTipo', agregarElemento)
    $( '#seccionEncuadernacion').on('click', '.encuadernacionTipo', botonCancelar)
    $( '#seccionEncuadernacion').on('click', '.encuadernacionTipo', deshabilitarContenido)
    $( '#seccionEncuadernacion').on('click', '.encuadernacionTipo', ()=>$('header').fadeOut() )
    //Cancelar Seleccion de Encuadernacion
    $('#seccionEncuadernacion').on('click', '.btnCancel', eliminarItem)
    $('#seccionEncuadernacion').on('click', '.btnCancel', habilitarContenido)
    $('#seccionEncuadernacion').on('click', '.btnCancel', botonCancelar)
    $('#seccionEncuadernacion').on('click', '.btnCancel', ()=>$('header').fadeIn())
    //Confirmar Seleccion de tipo de encuadernacion
    const confirmarEncuadernacion = document.getElementById('confirmarEncuadernacion')
    confirmarEncuadernacion.addEventListener('click', () => {
            if (arr.length == 4) {
                $('#seccionEncuadernacion').slideUp('slow')
                $('#seccionCarrito').show().slideDown('slow')
                
                armarCarrito(arr) 
            } else {
                alert('Debe elegir un tipo de encuadernacion para avanzar')
            }
    })
    
    
    
    
    $('nav').on('click', '#nuevoCuaderno',() => location.reload(true))
   
          
            
   
    $('nav').on('click','#terminarCompra', () => {
      $('.contacto__formulario').css('display','block')
      $('span').addClass('spanFormOff')
      $('span').removeClass('spanFormActive')
      })      
   
      
    //localStorage.clear() // una vez completada la compra se realiza limpieza del local storage para iniciar una compra desde 0.
    //location.reload(true)})
      



})