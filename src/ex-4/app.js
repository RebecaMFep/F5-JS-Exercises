// Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.

// 1. Iniciar app 
// 2. Obtener los elementos del formulario
// 3. Convertir la entrada a números enteros
// 4. Calcular la suma
// 5. Mostrar el resultado 



function calcularSuma() {
    
    var inputNumeroUno = document.getElementById("numeroUno");
    var inputNumeroDos = document.getElementById("numeroDos");

    var numeroUno = parseInt(inputNumeroUno.value);
    var numeroDos = parseInt(inputNumeroDos.value);

    var resultado = numeroUno + numeroDos;

    document.getElementById("resultado").innerText = "La suma de " + numeroUno + " con " + numeroDos + " es " + resultado;
}