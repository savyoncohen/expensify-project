//
// Object destructuring
//

// const person = {
//   name: 'Anderw',
//   age: 26,
//   location: {
//     city: 'tel aviv',
//     temp: 30
//   }
// };

// const {name: firstname = 'Anonymous', age } = person;

// console.log(`${name} is ${age}`);

// const {city, temp: temperture } = person.location;
// if (city && temperture) {
//   console.log(`it's ${temperture} in ${city}`);
// }

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'penguin'
  }
}

const { name: publisherName = 'Self published' } = book.publisher;
console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 s Juniper street', 'Israel', 'center', '5322506'];
const [,, state = 'New york'] = address;
console.log(`you are in ${state} ${state}.`)

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medim ${itemName} cost ${mediumPrice}`);