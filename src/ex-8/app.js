// Escribe un programa que pida una frase y escriba las vocales que aparecen

// 1. Iniciar app.
// 2. Obtener el elemento del formulario. 
// 3. Obtener la frase del usuario.
// 4. Convertir la frase a minúsculas para hacer la búsqueda de vocales insensible a mayúsculas.
// 5. Inicializar una cadena para almacenar las vocales encontradas. 
// 6. Recorrer cada carácter de la frase y verificar si es una vocal. 
// 7. Agregar la vocal a la cadena de vocales encontradas.
// 8. Cómo mostrar el resultado.
// 9. Utilizar una función para verificar si un carácter es una vocal.

function buscarVocales() {
    
    var inputFrase = document.getElementById("frase");
    var frase = inputFrase.value;
    var fraseEnMinusculas = frase.toLowerCase();

    var vocalesEncontradas = "";

    for (var i = 0; i < fraseEnMinusculas.length; i++) {
        var caracter = fraseEnMinusculas[i];
        if (esVocal(caracter)) {
            vocalesEncontradas += caracter;
        }
    }

    document.getElementById("resultado").innerText = "Las vocales en la frase son: " + vocalesEncontradas;
}

function esVocal(char) {
    return 'aeiou'.indexOf(char) !== -1;
}