class Interior {
    constructor(urlImg, tit) {
        this.url = urlImg
        this.tit = tit
    }
    cardInt(){
        return `<div class="container contenedorElemento contenedorElementoInt">
                    <div class="card" style="width: 18rem;">
                        <img src="${this.url}" class="card-img-top" alt="Tapa Uno">
                        <h5 class="tipoInterior">${this.tit}</h5>
                        <div class="card-body d-flex justify-content-center">
                            <input type="submit" class="agregarInterior btn-seleccion" id="agregarIntId" value="Seleccionar">
                            <input type="submit" class="btnCancel btnCancelInt" value="X">
                        </div>
                    </div>
                </div>`
    }
}