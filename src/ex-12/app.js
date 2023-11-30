//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible). 

// 1. Iniciar la app. 
// 2. Obtener el elemento del formulario. 
// 3. Obtener el número del usuario. 
// 4. Verificar si es un número válido. 
// 5. Inicializar un array para almacenar los divisores. 
// 6. Verificar y almacenar los divisores. 
// 7. Mostrar el resultado. 
// 8. Usar una función para verificar si un número es divisible por otro. 



function verificarDivisibilidad() {
    var inputNumero = document.getElementById("numero");

    var numero = parseFloat(inputNumero.value);

    
    if (!isNaN(numero)) {
        var divisores = [];

        if (esDivisible(numero, 2)) {
            divisores.push(2);
        }
        if (esDivisible(numero, 3)) {
            divisores.push(3);
        }
        if (esDivisible(numero, 5)) {
            divisores.push(5);
        }
        if (esDivisible(numero, 7)) {
            divisores.push(7);
        }

        if (divisores.length > 0) {
            var mensaje = "El número " + numero + " es divisible por ";
            mensaje += divisores.join(', ');
            document.getElementById("resultado").innerText = mensaje;
        } else {
            document.getElementById("resultado").innerText = "El número " + numero + " no es divisible por 2, 3, 5 ni 7.";
        }
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingresa un número válido.";
    }
}

function esDivisible(numero, divisor) {
    return numero % divisor === 0;
}