// Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.
// 1. Iniciar la app.
// 2. Obtener el elemento del formulario.
// 3. Obtener la frase del usuario.
// 4. Convertir la frase a minúsculas para hacer la búsqueda de vocales insensible a mayúsculas.
// 5. Inicializar el contador de vocales.
// 6. Recorrer cada carácter de la frase y verificar si es una vocal.
// 7. Incrementar el contador de vocales.
// 8. Mostrar el resultado.
// 9. Función para verificar si un carácter es una vocal

     function contarVocales() {
        
        var inputFrase = document.getElementById("frase");

        var frase = inputFrase.value;

        var fraseEnMinusculas = frase.toLowerCase();

        var contadorVocales = 0;

       for (var i = 0; i < fraseEnMinusculas.length; i++) {
            var caracter = fraseEnMinusculas[i];
            if (esVocal(caracter)) {
                
                contadorVocales++;
            }
        }

        document.getElementById("resultado").innerText = "En la frase hay " + contadorVocales + " vocales.";
    }

    function esVocal(char) {
        return 'aeiou'.indexOf(char) !== -1;
    }
