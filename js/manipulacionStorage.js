
const guardarStorage = () => {
    const arrayCarrito = JSON.parse(localStorage.getItem('cuaderno')) || []
    const idStorage = arrayCarrito.length
    if (arr.length === 4) {
        const cuaderno = {id: idStorage+1, tapa: arr[0], interior:arr[1], precio:arr[2], encuadernacion:arr[3]}
        arrayCarrito.push(cuaderno)
       
        localStorage.setItem('cuaderno', JSON.stringify(arrayCarrito))

    }
}

const cancelarCompra = (e) => {
    const contenidoStorage = JSON.parse(localStorage.getItem('cuaderno'))
    let nroTarjeta = parseInt($(e.target).siblings('.id').text())
    contenidoStorage.splice(contenidoStorage.findIndex(e => e.id===nroTarjeta),1)
    $(e.target).closest('.tarjetaCompra').fadeOut()
    localStorage.setItem('cuaderno', JSON.stringify(contenidoStorage))
    $('#seccionCarrito').find('h3').replaceWith(`<h3>El total a pagar es: $ ${calcularTotal()}</h3>`)
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
    

    
