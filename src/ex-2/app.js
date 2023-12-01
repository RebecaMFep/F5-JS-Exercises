// Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.

// 1. Iniciar la app 
// 2. Crear dato (frase) 
// 3. Crear el 3 
// 4. Crear el 5
// 5. Realizar suma y devolver el resultado 
// 6. Insertar el resultado en la frase 
// 7. Imprimir en pantalla 

const tres = 3 
const cinco = 5
const resultado = tres + cinco 
const frase = `La suma de ${tres} + ${cinco} es ${resultado}`

const divElement = document.getElementById('container')

divElement.innerText = frase
