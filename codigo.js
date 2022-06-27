let repetir = true


while(repetir){
    let numero = parseInt( prompt("Cuanto es 7+7?"))
    
    if (numero == 14){
        repetir = false
        alert("Correcto")
    }
    else if(isNaN(numero)){
        alert("El resultado es un numero :)")
    }
    else{
        alert("incorrecto")
    }

}