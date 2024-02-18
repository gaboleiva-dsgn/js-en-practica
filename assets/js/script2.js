// se declaran las variables para su manipulación
const box = document.getElementById('caja');
const btnUno = document.getElementById('btn-1');
const btnDos = document.getElementById('btn-2');
const btnTres = document.getElementById('btn-3');
const btnCuatro = document.getElementById('btn-4');
const btnCinco = document.getElementById('btn-5');
const btnSeis = document.getElementById('btn-6');

// con el evento addEventListener (click) escuchamos al evento click para llamar a la función
btnUno.addEventListener("click", function () {
    // Le cambiamos valor backgroun-color a la caja
    // !!Profesor quisiera que me explicara por qué no funciona este metodo, el que sigue a continuación y está comentado.
    //document.getElementById('box').setAttribute('style', 'background-color: #e53e3e');
    box.style.backgroundColor = "#e53e3e";
});

// con el evento addEventListener (click) escuchamos al evento click para llamar a la función
btnDos.addEventListener("click", function () {
    // Le cambiamos valor backgroun-color a la caja
    box.style.backgroundColor = "#dd6b20";
});

// con el evento addEventListener (click) escuchamos al evento click para llamar a la función
btnTres.addEventListener("click", function () {
    // Le cambiamos valor backgroun-color a la caja
    box.style.backgroundColor = "#faf089";
});

// con el evento addEventListener (click) escuchamos al evento click para llamar a la función
btnCuatro.addEventListener("click", function () {
    // Le cambiamos valor backgroun-color a la caja
    box.style.backgroundColor = "#48bb78";
});

// con el evento addEventListener (click) escuchamos al evento click para llamar a la función
btnCinco.addEventListener("click", function () {
    // Le cambiamos valor backgroun-color a la caja
    box.style.backgroundColor = "#81e6d9";
});

// con el evento addEventListener (click) escuchamos al evento click para llamar a la función
btnSeis.addEventListener("click", function () {
    // Le cambiamos valor backgroun-color a la caja
    box.style.backgroundColor = "#d53f8c";
});