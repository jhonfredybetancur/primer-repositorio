// solucion punto 1a
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

// ---------------------------------------------------------------------------------------------

// solucion punto 1b

let valorCompra = 120000; // Cambia este valor por el monto de la compra
let descuentoAplicable = valorCompra >= 100000; // Verifica si el descuento es aplicable
console.log(descuentoAplicable); // Muestra en consola el valor booleano

// ----------------------------------------------------------------------------------------------------
// solucion punto 1c

let numero = 80; // Cambia este valor por el número que quieras verificar
let esMultiploDeDos = numero % 2 === 0; // Verifica si el número es divisible entre 2 sin dejar residuo
console.log(esMultiploDeDos); // Muestra en consola el valor booleano

// -----------------------------------------------------------------------------------------

// solucion punto 1d

let nombreEmpleado = "Jhon Fredy"; // Cambia este valor por el nombre del empleado
let salarioPorHora = 10000; // Cambia este valor por el salario básico por hora
let horasTrabajadas = 160; // Cambia este valor por el número de horas trabajadas
let salarioMensual = salarioPorHora * horasTrabajadas; // Calcula el salario básico mensual
let recibeSubsidioTransporte = salarioMensual <= 700000; // Verifica si recibe subsidio de transporte
console.log("Nombre del empleado:", nombreEmpleado);
console.log("Salario básico mensual:", salarioMensual);
console.log("Recibe subsidio de transporte:", recibeSubsidioTransporte);

// ---------------------------------------------------------------------------------------

// solucion punto 1e

let letra = "e"; // Cambia este valor por la letra que quieras verificar

// Verifica si la letra es una vocal
let esVocal = /[aeiou]/i.test(letra);

console.log(esVocal); // Muestra en consola el valor booleano

// ------------------------------------------------------------------------------------------------

// solucion punto 1f

let primerDigitoPasaporte = 'A'; // Aquí ingresa el primer dígito del número de pasaporte
let esNacional = primerDigitoPasaporte === 'A'; // Verifica si el primer dígito es 'A' para determinar si es nacional
console.log(esNacional); // Imprime el valor booleano que indica si el turista es del país o extranjero

// ------------------------------------------------------------------------------------------------

// solucion punto 2 

// declarar variables

const a = 4;
const b = 7;
const c = 2 * b;
const x = a;
const y = 3 * x;
const u = 6;
const w = 10;
const z = 2 * w;
// Operación a
 resultadoA = a / (b * c);
console.log("Resultado a:", resultadoA);

// Operación b
 resultadoB = (a**2) + (b**92)
console.log("Resultado b:", resultadoB);

// Operación c
resultadoC = (x + y) / (u + (w / a));
console.log("Resultado c:", resultadoC);

// Operación d
 resultadoD = (x / y) / (z + w);
console.log("Resultado d:", resultadoD);