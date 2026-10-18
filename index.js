//RESUELVE LOS EJERCICIOS AQUI

//EJERCICIO 1
const numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados (array) {
  return array.map(num => num ** 2);
}
console.log(elevados(numbers));
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

//EJERCICIO 2
[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
]
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const origen = {
  Pizza: 'Italia',
  Ramen: 'Japón',
  Paella: 'Valencia'
};

const frases = foodList.map(comida => {
  if (comida === 'Entrecot') {
    return `Aunque no como carne, el ${comida} es sabroso`;
  }
  return `Como soy de ${origen[comida]}, amo comer ${comida}`;
});

console.log(frases);
// [
//   'Como soy de Italia, amo comer Pizza',
//   'Como soy de Japón, amo comer Ramen',
//   'Como soy de Valencia, amo comer Paella',
//   'Aunque no como carne, el Entrecot es sabroso'
// ]

//EJERCICIO 3
const staff = [
  {
    name: 'Javier',
    role: 'periodista',
    hobbies: ['leer', 'conducir']
  },
  {
    name: 'Lluvia',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'macarrones']
  }
];
 const frasesStaff = staff.map(persona =>
  `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(' y ')}`
);

console.log(frasesStaff);
// [
//   'Javier es periodista y le gusta leer y conducir',
//   'Lluvia es becaria y le gusta nadar y bailar',
//   'Luis es programador y le gusta dormir y comprar',
//   'Carlos es secretario y le gusta futbol y macarrones'
// ]

//EJERCICIO 4//
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(n => n % 2 !== 0);

console.log(result4); // [1, 3, 5, 7, 9]

//EJERCICIO 5//
const foodList2 = [
  { name: 'Tempeh', isVeggie: true },
  { name: 'Cheesbacon burguer', isVeggie: false },
  { name: 'Tofu burguer', isVeggie: true },
  { name: 'Entrecot', isVeggie: false }
];

const result5 = foodList2
  .filter(plato => plato.isVeggie)
  .map(plato => {
    const rico = plato.name.includes('burguer') ? 'rica' : 'rico';
    return `Que ${rico} ${plato.name} me voy a comer!`;
  });

console.log(result5);
// ['Que rico Tempeh me voy a comer!', 'Que rica Tofu burguer me voy a comer!']

//EJERCICIO 6//
const inventory = [
  { name: 'Mobile phone', price: 199 },
  { name: 'TV Samsung', price: 459 },
  { name: 'Viaje a Cancún', price: 600 },
  { name: 'Mascarilla', price: 1 }
];

const result6 = inventory
  .filter(producto => producto.price > 300)
  .map(producto => producto.name);

console.log(result6); // ['TV Samsung', 'Viaje a Cancún']

//EJERCICIO 7//
const numeros = [39, 2, 4, 25, 62];

const result7 = numeros.reduce((total, n) => total * n, 1);

console.log(result7); // 483600

//EJERCICIO 8//
const sentenceElements = [
  'Me',
  'llamo',
  'Javier',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const result8 = sentenceElements.reduce((frase, palabra) => frase + ' ' + palabra);

console.log(result8); // 'Me llamo Javier y quiero sentir la fuerza con javascript'

//EJERCICIO 9//

const books = [
  { name: ' JS for dummies', author: 'Emily A. Vander Veer', price: 20, category: 'code' },
  { name: 'Don Quijote de la Mancha', author: 'Cervantes', price: 14, category: 'novel' },
  { name: 'Juego de tronos', author: 'George R. Martin', price: 32, category: 'Fantasy' },
  { name: 'javascript the good parts', author: 'Douglas Crockford', price: 40, category: 'code' }
];

const result9 = books
  .filter(libro => libro.category === 'code')
  .reduce((total, libro) => total + libro.price, 0);

console.log(result9); // 60