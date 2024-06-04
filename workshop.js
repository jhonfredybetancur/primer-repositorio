// Definir variables para el sueldo y años de antigüedad del operario
let sueldo = 2500; // Ejemplo: sueldo del operario en dólares
let antiguedad = 12; // Ejemplo: años de antigüedad del operario

// Comparaciones
let comparacion1 = sueldo < 2000 && antiguedad >= 10;
let comparacion2 = sueldo < 2000 || antiguedad < 10;
let comparacion3 = sueldo >= 2000;

// Mostrar resultados en consola
console.log("¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años?", comparacion1);
console.log("¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?", comparacion2);
console.log("¿El sueldo es mayor o igual a $2000 US?", comparacion3)