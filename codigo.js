let datos, moneda, valorMoneda
let repetir = "no"

const calculo = (datos, valorMoneda) => datos / valorMoneda;

do {
    alert("Bienvenido a mi convertidor de pesos argentinos a euro/dolar")


    datos = parseFloat(prompt("Ingrese el monto en pesos a convertir"));
    if (isNaN(datos)) {
        alert("Numeros por favor :)")
    }


    moneda = (prompt(`A que moneda lo quiere convertir? "euro" o "dolar"`)).toLowerCase();
    if ((moneda != "dolar") && (moneda != "euro")) {
        alert(`Tiene que escribir "euro" o "dolar" :)`)
    }


    switch (moneda) {
        case "dolar":
            valorMoneda = 238
            break
        case "euro":
            valorMoneda = 231
            break
        default:
            alert("Algo salio mal :(")
    }


    if (isNaN(calculo(datos, valorMoneda))) {
        alert("Algo salio mal :(")
    }

    else if ((moneda != "dolar") && (moneda != "euro")) {
        alert("Algo salio mal :(")
    }

    else {
        alert (`${datos} pesos equivalen a ${calculo(datos, valorMoneda)} ${(moneda)}s`)
    }

    repetir = prompt("Quiere volver a convertir? escriba si o no").toLowerCase()
} while (repetir == "si");