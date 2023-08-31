const btnExerciseOne = document.getElementById("btnExercise1");
const btnExerciseTwo = document.getElementById("btnExercise2");
const btnExerciseThree = document.getElementById("btnExercise3");
const btnExerciseFour = document.getElementById("btnExercise4");
const btnExerciseFive = document.getElementById("btnExercise5");
const btnExerciseSix = document.getElementById("btnExercise6");
const btnExerciseSeven = document.getElementById("btnExercise7");
const btnExerciseEight = document.getElementById("btnExercise8");

/**
 * 1:
 * Crea un programa que imprima (log o alert) todos los elementos de un array
 * dado usando for normal. Array de ejemplo: ['manzana', 'banana', 'cereza', 'dátil']
 */

function ejercicioUno() {
  const frutas = ["manzana", "banana", "cereza", "dátil"];

  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
}

/**
 * 2:
 * Crea un programa que imprima (log o alert) todos los elementos de un array dado usando
 * forEach. Array de ejemplo: ['manzana', 'banana', 'cereza', 'dátil']
 */

function ejercicioDos() {
  const frutas = ["manzana", "banana", "cereza", "dátil"];

  frutas.forEach(function (fruta) {
    console.log(fruta);
  });
}

/**
 * 3:
 * Crea un menu que se repite si ingresa la opcion equivocada hasta que ingrese la opcion
 * correcta - reutilizar ejercicio de operaciones matematicas (exercisesLevel3.js,
 * function exerciseTwo())
 */

function ejercicioTres() {
  let operation = 0;

  while (
    operation !== 1 &&
    operation !== 2 &&
    operation !== 3 &&
    operation !== 4
  ) {
    operation = parseInt(
      prompt(
        "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para Dividir."
      )
    );
    if (isNaN(operation) || operation > 4 || operation < 1) {
      alert("Opcion invalida, favor ingresar entre 1 y 4");
    }
  }
  const num1 = parseFloat(prompt("Ingrese numero 1"));
  const num2 = parseFloat(prompt("Ingrese numero 2"));
  let result = 0;
  if (isNaN(num1) || isNaN(num2)) {
    return alert("Favor ingresar solo numeros");
  }

  switch (operation) {
    case 1:
      result = num1 + num2;
      alert("El resultado de la suma es: " + result);
      break;
    case 2:
      result = num1 - num2;
      alert(result);
      break;
    case 3:
      result = num1 * num2;
      alert("El resultado de la multiplicación es: " + result);
      break;
    case 4:
      if (num2 === 0) {
        alert("No es posible dividir por cero");
      } else {
        result = num1 / num2;
        alert("El resultado de la división es: " + result);
      }
      break;
  }
}

/**
 * 4:
 * Crea un programa que encuentre el número más grande en un array dado usando for
 * normal y lo imprima en un alert o log. Array de ejemplo: [45, 23, 67, 89, 12, 56]
 */

function ejercicioCuatro() {
  const numeros = [45, 23, 67, 89, 12, 56];
  let numeroMasGrande = 0;

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasGrande) {
      numeroMasGrande = numeros[i];
    }
  }
  alert("El número más grande es: " + numeroMasGrande);
}
/*
Challenge 5: Crea un programa que sume todos los elementos de un array de números usando forEach y lo simprima en un alert o log. Array de ejemplo: [2, 4, 6, 8, 10] */

function ejercicioCinco() {
  const numeros = [2, 4, 6, 8, 10];
  let suma = 0;

  numeros.forEach((numero) => {
    suma += numero;
  });

  alert(`La suma de los elementos es: ${suma}`);
}

/**
 * 6:
 * Crea un programa que multiplique cada elemento de un array por 2 y devuelva un }
 * nuevo array con los resultados usando for normal. Array de ejemplo: [3, 7, 2, 8]
 */

function ejercicioSeis() {
  alert("El array que vamos a multiplecar cada elemento por 2 es [3, 7, 2, 8]");

  let array = [3, 7, 2, 8];
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
  }
  alert("El array queda asi " + newArray);
}

/**
 * 7:
 * Crea un programa que encuentre la suma de los elementos pares en un array
 * usando forEach. Array de ejemplo: [1, 4, 7, 3, 10, 12]
 */

function ejercicioSiete() {
  const arrayEjemplo = [1, 4, 7, 3, 10, 12];
  let sumaPares = 0;

  arrayEjemplo.forEach((elemento) => {
    if (elemento % 2 === 0) {
      sumaPares += elemento;
    }
  });

  alert("La suma de los elementos pares es: " + sumaPares);
}

/**
 * 8:
 * Crea un programa que encuentre el primer número mayor que 50 en un array de números
 * usando un bucle while. Array de ejemplo: [30, 45, 60, 72, 48, 10]
 */

function ejercicioOcho() {
  let array = [30, 45, 60, 72, 48, 10];
  let num = 0;

  while (num <= 50) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 50) {
        num = array[i];
        console.log("El primer número mayor que 50 es:", num);
        break; // Salimos del bucle cuando encontramos el primer número mayor que 50
      }
    }
  }
}

btnExerciseOne.onclick = function () {
  ejercicioUno();
};

btnExerciseTwo.onclick = function () {
  ejercicioDos();
};

btnExerciseThree.onclick = function () {
  ejercicioTres();
};

btnExerciseFour.onclick = function () {
  ejercicioCuatro();
};

btnExerciseFive.onclick = function () {
  ejercicioCinco();
};

btnExerciseSix.onclick = function () {
  ejercicioSeis();
};

btnExerciseSeven.onclick = function () {
  ejercicioSiete();
};

btnExerciseEight.onclick = function () {
  ejercicioOcho();
};
