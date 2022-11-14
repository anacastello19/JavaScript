//Ejercicio para encontrar numeros pares e impares
let parInpar=10;
if (parInpar%2==0){
    console.log("Es un numero PAR")
}
else{
    console.log("Es un numero IMPAR")
}

//Ejercicio: es mayor de edad
let edad=18, adulto=18;
if(edad>= adulto){
    console.log('Usted es una persona mayor de edad');
}
else{
    console.log('Usted es menor de edad')

}

//Ejercicio: dentro de un rango
let dantroRango=5;//Aqui vamos a ir cambiando el valor
let valMin=0, valMax=10;
if (dantroRango>= valMin && dantroRango<=valMax){
    console.log('Esta dentro del rango establecido');
}
else{
    console.log('Esta fuera del rango establecido');
}
//Ejercicio: Si el padre puede asistir al juego de su hija
let vacaciones = true, diaDeDescanso = false;
if (vacaciones||diaDeDescanso){
    console.log("El padre puede asistir al juego de su hijo")

}
else{
    console.log("El padre NO puede asistor al jueg de su hijo")
}
//Operador ternario
let rdos2 =6>5? "Verdadero":"Falso";
console.log(rdos2)
let num= 8;
rdos2= num%2==0? "Verdadero":"Falso";
console.log(rdos2)
//Convertir String a Number
let miNum="18";
console.log(typeof miNum);
let edad2= Number(miNum);
console.log(typeof edad2);

//Funcion isNaN
if(isNaN(edad2)){//No es un numero, devuelve un resultado booleano
    console.log("Esta variable no contuene solo numeros")
}
else{
    if(edad2>=18){
        console.log("Puede votar");
    }
    else{
        console.log("Es muy joven para votar")
    }
}


let rdo3= edad2>=18? "Puede votar" : "Es muy joven para votar";
console.log(rdo3)


