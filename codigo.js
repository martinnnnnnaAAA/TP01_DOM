const resultadoMatematica = document.getElementById("notaMatematica");
const resultadoLengua = document.getElementById("notaLengua");
const resultadoEFSI = document.getElementById("notaEFSI");
const inputMatematica = document.getElementById("resultadoMatematica");
const inputLengua = document.getElementById("resultadoLengua");
const inputEFSI = document.getElementById("resultadoEFSI");
const promedio = document.getElementById("botonPromedio");
const textMatematica = document.getElementById("textMatematica");
const textLengua = document.getElementById("textLengua");
const textEFSI = document.getElementById("textEFSI");
const imagen = document.getElementById("imagen")


const validarNota = (e) => {

    if (e.target.value.length == 0) {
        alert("Debe completar todos los campos");
    }
    inputMatematica.innerText = "Nota matematica: " + resultadoMatematica.value;
    inputLengua.innerText = "Nota Lengua: " + resultadoLengua.value
    inputEFSI.innerText = "Nota EFSI: " + resultadoEFSI.value
}
const validarValor = (e) => {
    if (e.target.value <= 10 && e.target.value >= 1) {
        e.target.style.color = "green"
    }
    else {
        e.target.style.color = "red"
    }
}
const CalcularPromedio = () => {

    let promedioTotal = ((parseInt(resultadoEFSI.value) + parseInt(resultadoMatematica.value) + parseInt(resultadoLengua.value)) / 3)
    if (promedioTotal >= 6) {
        promedio.style.color = "green";
        imagen.src = "./Images/felicitaciones.jpg";
    }
    else {
        promedio.style.color = "red";
        imagen.src = "./Images/reprobo.jpg";
    }
    promedio.innerText = "Promedio: " + promedioTotal
}

const calcularMayor = () => {
    if (resultadoMatematica.value >= resultadoLengua.value && resultadoMatematica.value >= resultadoEFSI.value) {
        textMatematica.style.color = "blue"
    }
    else{
        textMatematica.style.color = "black"
    }
    if (resultadoLengua.value >= resultadoMatematica.value && resultadoLengua.value >= resultadoEFSI.value) {
        textLengua.style.color = "blue"
    }
    else{
        textLengua.style.color = "black"
    }
    if (resultadoEFSI.value >= resultadoMatematica.value && resultadoEFSI.value >= resultadoLengua.value) {
        textEFSI.style.color = "blue"
    }
    else{
        textEFSI.style.color = "black"
    }
}



