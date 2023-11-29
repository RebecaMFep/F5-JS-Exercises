// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// 1. Obtener los elementos del formulario
 //2. Convertir la entrada a números de punto flotante 
// 3. Verificar cuál es el mayor
function encontrarMayor() {
    
    var inputNumeroUno = document.getElementById("numeroUno");
    var inputNumeroDos = document.getElementById("numeroDos");
    var inputNumeroTres = document.getElementById("numeroTres");

   
    var numeroUno = parseFloat(inputNumeroUno.value);
    var numeroDos = parseFloat(inputNumeroDos.value);
    var numeroTres = parseFloat(inputNumeroTres.value);

   
    if (!isNaN(numeroUno) && !isNaN(numeroDos) && !isNaN(numeroTres)) {
        var mayor = Math.max(numeroUno, numeroDos, numeroTres);
        document.getElementById("resultado").innerText = "El mayor de los tres números es: " + mayor;
    } else {
        document.getElementById("resultado").innerText = "Ingresa números válidos.";
    }
}