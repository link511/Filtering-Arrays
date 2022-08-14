/*
const users = [
  {
    firstName: 'Niky',
    lastName: 'Morgan',
    favoriteColor: 'Blue',
    favoriteAnimal: 'Jaguar'
  },
  {
    firstName: 'Tracy',
    lastName: 'Lum',
    favoriteColor: 'Yellow',
    favoriteAnimal: 'Penguin'
  },
  {
    firstName: 'Josh',
    lastName: 'Rowley',
    favoriteColor: 'Blue',
    favoriteAnimal: 'Penguin'
  },
  {
    firstName: 'Kate',
    lastName: 'Travers',
    favoriteColor: 'Red',
    favoriteAnimal: 'Jaguar'
  },
  {
    firstName: 'Avidor',
    lastName: 'Turkewitz',
    favoriteColor: 'Blue',
    favoriteAnimal: 'Penguin'
  },
  {
    firstName: 'Drew',
    lastName: 'Price',
    favoriteColor: 'Yellow',
    favoriteAnimal: 'Elephant'
  }
];

console.table(users);

//iterate over that collection and print out everyone's first name:

function firstNamePrinter(collection) {
  for (const user of collection) {
    console.log(user.firstName);
  }
}

console.log(
  firstNamePrinter(users)
);

//users whose favorite color is blue

function blueFilter(collection) {
  for (const user of collection) {
    if (user.favoriteColor === 'Blue') {
      console.log(user.firstName);
    }
  }
}

console.log(`${blueFilter(users)} like blue!`);

//filter our users based on whose favorite animal is a jaguar

function filter(collection, attribute, value) {
  for (const user of collection) {
    if (user[attribute] === value) {
      console.log(user.firstName);
    }
  }
}

let newFilter = filter(users, 'favoriteAnimal', 'Jaguar');
console.log(newFilter);

//filter by two attributes

function filter(collection, attribute1, value1, attribute2, value2) {
  for (const user of collection) {
    if (user[attribute1] === value1 && user[attribute2] === value2) {
      console.log(user.firstName);
    }
  }
}
let newFilter2 = filter(users, 'favoriteAnimal', 'Jaguar', 'favoriteColor', 'Blue');
console.log(`${newFilter2} like Jaguar and Blue.`);

*/

const users = [
  { firstName: 'Niky', lastName: 'Morgan', favoriteColor: 'Blue', favoriteAnimal: 'Jaguar' },
  { firstName: 'Tracy', lastName: 'Lum', favoriteColor: 'Yellow', favoriteAnimal: 'Penguin' },
  { firstName: 'Josh', lastName: 'Rowley', favoriteColor: 'Blue', favoriteAnimal: 'Penguin' },
  { firstName: 'Kate', lastName: 'Travers', favoriteColor: 'Red', favoriteAnimal: 'Jaguar' },
  { firstName: 'Avidor', lastName: 'Turkewitz', favoriteColor: 'Blue', favoriteAnimal: 'Penguin' },
  { firstName: 'Drew', lastName: 'Price', favoriteColor: 'Yellow', favoriteAnimal: 'Elephant' }
];

console.table(users);

function filter(collection, cb) {
  for (const user of collection) {
    if (cb(user)) {
      console.log(user.firstName);
    }
  }
}

console.log(filter(users, function(user) { return user.favoriteColor === 'Blue' && user.favoriteAnimal === 'Penguin'; }));

console.log(filter(users, function(user) { return user.favoriteColor === 'Yellow'; }));


const arr = [1, 2, 3, 4, 20, 30, 40];

const newArr = arr.filter(function(value) {
  return value < 10;
  //console.table("value:" + value, "index:" + index, "array" + array);
});

console.log(newArr);


const products = [
  {
    name: "Product A",
    quantity: 4
  },
  {
    name: "Product B",
    quantity: 57
  },
  {
    name: "Product C",
    quantity: 0
  },
  {
    name: "Product D",
    quantity: 7
  },
  {
    name: "Product D",
    quantity: 0
  },
]

console.table(products);

const newProducts = products.filter(function(products) {
  return products.quantity === 0;
});

console.table(newProducts);