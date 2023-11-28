// Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>” 

// 1. Iniciar app 
// 2. Crear una sección donde se va a mostar el mensaje 
// 3. Crear el dato "Hola" 
// 4. Crear el dato que recoge el nombre de usuario. input 
// 5. Declarar el elemento "escuchador"
// 6. Crear una function 
// 7. Asignar método

const hello = "Hola"

other = document.getElementById('username')

function printMessage() {
    const user = other.value;
    const message = document.getElementById('greet');

    message.innerHTML = hello + user;

}

other.addEventListener('input', printMessage);