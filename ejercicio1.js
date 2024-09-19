/*

esto es para comentar un parrafo
*/
//esto es para comentar una linea 

// identificadores y se divide en dos, constatntes y variables constantes son valores fijos y que nunca cambia en la ejecuacion del algoritmo
// variables si cambia el valor

const nombre = "Tomas"; // constante
let edad = 25; // variable
var nombre2 = "camilo" // variable
//  const = constante
//  let = variables locales
//  var = variables globales

var texto = "texto" // variable
var numero = 123 //variable
var numeroReal = 1.4
var boolean2 = true //boolean
var boolean = false //boolean
var vacio = null // variable
console.log("null", null);
var indefinido = undefined //variable
console.log("undefined", indefinido);

// operadores basicas
var suma = numero + numeroReal // 136.4
console.log("suma ",suma);
var resta = numero - numeroReal // 120.6
console.log("resta ", resta);
var multiplicacion = numero * numeroReal // 172.8
console.log("multiplicacion ", multiplicacion);
var division = numero / numeroReal // 9 
// modulo ejemplo 
var modulo = numero % numeroReal //3.4
console.log(modulo);
// concatenacion
var concat = nombre + " " + nombre2 
console.log("concatenear", concat);
var raizCuadrada = Math.sqrt(numero); // 11
console.log("raizCuadrada",raizCuadrada)
var potencia = Math.pow(numero, 2); // 15625
console.log("potencia",potencia);
// redondeo
var redondeo = Math.round(numero); // 121
console.log("redondeo",redondeo);
// trucar
var truncado = Math.trunc(numeroReal); //120
console.log("truncado",truncado);
let a = parseInt(prompt("Escriba un numero")), b = parseInt(prompt("Escriba un numero"))
if (a > b) {
    console.log("A es mayor que b");
}else if (a==b){
    console.log("Son iguales");
}else{
    console.log("B es mayor que A");
}
let matricula = true, documentacion = true
if (matricula == true && documentacion == true) {
    console.log("Felicitaciones");
}else{
    console.log("Ups! Faltan documentos");  
}
let pregunta = parseInt(prompt("Escriba un numero del 1 al 3"))
if (pregunta == 1) {
    console.log("su respuesta es 1");
}else if (pregunta == 2) {
    console.log("su respuesta es 2");
}else if (pregunta == 3) {
    console.log("su respuesta es 3");
}else{
    console.log("Error");
}
switch (pregunta) {
    case 1:
        console.log("Opcion 1 tomada");
        break;
    case 2:
        console.log("Opcion 2 tomada");
        break;
    case 3:
        console.log("Opcion 3 tomada");
        break;
    default:
        console.log("Opcion invalida");
        break;
}

let arrayEjemp = [1,2,3,4,5]
for (let index = 2; index < arrayEjemp.length; index++) {
    const element = arrayEjemp[index];
    console.log("Estas en la posicion " + element);
}
for (const element of arrayEjemp) {
    let  elements = element * 3
    console.log(elements); 
}
let foreac = arrayEjemp.forEach(e => e++);
console.log(foreac);

let num  = Number
let num1 = Number 
  
const input = document.getElementById('inputNumber');
const buttons = document.querySelectorAll('#addNumber');
const buttonsSig = document.querySelectorAll('#addNumb');

buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        input.value += e.target.value;
              if (e.target.value === "+") {
               
              }
              if (e.target.value === "-") {
               
              }
              if (e.target.value === "*") {
               
              }
              if (e.target.value === "/") {
               
              }
      });
    });

    function calcular(operacion, num1, num2) {
        switch(operacion) {
            case 'suma':
                return num1 + num2;
            case 'resta':
                return num1 - num2;
            case 'multiplicacion':
                return num1 * num2;
            case 'division':
                if (num2 !== 0) {
                    return num1 / num2;
                } else {
                    return 'Error: No se puede dividir entre 0';
                }
            default:
                return 'Operación no válida';
        }
    }