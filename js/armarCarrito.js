function armarCarrito(link, int, enc) {
    let cuaderno = {tapa: link, interior:int, encuadernacion:enc}
    arrayCarrito = JSON.parse(localStorage.getItem('cuaderno')) || []
    arrayCarrito.push(cuaderno)
    console.log(arrayCarrito)
    for (let i = 0; i < arrayCarrito.length; i++){
        let agregarCarrito = document.createElement('div')
        let id = i + 1
        let tapa = arrayCarrito[i].tapa
        let interior = arrayCarrito[i].interior
        let encuadernacion = arrayCarrito[i].encuadernacion
        cuadernoStorage = new Cuaderno (id, tapa, interior, encuadernacion)
        let cardCarrito = cuadernoStorage.armarTarjeta()
        agregarCarrito.innerHTML = cardCarrito 
        $('.carrito').prepend(agregarCarrito)
    }
    $('.cancelarCompra').click((e) => {
        let nroTarjeta = parseInt($(e.target).siblings('.id').text())
        arrayCarrito.splice((nroTarjeta-1),1)
        console.log(arrayCarrito)
        $(e.target).closest('.tarjetaCompra').hide()
    })
}