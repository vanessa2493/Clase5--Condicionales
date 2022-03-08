//Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// function puedeVerPelicula(edad: Number, tieneAutorizacion: Boolean) {
//     if(edad >= 15 || tieneAutorizacion === true )
//         return true
//     else return false
// }

// const rta= puedeVerPelicula(12, false) // false
// const rta1=puedeVerPelicula(12, true)  // true
// const rta2=puedeVerPelicula(16, false) // true
// const rta3=puedeVerPelicula(18, true)  // true

// console.log(rta)
// console.log(rta1)
// console.log(rta2)
// console.log(rta3)

// Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

// const esParOImpar=(numero:number): string =>{
//     if(numero%2 === 0)
//         return "par"
//     else
//         return "impar"
// }

// console.log (esParOImpar(3) ) // 'impar'
// console.log( esParOImpar(10) ) // 'par'


// Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

// const avanzarSemaforo=(colorActual:String):String =>{
//     switch(colorActual){
//         case "verde":
//             return "amarillo"
            
//         case "amarillo":
//             return "rojo"
        
//         case "rojo":
//             return "verde"
//     }

// }

// console.log(avanzarSemaforo('verde'));
// console.log(avanzarSemaforo('amarillo'));
// console.log(avanzarSemaforo('rojo'));


//Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

// const obtenerDiasMes=(mes:string) : number =>{
//     switch(mes){
//         case "enero":
//             return 31;
//         case "febrero":
//             return 28;
//         case "marzo":
//             return 31;
//     }
// }

// console.log(obtenerDiasMes("enero"))


//Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

// const obtenerSensacion=(temperatura:number):string =>{
    
//     if (temperatura < 0)
//         return "¡Está helando!";
//     else if (temperatura >= 0 && temperatura < 15)
//         return "¡Hace frío!"
//     else if (temperatura >= 15 && temperatura < 25)
//         return "Está lindo"
//     else if (temperatura >= 25 && temperatura < 30)
//         return "Hace calor"
//     else ( temperatura >= 30)
//         return "¡Hace mucho calor!"

// }

// console.log(obtenerSensacion(33));

// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

const jugarPiedraPapelTijera=(a: string, b: string):string =>{
    if(a==="piedra" && b==="tijera" || a==="tijera" && b==="piedra")
        return "ganó piedra"

    else if(a==="tijera" && b==="papel" || a==="papel" && b==="tijera")
        return "ganó tijera"

    else if(a==="papel" && b==="piedra" || a==="piedra" && b==="papel")
        return "ganó papel"

    else return "¡Empate!"
}

    console.log(jugarPiedraPapelTijera('tijera', 'piedra'), // ¡Ganó piedra!,
     jugarPiedraPapelTijera('piedra', 'tijera'),  // ¡Ganó piedra!
     jugarPiedraPapelTijera('papel', 'piedra'),   // ¡Ganó papel!
     jugarPiedraPapelTijera('piedra', 'papel') ,  // ¡Ganó papel!
     jugarPiedraPapelTijera('papel', 'tijera') ,  // ¡Ganó tijera!
     jugarPiedraPapelTijera('tijera', 'papel') ,  // ¡Ganó tijera!
     jugarPiedraPapelTijera('piedra', 'piedra') , // ¡Empate!
     jugarPiedraPapelTijera('papel', 'papel') ,   // ¡Empate!
     jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!
    );
    



