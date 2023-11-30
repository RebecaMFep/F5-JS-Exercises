// Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

// 2. Obtener el elemento del formulario
// 3. Obtener el número del usuario
// 4. Verificar si es un número válido
// 5. Verificar si es primo
// 6. Función para verificar si un número es primo

function verificarPrimo() {
     
    var inputNumero = document.getElementById("numero");

    var numero = parseInt(inputNumero.value);

    if (!isNaN(numero) && numero > 1) {
        
        if (esPrimo(numero)) {
            document.getElementById("resultado").innerText = "El número " + numero + " es primo.";
        } else {
            document.getElementById("resultado").innerText = "El número " + numero + " no es primo.";
        }
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingresa un número entero mayor que 1.";
    }
}

function esPrimo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; // No es primo, es divisible por otro número
        }
    }
    return true; // Es primo
}