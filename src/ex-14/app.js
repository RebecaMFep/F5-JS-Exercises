//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados.

// 1. Iniciar app. 
// 2. Obtener los elementos del formulario. 
// 3. Obtener los números del usuario. 
// 4. Verificar si son números válidos. 
// 5. Calcular los divisores comunes. 
// 6. Mostrar el resultado. 
// 7. Usar una función para calcular los divisores de un número. 
// 8. Usar una función para verificar si un número es divisible por otro. 
// 9. Usar una función para encontrar los divisores comunes.


function mostrarDivisoresComunes() {
    
    var inputNumero1 = document.getElementById("numero1");
    var inputNumero2 = document.getElementById("numero2");

    var numero1 = parseInt(inputNumero1.value);
    var numero2 = parseInt(inputNumero2.value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
    
        var divisores1 = calcularDivisores(numero1);
        var divisores2 = calcularDivisores(numero2);

        var divisoresComunes = encontrarDivisoresComunes(divisores1, divisores2);

        var resultado = "Los divisores comunes de " + numero1 + " y " + numero2 + " son: " + divisoresComunes.join(', ');
        document.getElementById("resultado").innerText = resultado;
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingresa números válidos.";
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

function esDivisible(numero, divisor) {
    return numero % divisor === 0;
}

function encontrarDivisoresComunes(divisores1, divisores2) {
    return divisores1.filter(function(divisor) {
        return divisores2.indexOf(divisor) !== -1;
    });
}