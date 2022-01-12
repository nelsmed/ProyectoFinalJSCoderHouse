
const guardarStorage = () => {
    const arrayCarrito = JSON.parse(localStorage.getItem('cuaderno')) || []
    if (arr.length === 4) {
        const cuaderno = {tapa: arr[0], interior:arr[1], precio:arr[2], encuadernacion:arr[3]}
        arrayCarrito.push(cuaderno)
        console.log(arrayCarrito)
        localStorage.setItem('cuaderno', JSON.stringify(arrayCarrito))

    }
}

const cancelarCompra = (e) => {
    const contenidoStorage = JSON.parse(localStorage.getItem('cuaderno'))
    let nroTarjeta = parseInt($(e.target).siblings('.id').text())
    contenidoStorage.splice((nroTarjeta-1),1)
    $(e.target).closest('.tarjetaCompra').fadeOut()
    localStorage.setItem('cuaderno', JSON.stringify(contenidoStorage))
}

const calcularTotal = () => {
    const contenidoStorage = JSON.parse(localStorage.getItem('cuaderno'))
    let precio = 0
    contenidoStorage.forEach(contenido => {
        let regex = /(\d+)/g
        let stringPrecio = contenido.precio
        let valor = parseInt(stringPrecio.match(regex))
        precio += valor
    })
    return precio
    
}
    

    
