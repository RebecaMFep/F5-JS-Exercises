// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro). 

// 1 Iniciar la app. 
// 2. Obtener el elemento del formulario. 
// 3. Obtener el número del usuario. 
// 4. Verificar si es un número válido. 
// 5. Verificar si el número es divisible por 2, 3, 5 o 7. 
// 6. Usar función para verificar si un número es divisible por otro. 


function verificarDivisibilidad() {
    
    var inputNumero = document.getElementById("numero");

    var numero = parseFloat(inputNumero.value);

    if (!isNaN(numero)) {
        
        if (esDivisible(numero, 2) || esDivisible(numero, 3) || esDivisible(numero, 5) || esDivisible(numero, 7)) {
            document.getElementById("resultado").innerText = "El número " + numero + " es divisible por 2, 3, 5 o 7.";
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