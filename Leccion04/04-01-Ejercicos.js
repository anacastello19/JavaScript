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