var nombre= 'Ana';
var apellido= 'Cast';
var nombreCompleto= nombre+' '+apellido;//Primera concatenacion
console.log(nombreCompleto);
var nombreCompleto2= 'Ana'+' '+'Cast'//Segunda concatenacion
console.log(nombreCompleto2);
var juntos= nombre+129; // Lee de izq a der siendo la cadena
console.log(juntos);
juntos= nombre+(78+78);//entre parentesis se suma
console.log(juntos);
juntos = 75+75+nombre;//se suna
console.log(juntos);

nombre+= " "+ apellido;//Otra forma de concatenar
console.log(nombre)

//Hoy ya no se usa var, se utiliza let y const
let nombre2= "Pedro";
console.log(nombre2);

const apellido2="Lepes";
console.log(apellido2);

let y,x;//Se pueden crear varias variables
x= 17, y= 21;//Se puede hacer asignacion de varias variables
let z=x+y;//Se asigna el valor de la operacion
console.log(z); 
let _1num=31; //las variable no las iniciamos con numeros
let rompe="rompe";//las variables no pueden tener palabreas reservadas

console.log(_1num);
console.log(rompe);
