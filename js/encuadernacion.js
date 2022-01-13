class Encuadernacion {
    constructor(urlImg, tit, info) {
        this.url = urlImg
        this.tit = tit
        this.descripcion = info
    }
    cardEnc() {
        return `<div class="container contenedorElemento contenedorElementoEnc">
                    <div class="card" style="width: 18rem;">
                        <img src="${this.url}" class="card-img-top" alt="Tapa Uno">
                        <h5 class="tipoInterior text-center my-2">${this.tit}</h5>
                        <label class="fas fa-info-circle" id="icono" data-toggle="tooltip" data-placement="right" title="${this.descripcion}"></label>
                        <div class="card-body d-flex justify-content-center">
                            <input type="submit" class="encuadernacionTipo btn-seleccion" id="agregarIntId" value="Seleccionar">
                            <input type="submit" class="btnCancel btnCancelEnc" value="X">
                        </div>
                    </div>
                </div>`
    }
}