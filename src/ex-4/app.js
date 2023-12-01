// Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.

// 1. Iniciar app 
// 2. Obtener los elementos del formulario; <numero-uno>, <numero-dos>
// 3. Convertir la entrada a números enteros
// 4. Calcular la suma
// 5. Mostrar el resultado 



function calcularSuma() {
    
    const inputNumeroUno = document.getElementById("numeroUno");
    const inputNumeroDos = document.getElementById("numeroDos");

    const numeroUno = parseInt(inputNumeroUno.value);
    const  numeroDos = parseInt(inputNumeroDos.value);

    const resultado = numeroUno + numeroDos;

    document.getElementById("resultado").innerText = "La suma de " + numeroUno + " con " + numeroDos + " es " + resultado;
}