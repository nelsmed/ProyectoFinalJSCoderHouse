class Carrito {
    constructor (array) {
        this.tapa = array[0]
        this.interior = array[1]
        this.precio = array[2]
        this.enc = array[3]
    }
    
    guardarStorage() {
        const arrayCarrito = JSON.parse(localStorage.getItem('cuaderno')) || []
        if (arr.length === 4) {
            $('#armadoEnProgreso').hide()
            const cuaderno = {this.tapa, this.interior, this.precio, this.enc}
            arrayCarrito.push(cuaderno)
            
        } else {
            $('#seccionCarrito').append(`<button class="btn btn-primary col-4 mx-3" id="armadoEnProgreso">Continuar con armado en progreso</button>`)
            $("#armadoEnProgreso").mouseover((e)=>$(e.target).css('box-shadow','none'))
            $("#armadoEnProgreso").mouseout((e)=>$(e.target).css('box-shadow','rgba(0, 0, 0, 0.24) 0px 3px 8px'))
        }
        $('header').hide()
        
        for (let i = 0; i < arrayCarrito.length; i++){
            let agregarCarrito = document.createElement('div')
            cuadernoStorage = new Cuaderno (i + 1, arrayCarrito[i].tapa, arrayCarrito[i].interior, arrayCarrito[i].precio, arrayCarrito[i].encuadernacion)
            let cardCarrito = cuadernoStorage.armarTarjeta()
            agregarCarrito.innerHTML = cardCarrito 
            $('#seccionCarrito').prepend(agregarCarrito)
        }
        $('.cancelarCompra').click((e) => {
            let nroTarjeta = parseInt($(e.target).siblings('.id').text())
            arrayCarrito.splice((nroTarjeta-1),1)
            console.log(arrayCarrito)
            $(e.target).closest('.tarjetaCompra').fadeOut()
            localStorage.setItem('cuaderno', JSON.stringify(arrayCarrito))
        })
        localStorage.setItem('cuaderno', JSON.stringify(arrayCarrito))
        console.log(arrayCarrito)
        vistasNav.navCarrito()
    }
}