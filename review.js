// Iteración 1 - Mix for e includes
// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las 
// categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías 
// no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función .includes()
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let cat = []

for (const item of movies) {
    for (let i = 0; i < item.categories.length; i++) {
        if (!cat.includes(item.categories[i]))
            cat.push(item.categories[i]);
    }    
}

console.log(cat);

// Iteración 2 - Mix fors
// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
const users = [
    {name: 'Manolo el del bombo',
     favoritesSounds: {
        waves: {format: 'mp3', volume: 50},
        rain: {format: 'ogg', volume: 60},
        firecamp: {format: 'mp3', volume: 80},
    }
    },
    {name: 'Mortadelo',
     favoritesSounds: {
        waves: {format: 'mp3', volume: 30},
        shower: {format: 'ogg', volume: 55},
        train: {format: 'mp3', volume: 60},
    }
    },
    {name: 'Super Lopez',
     favoritesSounds: {
        shower: {format: 'mp3', volume: 50},
        train: {format: 'ogg', volume: 60},
        firecamp: {format: 'mp3', volume: 80},
    }
    },
    {name: 'El culebra',
     favoritesSounds: {
        waves: {format: 'mp3', volume: 67},
        wind: {format: 'ogg', volume: 35},
        firecamp: {format: 'mp3', volume: 60},
        firecamp: {format: 'mp3', volume: 80},
    }
    },
]

let total = 0, i = 0;

for (const user of users) {
    for (const key in user.favoritesSounds) {
        total += user.favoritesSounds[key].volume;
        i++
    }
}

console.log("Media de volumen:", total / i); 

// Iteración 3 - Mix Fors
// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios 
// y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
/* let is = false;
let sounds = [];

for (const user of users) {
    sounds = [];
    for (const key in user.favoritesSounds) { // 
        for (const it of sounds) {
            if (sounds[it].s == key) {
                sounds[it].cont++;
                is = true
            }
        }

        if (!is) {
            sounds.push({s: key, cont: 1,});
        }
        is = false;
        // console.log(sounds[0].s == key);
    }
    console.log(sounds);
}
 */

// Iteración 4 - Métodos findArrayIndex
// Crea una función llamada `findArrayIndex` que reciba como parámetros un array de textos y un texto 
// y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.
function findArrayIndex(arrayTexts, text) {
    let pos = -1;

    for (const key in arrayTexts) {
        if (arrayTexts[key] == text) {
            pos = arrayTexts.indexOf(text);
        }
    }

    return pos;
}

let texts = ["En", "un", "lugar", "de", "la", "Mancha"];
let item = "Mancha";

console.log(findArrayIndex(texts, item));

// Iteración 5 - Función rollDice
// Crea una función llamada rollDice() que reciba como parámetro el número de caras que queramos 
// que tenga el dado que deberá simular el código dentro de la función. Como hemos dicho, que la 
// función use el parámetro para simular una tirada de dado y retornar el resultado. 
function rollDice(sides) {
    return (Math.trunc(Math.random() * sides + 1));
}

for (let i = 0; i < 10; i++)
    console.log("Tirada dado:", rollDice(6));

// Iteración 6 - Función swap
// Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. 
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
// Retorna el array resultante.
function swap(list, a, b) {
    let temp;

    temp = list[a];
    list[a] = b;
    list[b] = temp;

    return list;
}

let list = [0, 1, 2, 3, 4, 5];

console.log(swap(list, 0, 3));