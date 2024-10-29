const firstName = prompt("Ingresa tu nombre:");
const lastName = prompt("Ingresa tu apellido:");
const age = parseInt(prompt("Ingresa tu edad:"));
const years = parseInt(prompt("Cuantos años más pasarán en 4 años?:"));

// Calculate the future age
const futureAge = age + years;

// Display the final message
alert(`Hola, ${firstName} ${lastName}. Bienvenido a nuestra base de datos. Tu edad es ${age} años. Dentro de ${years} años, vas a tener ${futureAge}.`);
