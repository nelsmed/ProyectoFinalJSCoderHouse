class Nav {
    
    generarNav = () => {
        $('nav').show()
        $('nav').append(`
        <div class="nav__logo">
            <img src="./img/Simbolos/logorosa.png" alt="">
            <h1> Tienda Online </h1>
        </div>
        <div class="nav__cabecera">
            <div class="nav__btn">
                <img src="./img/Simbolos/boton.png">
            </div>
            <div class="tittle">
                <h2></h2>
            </div>
        </div>
        <div class="nav__parrafo">
            <p></p>
        </div>
        <div class="nav__arrow">
            <img src="../img/Simbolos/flecha.png" alt="">
        </div>
        `)
    }
    
    navPasoUno = () => {
        $('nav').addClass('paso1')
        $('nav').removeClass('paso2')
        $('nav').removeClass('paso3')
        $('nav').removeClass('pasoCarrito')
        $('nav').find('h2').replaceWith(`<h2>Paso 1</h2>`)
        $('nav').find('p').replaceWith(`<p>Seleccioná Disño de Tapas.</p>`)
        $('nav__logo').children().replaceWith(`<img src="./img/logorosa.png" alt="">`)
        $('nav').find('.nav__arrow').replaceWith(`<div class="nav__arrow">
                                                    <img src="../img/Simbolos/flecha.png" alt="">
                                                </div>`)
        
       
    }
    navPasoDos = () => {
        $('nav').removeClass('paso1')
        $('nav').addClass('paso2')
        $('nav').removeClass('paso3')
        $('nav').removeClass('pasoCarrito')
        $('nav').find('h2').replaceWith(`<h2>Paso 2</h2>`)
        $('nav').find('p').replaceWith(`<p>Seleccioná el Interior.</p>`)
        $('nav__logo').children().replaceWith(`<img src="./img/logoceleste.png" alt="">`)
        $('nav').find('.nav__arrow').replaceWith(`<div class="nav__arrow">
                                                    <img src="../img/Simbolos/flecha.png" alt="">
                                                </div>`)
        
    }
    navPasoTres = () => {
        $('nav').removeClass('paso1')
        $('nav').removeClass('paso2')
        $('nav').removeClass('pasoCarrito')
        $('nav').addClass('paso3')
        $('nav').find('h2').replaceWith(`<h2>Paso 3</h2>`)
        $('nav').find('p').replaceWith(`<p>Seleccioná el Tipo de Encuadernación.</p>`)
        $('nav__logo').children().replaceWith(`<img src="./img/logoSinFond.png" alt="">`)
        $('nav').find('.nav__arrow').replaceWith(`<div class="nav__arrow">
                                                    <img src="../img/Simbolos/flecha.png" alt="">
                                                </div>`)
    }
    navCarrito = () => {
        $('nav').removeClass('paso3')
        $('nav').addClass('pasoCarrito')
        $('.nav__btn').remove()
        $('nav').find('.nav__arrow').replaceWith(`<div class="d-flex justify-content-between container my-5 btnsCart">
                                                    <button class=" col-6 mx-1" id="nuevoCuaderno">Armar Nuevo Cuaderno</button>
                                                    <button class="  col-6" id="terminarCompra">Finalizar Compra</button>
                                                </div>`)
        $('nav').find('h2').replaceWith(`<h2><i class="fas fa-shopping-cart"></i></h2>`)
        $('nav').find('p').replaceWith(`<p>Arme un nuevo cuaderno o Finalice Compra</p>`)
        $("#nuevoCuaderno").mouseover((e)=>$(e.target).css('box-shadow','none'))
        $("#nuevoCuaderno").mouseout((e)=>$(e.target).css('box-shadow','rgba(0, 0, 0, 0.24) 0px 3px 8px'))
        $("#terminarCompra").mouseover((e)=>$(e.target).css('box-shadow','none'))
        $("#terminarCompra").mouseout((e)=>$(e.target).css('box-shadow','rgba(0, 0, 0, 0.24) 0px 3px 8px'))
       
        
    }

    vaciarNav = () => $('nav').children().remove()
}


