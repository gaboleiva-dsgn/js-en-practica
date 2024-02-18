// Asignamos el formulario a una variable
let form = document.getElementById("formulario");

// Creamos la funcion para limpiar datos del formulario
function limpiarDatos() {
    document.querySelector("#nombre").innerHTML = "";
    document.querySelector("#asunto").innerHTML = "";
    document.querySelector("#mensaje").innerHTML = "";
}

// CReamos función exito que envía un alert con el success.
function exito() {
    document.querySelector(".resultado").innerHTML = "Su mensaje se a enviado exitosamente :)"
}

// Funcion Validar le pasamos los valores que capturamos con el evento Listener "submit"
function validar(name,subjet,message) {
    
    let controlValidacion = true; // Creamos el interruptor para validacion true/false

    let patternName = /[a-zA-Z]/gim; // Le indicamos un patrón que solo acepte letras

    // Condicional para validar nombre
    if(patternName.test(name) == false) {

        // Si name retorna false pintamos la clase .errorNombre con este mensaje
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido!!";
        controlValidacion = false; // el interruptor es false
    };

    let patternSubjet = /[a-zA-Z]/gim; // Le indicamos un patrón que solo acepte letras

    if(patternSubjet.test(subjet) == false) {
         // Si subjet retorna false pintamos la clase .errorAsunto con este mensaje
        document.querySelector(".errorAsunto").innerHTML = "Solo se permiten letras en el asunto"
        controlValidacion = false; // el interruptor es false
    };

    let patternMessage = /[a-zA-Z]/gim; // Le indicamos un patrón que solo acepte letras

    if(patternMessage.test(message) == false) {
        // Si message retorna false pintamos la clase .errorMensaje con este mensaje
        document.querySelector(".errorMensaje").innerHTML = "Solo se permiten letras en el mensaje"
        controlValidacion = false; // el interruptor es false
    };

    return controlValidacion; // retornamos el valor

};

form.addEventListener( "submit", function( event )
{
    event.preventDefault();
    limpiarDatos();

    let name = document.querySelector("#nombre").value;
    let subjet = document.querySelector('#asunto').value;
    let message = document.querySelector('#mensaje').value;

    let resultado = validar(name,subjet,message);

    if(resultado == true) {
        exito();
    };
});
