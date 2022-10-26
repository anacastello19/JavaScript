//Tipos de Datos eb JavaScript
/*
es muy similar a Java
realmente diriamos que es identica
*/
var nombre ='Ana'; //Tipo Str
console.log(typeof nombre); 
nombre=7; 
console.log(typeof numero); 
var numero= 12.3;//Tipo numerico
console.log(typeof numero); 
//Tipo objeto
var objeto= {
    nombre: 'Ana',
    apellido: 'Castello',
    telefono: '454545321'
}
console.log(objeto);

//Tipo de datos boolean
var bandera= true;
console.log(typeof bandera);

//Tipo de dato funcion
function miFuncion(){

}
console.log(miFuncion);

//Tipo de dato symbol
var simbolo= Symbol("mi simbolo");
console.log(simbolo);

//Tipo de dato clase
class Persona{
    constructor(nombre, apellido){
        this.nombre= nombre;
        this.apellido= apellido;
    }
}

console.log(Persona);