// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
// 1. Ejecutar la app
// 2. Obtener el elemento del formulario
// 3. Obtener la frase del usuario
// 4. Convertir la frase a minúsculas para hacer la búsqueda de 'a' insensible a mayúsculas
// 5. Contar las ocurrencias de la letra 'a'
// 6. Mostrar el resultado


function contarLetraA() {
  
    var inputFrase = document.getElementById("frase");

   
    var frase = inputFrase.value;

    
    var fraseEnMinusculas = frase.toLowerCase();

    var contadorA = 0;
    for (var i = 0; i < fraseEnMinusculas.length; i++) {
        if (fraseEnMinusculas[i] === 'a') {
            contadorA++;
        }
    }

  
    document.getElementById("resultado").innerText = "La letra 'a' aparece " + contadorA + " veces en la frase.";
}