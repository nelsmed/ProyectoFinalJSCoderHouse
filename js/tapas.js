class Tapa {
    constructor(urlImg) {
        this.url = urlImg
    }
    cardTapa (){
        return ` 
                <div class="container contenedorElemento m-1">
                    <div class="card" style="width: 18rem;">
                        <img src="${this.url}" class="card-img-top img__tapa" alt="Tapa Uno">
                        <div class="card-body d-flex justify-content-center">
                            <input type="submit" class="agregarTapa btn-seleccion" id="agregarTapaId" value="Seleccionar">
                            <input type="submit" class="btnCancel btnCancelTapa" value="X">
                        </div>
                    </div>
                </div>`
    } 
}