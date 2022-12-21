//Ejercicio 1: Calcular estacion del año 
//Ejercicio 2: Hora del dia
let mes=4;
let estacion; //Undefined
if (mes==1 || mes==2 ||mes==12){
    estacion='Verano';
}
else if(mes==3||mes==4||mes==5){
    estacion= 'Otoño';
}
else if(mes==6||mes==7||mes ==8){
    estacion='Inviero'
}
else if( mes== 9||mes==10||mes==11){
    estacion ='Primavera';
}
else{
    estacion='Valor incorrecto'
}
console.log("El valor que corresponde a la estacion es: "+ estacion);

//Ejercicio 2: hora del dia
let hora =16;
let hsDelDia;
if(hora==00|| hora==01|| hora==02|| hora==03|| hora==04|| hora==05|| hora==06){
    hsDelDia= 'Madrugada';
}
else if(hora==06|| hora==07|| hora==08|| hora==09|| hora==10|| hora==11){
    hsDelDia='Mañana';
}
else if(hora==12|| hora==13|| hora==14|| hora==15|| hora==16|| hora==17|| hora==18|| hora==19){
    hsDelDia='Tarde';
}
else if(hora==20|| hora==21|| hora==22|| hora==23){
    hsDelDia='Noche';
}
else{
    hsDelDia="Esta hora no exciste en el dia";
}
console.log("La hora del dia es "+ hora+"hs entonces es la: "+ hsDelDia)

//Estructura switch(la sintaxis es igual a Java)
switch(mes){
    case 1: case 2: case 12:
    estacion= "Verano";
    break;

    case 3 : case 4: case 5:
    estacion="Otono";
    break;

    case 6: case 7: case 8:
    estacion="Invierno";
    break;
    
    case 9: case 10: case 11:
    estacion="Primavera";
    break;
}
console.log("El mes " + mes + " cae en la estacion: "+ estacion)

/*
Const se utiliza para valores constantes que no puedem ser reemplazados 
*/

const fechaNacimiento=2006;
console.log(fechaNacimiento);
//fechaNacimiento=2020
//console.log(fechaNacimiento)

//Evitar repetir tu codigo
//Dry don't repeat yourself

let days= 1;
switch(days){
    case 1:
        console.log('Hoy es '+ days);
        break;
    case 2:
        console.log('Hoy es'+ days);
        break;
    case 3:
        console.log('Hoy es '+ days);
        break;
    case 4:
        console.log('Hoy es '+ days);
        break;
    case 5:
        console.log('Hoy es '+ days);
        break;
    case 6:
        console.log('Hoy es '+ days);
        break;
    case 7:
        console.log('Hoy es '+ days);
        break;
    default:
        console.log('Error en el ingreso del dia de la semana');
        break;
}

let days2=['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
function getDay(n){
    if(n<1||n>7){
        throw new Error('out of range');
    }
    return days2[n-1];
}
console.log(getDay(3));
/*
Hacer un ejercicio similar al que esta
hecho, pero ahora con los meses del years
debe hacerlo con estructura swich 
y luego con la funcion en la opcion mejorada
*/ 

let month= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'];
function getmonth(n){
    if(n<1||n>12){
        throw new Error('out of ranger');
    }
    return month[n-1];
}
console.log(getmonth(5));