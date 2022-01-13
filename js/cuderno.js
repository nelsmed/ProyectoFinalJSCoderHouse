class Cuaderno {
    constructor(id,tapa,interior, precio, encuadernacion) {
        this.id = id
        this.tapa = tapa
        this.interior = interior
        this.precio = precio
        this.encuadernacion = encuadernacion
    }
    armarTarjeta() {
        return `  <div class="card my-3 tarjetaCompra" style="max-width: 540px;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="${this.tapa}" class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-6 ">
                                        <div class="card-body d-flex flex-column justify-content-between">
                                            <h5 class="card-title text-center">${this.interior}</h5>
                                            <p class="card-text">${this.encuadernacion}</p>
                                            <p class="card-text">${this.precio}</p>
                                            <p class="card-text id d-none">${this.id}</p>
                                            <button class='btn btn-danger container-md cancelarCompra' id='cancelarCompra'>Cancelar</button>
                                        </div>
                                    </div>
                                </div>
                    </div>`
    }
    
    
}
