/**Ejercicio 1 Banco 
var value=parseInt(prompt("Ingrese la cifra que desea depositar"));
while (isNaN(value)) {
    value=parseInt(prompt("Ingrese la cifra que desea depositar"));
}
var month=(value*2)/100;
var end=month*60;
var total=value+end;
console.log("Valor que usted ha depositado: ",value,);
console.log("Valor depositado mas el interes",total);
document.write("<p>Usted ha realizado un deposito de:   "+value+"<br></p>");
document.write("<p> Su saldo dentro de Cinco (5) años sera:    "+total+"</p>");
*/

/**Ejercicio 2 manzanas
var kilos=parseInt(prompt("¿Cuantos kilos de manzanas comprara?"));
while(isNaN(kilos)){
    kilos=parseInt(prompt("Ingrese un valor en numeros"));
}
var value=kilos*4200;
if(kilos<=2){
    console.log("Descuento de 0%");
    document.write("<p>Al llevarte "+kilos+" de manzanas, tu rebaja es del 0%</p><p>Valor: "+value+"</p><p>Con el descuento de: 0%</p><p>Usted debe pagar: "+value+"</p>");
}
else if(kilos>2 && kilos<=5){
    var reduction=(value*10)/100;
    var total=value-reduction;
    console.log("Descuento de 10%");
    document.write("<p>Al llevarte "+kilos+" kilos de manzanas, tu rebaja es del 10%</p><p>Valor: "+value+"</p><p>Con el descuento de: "+reduction+"</p><p>Usted debe pagar: "+total+"</p>");
}
else if(kilos>5 && kilos<=10){
    reduction=(value*15)/100;
    total=value-reduction;
    console.log("Descuento de 15%");
    document.write("<p>Al llevarte "+kilos+" kilos de manzanas, tu rebaja es del 15%</p><p>Valor: "+value+"</p><p>Con el descuento de: "+reduction+"</p><p>Usted debe pagar: "+total+"</p>");
}
else if(kilos>10){
    reduction=(value*15)/100;
    total=value-reduction;
    console.log("Descuento de 20%");
    document.write("<p>Al llevarte "+kilos+" kilos de manzanas, tu rebaja es del 20%</p><p>Valor: "+value+"</p><p>Con el descuento de: "+reduction+"</p><p>Usted debe pagar: "+total+"</p>");
}*/

/**Ejercicio 3 matematicas funcion
    var valuey=0;
    var suma=0;
    var add=0;
    var count=0;
    for (var x = 1; x <=10; x++) {

        valuey=x*x-(2*x);
        suma=suma+valuey;

    if(valuey%3==0){

        add=add+valuey;
        console.log(valuey+" Es multiplo de tres");
        document.write("<p>"+valuey+" Este numero es multiplo de 3</p>");
       
    }
    if(valuey%5==0 && valuey>=15 && valuey<=35){
        document.write("<p>"+valuey+" Este numero termina en 5</p>");
        count=count+valuey;
    }

    }

    document.write("<br><p>El resultado de ñla suma de los multiplos de el numero 3 es: "+add+"</p>");

    document.write("<br><p>La suma de todos los numeros de y es: "+suma+"</p>");

    document.write("<br><p>La suma de los numeros terminados en cinco es: "+count+"</p>");
    */ 


    
