

function armarCarrito(arr) {
    const arrayCarrito = JSON.parse(localStorage.getItem('cuaderno')) || []
    if (arr.length === 4) {
        $('#armadoEnProgreso').hide()
        const cuaderno = {tapa: arr[0], interior:arr[1], precio:arr[2], encuadernacion:arr[3]}
        arrayCarrito.push(cuaderno)
        console.log(arrayCarrito)
    } else {
        $('.btnsCart').append(`<button class="btn btn-primary col-4 mx-3" id="armadoEnProgreso">Continuar con armado en progreso</button>`)
    }
    $('header').hide()
    
    for (let i = 0; i < arrayCarrito.length; i++){
        let agregarCarrito = document.createElement('div')
        cuadernoStorage = new Cuaderno (i + 1, arrayCarrito[i].tapa, arrayCarrito[i].interior, arrayCarrito[i].precio, arrayCarrito[i].encuadernacion)
        let cardCarrito = cuadernoStorage.armarTarjeta()
        agregarCarrito.innerHTML = cardCarrito 
        $('.carrito').prepend(agregarCarrito)
    }
    $('.cancelarCompra').click((e) => {
        let nroTarjeta = parseInt($(e.target).siblings('.id').text())
        arrayCarrito.splice((nroTarjeta-1),1)
        console.log(arrayCarrito)
        $(e.target).closest('.tarjetaCompra').hide()
        localStorage.setItem('cuaderno', JSON.stringify(arrayCarrito))
    })
    localStorage.setItem('cuaderno', JSON.stringify(arrayCarrito))
    console.log(arrayCarrito)
}