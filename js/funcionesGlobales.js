
//Funcion para seleccionar el elemento correspondiente de cada seccion
function agregarElemento(e) {
    if (e.target.classList.contains('agregarTapa')) {
        arr.push($(e.target).closest('.card').children('img').attr('src'))

    }
    if (e.target.classList.contains('agregarInterior')) {
        arr.push($(e.target).closest('.card').children('h5').text())
        
    }
    if (e.target.classList.contains('encuadernacionTipo')) {
        arr.push($(e.target).closest('.card').children('h5').text())
    }
}

//Funcion que hace que una vez que se seleccionó un elemento de una seccion se deshabiliten los otros para solo poder elegir de a uno
function deshabilitarContenido (e){ 
    $(e.target).closest('.contenedorElemento').siblings().addClass('deshabilitarContenido')
    $(e.target).closest('.contenedorElemento').siblings().find('input').addClass('d-none')
}

//Funcion para cambiar el botón de selección por el botón de cancelar selección
function botonCancelar (e) { 
    $(e.target).toggle(600, 'swing',$(e.target).siblings().toggle(600))
}

//Funcion para que una vez cancelada la selección se elmimine del arreglo el elemento previamente seleccionado
function eliminarItem() { 
    arr.pop()
    console.log(arr)
}


// Funión para hacer que vuelva a aparecer el contenido una vez pulsado el botón de cancelar
function habilitarContenido(e) {
    $(e.target).closest('.contenedorElemento').siblings().removeClass('deshabilitarContenido')
    $(e.target).closest('.contenedorElemento').siblings().find('input').removeClass('d-none')
}


