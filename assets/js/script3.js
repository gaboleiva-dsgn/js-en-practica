// Entrada de datos
// se declaran las variables para su manipulación
const resultado = document.querySelector('.resultado');
const num1 = document.getElementById('valor1');
const num2 = document.getElementById('valor2');
const sumar = document.getElementById('btn-sumar');
const restar = document.getElementById('btn-restar');

// función standard sumar, la que al ser llamada suma num1 y num2
function suma() {
    const sumaNum1 = Number(valor1.value);
    const sumaNum2 = Number(valor2.value);
    const resultadoSuma = sumaNum1 + sumaNum2;
    //Utilizamos textContent para actualizar el contenido
    //en el html y que nos muestre el resultado.
    resultado.textContent = resultadoSuma;
}

// función standard resta, la que al ser llamada resta num1 y num2
function resta() {
    const restaNum1 = Number(valor1.value);
    const restaNum2 = Number(valor2.value);
    const resultadoResta = restaNum1 - restaNum2;

    // condicional para mostrar cero si es negativo.
    if (resultadoResta < 0) {
        resultado.textContent = 0;
    } else {
        resultado.textContent = resultadoResta;
    }
}

// con el evento addEventListener (click) escuchamos al evento click para llamar a la función suma
sumar.addEventListener('click', function () {
    //llamamos a la función suma
    suma();
});

// con el evento addEventListener (click) escuchamos al evento click para llamar a la función resta
restar.addEventListener('click', function () {
    //llamamos a la función resta
    resta();
});