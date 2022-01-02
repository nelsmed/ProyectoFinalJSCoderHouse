class Encuadernacion {
    constructor(urlImg, tit) {
        this.url = urlImg
        this.tit = tit
    }
    cardEnc() {
        return `<div class="container contenedorElemento contenedorElementoEnc">
                    <div class="card" style="width: 18rem;">
                        <img src="${this.url}" class="card-img-top" alt="Tapa Uno">
                        <h5 class="tipoInterior">${this.tit}</h5>
                        <div class="card-body d-flex justify-content-center">
                            <input type="submit" class="encuadernacionTipo btn-seleccion" id="agregarIntId" value="Seleccionar">
                            <input type="submit" class="btnCancel btnCancelEnc" value="X">
                        </div>
                    </div>
                </div>`
    }
}