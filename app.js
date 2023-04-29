

function suma(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}


function calcularProm(ex1, ex2, ex3, ex4) {
    let promedio = (ex1 + ex2 + ex3 + ex4) / 4;
    return promedio;
}


function areaRectangulo(base, altura) {
    let area = base * altura;
    return area;
}

function areaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

function areaCircunferencia(radio) {
    let area = Math.PI * radio ** 2;
    return Math.round(area);
}

function conversionDolar(soles) {
    let dolares = soles / 3.8;
    return Math.round(dolares);

}

function sueldoSemanal(hrsTrabajadas, salarioPorHr) {
    let sueldoSem = hrsTrabajadas * salarioPorHr;
    return sueldoSem;
}

function edad(yearNac) {
    let yearAC = new Date().getFullYear();
    let edad = yearAC - yearNac;
    return edad;
}

let pers = [
    { nombre: "Piero", edad: 25 },
    { nombre: "Rodrigo", edad: 30 },
    { nombre: "Juan", edad: 20 }
];

let persMenorEdad = pers[0];

for (let i = 1; i < pers.length; i++) {
    if (pers[i].edad < persMenorEdad.edad) {
        persMenorEdad = pers[i];
    }
};

let PERSONAmenorDEedad = "La persona de menor edad es " + persMenorEdad.nombre + " con " + persMenorEdad.edad + " años.";

function calcularBono(antiguedad) {
    let bono = 0;
    if (antiguedad === 1) {
        bono = 100;
    } else if (antiguedad === 2) {
        bono = 200;
    } else if (antiguedad === 3) {
        bono = 300;
    } else if (antiguedad === 4) {
        bono = 400;
    } else if (antiguedad === 5) {
        bono = 500;
    } else {
        bono = 1000;
    }
    return bono;
}


function calSal(salarioIni, incremento_x_AÑO) {
    let salarioActual = salarioIni;
    let salarioPorAño = [];

    for (let i = 1; i <= 6; i++) {
        salarioActual = salarioActual * (1 + incremento_x_AÑO);
        salarioPorAño.push(salarioActual.toFixed(2));
    }

    //console.log(`El salario del profesor después de 6 años es de $${salarioActual.toFixed(2)}.`);
    //console.log(`El salario del profesor en cada uno de los 6 años es: ${salarioPorAño.join(', ')}.`);

    return rpta = salarioActual.toFixed(2) + " y en cada uno de los 6 años es " + salarioPorAño.join(', ') + " dólares.";
}


// 15. Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones

function PuedeBotar(edad) {
    let BOTA = "NO BOTA";
    if (edad > 18) {
        BOTA = "BOTA";
    }

    return BOTA;

}

//let base = prompt("Ingresa el area del triangulo");
//let altura = prompt("Ingresa la altura");
//let area = calcularAreaRectangulo(base, altura);
//console.log("El área del rectángulo es: " + area);
//document.write(calcularProm);

var resultados = document.getElementById("resultados");

resultados.innerHTML = `
    <h2> Resultado 01 : La suma de  3 y 5 es ${suma(3, 5)} </h2>
    <h2> Resultado 02 : El promedio es ${calcularProm(14, 15, 20, 10)} </h2>
    <h2> Resultado 03 : El area de un rectangulo de base 15 cm y altura 20 cm es ${areaRectangulo(15, 20)} cm2 </h2>
    <h2> Resultado 04 : El area de un triangulo de base 14 cm y altura 21 cm es ${areaTriangulo(14, 21)} cm2 </h2>
    <h2> Resultado 05 : El area de una circunferencia con radio de 67 cm ${areaCircunferencia(67)} cm2 </h2>
    <h2> Resultado 06 : </h2>
    <h3>       Inicio </br>
                └─> Ingresar cantidad de metros requeridos</br>
                        └─> Convertir metros a pulgadas (pulgadas = metros / 0.0254)</br>
                                └─> Mostrar cantidad de pulgadas requeridas</br> </h3>
    <h2> Resultado 07 : Un trabajador tiene 30 hrs. trabajadas en la semana y su salario x hora es de 20 $ entonces su sueldo x semana es de $ ${sueldoSemanal(30, 20)}  </h2>                         
    <h2> Resultado 08 : Una empresa desea adquirir dolares y tiene 65 000 nuevos soles y el tipo de cambio es 3.8 entonces tendrian $ ${conversionDolar(65000)}</h2>
    <h2> Resultado 09 : Una persona que nacio en 1998 tiene ${edad(1998)} años aproximadamente.  </h2>
    <h2> Resultado 10 : ${PERSONAmenorDEedad} </h2> 
    <h2> Resultado 11 : Teniendo una antiguedad de 5 años el trabajador obtiene un bono de $ ${calcularBono(5)} . </h2>
    <h2> Resultado 12 : El salio al cabo de 6 años es de $ ${calSal(1500, 10)} </h2> 
    <h2> Resultado 13 : " EN CONSOLA " </h2>
    <h2> Resultado 15 : La persona con edad de 21 años ${PuedeBotar(21)}. </h2>

`;

//Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados

function leerNota(alumno, apro, repro) {

    if (alumno == 5) {

        console.log("Número de aprobados:", apro);
        console.log("Número de reprobados:", repro);

    } else {
        let calificacion = prompt("Ingrese la calificación del alumno " + (alumno + 1) + ":");

        if (calificacion >= 13) {
            apro++;
        } else {
            repro++;
        }

        leerNota(alumno + 1, apro, repro);
    }

}

leerNota(0, 0, 0);