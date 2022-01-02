class Cuaderno {
    constructor(id,tapa,interior,encuadernacion) {
        this.id = id
        this.tapa = tapa
        this.interior = interior
        this.encuadernacion = encuadernacion
    }
    armarTarjeta() {
        return `  <div class="card mb-3 tarjetaCompra" style="max-width: 540px;">
                                    <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src="${this.tapa}" class="img-fluid rounded-start" alt="...">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title text-center">${this.interior}</h5>
                                                    <p class='id'>${this.id}</p>
                                                    <p class="card-text">${this.encuadernacion}</p>
                                                    <button class='btn btn-danger container-md cancelarCompra' id='cancelarCompra'>Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
    }
}
