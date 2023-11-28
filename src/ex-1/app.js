// Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.

// 1. Ejecutar la app.
// 2. Crear h1.
// 3. Crear el dato "Hello JavaScript"
// 4. Insertar dato en elemento h1
// 5. Imprimir la frase en la ventana del navegador.

const text = "Hello Javascript"
const h1Element = `<h1>${text}</h1>`
const divElement = document.getElementById('container')
divElement.innerHTML = h1Element