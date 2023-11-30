// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.

// 1. Iniciar la app. 
// 2. Obtener el elemento del formulario. 
// 3. Obtener la frase del usuario. 
// 4. Convertir la frase a minúsculas para hacer la búsqueda de vocales insensible a mayúsculas. 
// 5. Inicializar contadores para cada vocal. 
// 6. Recorrer cada carácter de la frase y contar las veces que aparece cada vocal. 
// 7. Mostrar el resultado. 

function contarVocales() {
    var inputFrase = document.getElementById("frase");

    var frase = inputFrase.value;

    var fraseEnMinusculas = frase.toLowerCase();

    var contadorA = 0;
    var contadorE = 0;
    var contadorI = 0;
    var contadorO = 0;
    var contadorU = 0;

    for (var i = 0; i < fraseEnMinusculas.length; i++) {
        var caracter = fraseEnMinusculas[i];
        switch (caracter) {
            case 'a':
                contadorA++;
                break;
            case 'e':
                contadorE++;
                break;
            case 'i':
                contadorI++;
                break;
            case 'o':
                contadorO++;
                break;
            case 'u':
                contadorU++;
                break;
        }
    }

    var resultado = "En la frase hay:<br>";
    resultado += "A: " + contadorA + " veces<br>";
    resultado += "E: " + contadorE + " veces<br>";
    resultado += "I: " + contadorI + " veces<br>";
    resultado += "O: " + contadorO + " veces<br>";
    resultado += "U: " + contadorU + " veces";
    
    document.getElementById("resultado").innerHTML = resultado;
}