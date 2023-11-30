//Escribir un programa que escriba en pantalla los divisores de un número dado. 

// 1. Iniciar app. 
// 2. Obtener el elemento del formulario. 
// 3. Obtener el número del usuario. 
// 4. Verificar si es un número válido. 
// 5. Mostrar los divisores. 
// 6. Usar una función para calcular los divisores de un número. 
// 7. Repetir desde 1 hasta el número y verificar si es divisor. 
// 8. Función para mostrar el resultado en el HTML. 
// 9. Función para verificar si un número es divisible por otro. 

function mostrarDivisores() {
    var inputNumero = document.getElementById("numero");

    var numero = parseInt(inputNumero.value);

    if (!isNaN(numero)) {
        var divisores = calcularDivisores(numero);
        mostrarResultado(divisores);
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingresa un número válido.";
    }
}

function calcularDivisores(numero) {
    var divisores = [];

    for (var i = 1; i <= numero; i++) {
        if (esDivisible(numero, i)) {
            divisores.push(i);
        }
    }

    return divisores;
}

function mostrarResultado(divisores) {
    var resultado = "Los divisores son: " + divisores.join(', ');
    document.getElementById("resultado").innerText = resultado;
}

function esDivisible(numero, divisor) {
    return numero % divisor === 0;
}