//variables 
let dato1
let dato2
let dato3
let dato4
let dato5

//actividad 1
alert("1.numero verdadero o falso");
dato1 = prompt("ingrese el numero");
if (dato1 > 0) {
    alert("El número es positivo.");
} else if (dato1 < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

//actividad 2
alert("2.numero mayor")
dato1= prompt("ingrese el primer numero")
dato2= prompt("ingrese le segundo numero")
if (dato1 > dato2){
    alert(dato1 +" es mayor que " +dato2)
}else if(dato1 < dato2){
    alert(dato2 +" es mayor que " +dato1)
}else{
    alert("los dos son igueles");
}

//actividad 3
alert("3.numero mayor y menor");
dato1 = prompt("Ingrese el primer número:");
dato2 = prompt("Ingrese el segundo número:");
dato3 = prompt("Ingrese el tercer número:");
dato4 = dato1;
if (dato2 > dato4) {
    dato4 = dato2;
}if (dato3 > dato4) {
dato4 = dato3;
}dato5 = dato1;
if (dato2 <dato5) {
    dato5 = dato2;
}if (dato3 < dato5) {
    dato5 = dato3;
}
alert("El número mayor es: " + dato4 + " y el menor es: "+ dato5);

//actividad 4
alert("4.cambio grados fahrenheit a Centígrados");
dato1 =prompt("ingrese la cantidad de grados");
dato2= (dato1-32)/1.8
alert(dato1+"grados fahrenheit son " +dato2+ " grados centigrados")

//actividad 5
alert("5.calculadora basica");
dato1= prompt("Ingrese la operación a realizar (+, -, *, /):");
dato2= prompt("ingrese el primer numero");
dato3= prompt("ingreese el segundo numero");

switch (dato1) {
    case '+':
        dato4 = dato2 + dato3;
        break;
    case '-':
        dato4 = dato2 - dato3;
        break;
    case '*':
        dato4 = dato2 * dato3;
        break;
    case '/':
        if (dato3 !== 0) {
            dato4 = dato2/ dato3;
        } else {
            dato4 = " Error: división por cero";
        }
        break;
    default:
        dato4 = " Operación no válida";
}
alert("El resultado de la operación es: " + dato4);

//actividad 6
alert("6.postulante")
dato1 = prompt("Ingrese el nombre del postulante:");
dato2 = prompt("Ingrese la cantidad total de preguntas realizadas:");
dato3 = prompt("Ingrese la cantidad de preguntas respondidas correctamente:");
dato4 = (dato3 / dato2 )* 100;
dato4;
if (dato4 >= 90) {
    dato5 = "Nivel superior";
} else if (dato4 >= 75 && dato4  < 90) {
    dato5 = "Nivel medio";
} else if (dato4  >= 50 && dato4  < 75) {
    dato5 = "Nivel regular";
} else {
    dato5 = "Fuera de nivel";
}
alert("El postulante " + dato1 + " tiene un porcentaje de respuestas correctas del " + dato4.toFixed(2) + "%, por lo que su nivel es: " + dato5);