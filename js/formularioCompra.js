const inputs = document.querySelectorAll('input[required]')
console.log(inputs)
inputs.forEach(input => {
    input.addEventListener('keyup', validarFormulario)
    
    const span= document.createElement('span')
    span.id = input.name
    span.textContent = input.title
    input.insertAdjacentElement("afterend",span)
    
})

const expresiones = {
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	calle: /^[a-zA-Z0-9À-ÿ\s]{3,40}$/, // Letras, espacios y numeros, pueden llevar acentos.
	nroCasa: /^[0-9]{1,6}$/, // Letras y espacios, pueden llevar acentos.
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos = {
    correo  : false,
    nombre  : false,
    calle   : false,
    nroCalle : false,
    tel: false
}

function validarFormulario(e) {
    console.log(e.target.name)
    switch (e.target.name) {
        case 'Correo':
            
            validarCampo(expresiones.correo, e.target, 'correo' )
        break;
        case 'Nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre' )

        break;
        case 'Calle':
            validarCampo(expresiones.calle, e.target, 'calle' )

        break;
        case 'NumeroCalle':
            validarCampo(expresiones.nroCasa, e.target, 'nroCalle' )

        break;
        case 'Telefono':
            validarCampo(expresiones.telefono, e.target, 'tel' )
        break;
    }
  
}
const validarCampo =  (expresion, input, campo) => {
    
    if(expresion.test(input.value)){
        $(`#${campo}`).addClass('valida')
        $(`#${campo}`).removeClass('noValida')
        $(`span#${input.name}`).addClass('spanFormOff')
        $(`span#${input.name}`).removeClass('spanFormActive')
        campos[campo] = true
    } else {
        $(`#${campo}`).addClass('noValida')
        $(`span#${input.name}`).addClass('spanFormActive')
        $(`span#${input.name}`).removeClass('spanFormOff')
        campos[campo] = false
    }
    console.log(campos[campo])
}

