// Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor.

// 1. Ejecutar la app 
// 2. Obtener los elementos que necesita el formulario 
// 3. COnvertir la entrada a números de punto flotante 
// 4. Verificar cuál es el mayor 




function compararNumeros() {
    
    const inputNumeroUno = document.getElementById("numeroUno");
    const inputNumeroDos = document.getElementById("numeroDos");

   
    const numeroUno = parseFloat(inputNumeroUno.value);
    const numeroDos = parseFloat(inputNumeroDos.value);

    
    if (!isNaN(numeroUno) && !isNaN(numeroDos)) {
        if (numeroUno > numeroDos) {
            document.getElementById("resultado").innerText = "El mayor es: " + numeroUno;
        } else if (numeroDos > numeroUno) {
            document.getElementById("resultado").innerText = "El mayor es: " + numeroDos;
        } else {
            document.getElementById("resultado").innerText = "Ambos números son iguales.";
        }
    } else {
        document.getElementById("resultado").innerText = "Ingresa números válidos.";
    }
}