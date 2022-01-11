class Interior {
    constructor(urlFirst, urlSecond, urlThird, tit, info, id, precio) {
        this.urlFirst = urlFirst
        this.urlSecond = urlSecond
        this.urlThird = urlThird
        this.tit = tit
        this.descripcion = info
        this.id = id
        this.precio = precio
    }
    cardInt(){
        return `<div class="container contenedorElemento contenedorElementoInt">
                    <div class="card my-1" style="width: 18rem;">
                        <div id="carouselExampleControls${this.id}" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="${this.urlFirst}" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="${this.urlSecond}" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="${this.urlThird}" alt="Third slide">
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls${this.id}" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls${this.id}" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        
                        <h5 class="tipoInterior text-center my-1">${this.tit}</h5>
                        <p class='precio'>Precio: $${this.precio}</p>
                        <label class="fas fa-info-circle" id="icono" data-toggle="tooltip" data-placement="right" title="${this.descripcion}"></label>
                        <div class="card-body d-flex justify-content-center">
                            <input type="submit" class="agregarInterior btn-seleccion" id="agregarIntId" value="Seleccionar">
                            <input type="submit" class="btnCancel btnCancelInt" value="X">
                        </div>
                    </div>
                </div>`
    }
   
}