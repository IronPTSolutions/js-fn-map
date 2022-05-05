console.log('file loaded');

function realMap(array, action) {
  const transformed = [];
  for (let element of array) {
    const transformedValue = action(element)
    transformed.push(transformedValue);
  }
  return transformed;
}

// ['Carlos', 'Lara'];
function getNames(users) {
  const names = [];
  for (let user of users) {
    names.push(user.name);
  }
  return names;
}

function getAges(users) {
  const ages = [];
  for (let user of users) {
    ages.push(user.age);
  }
  return ages;
}

function buildEmails(users) {
  const emails = [];
  for (let user of users) {
    emails.push(`${user.name.toLowerCase()}.${user.lastName.toLocaleLowerCase()}@ironhack.com`)
  }
  return emails;
}


// [1, 2, 3, 4] => 10
function sum(numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

const users = [
  {
    name: 'Carlos',
    lastName: 'Prado',
    age: 31,
    isDeveloper: true
  },
  {
    name: 'Lara',
    lastName: 'Alegre',
    age: 31,
    isDeveloper: false
  },
  {
    name: 'Julio',
    lastName: 'Garcia',
    age: 28,
    isDeveloper: true
  }
];

const names = getNames(users);
const namesWithMap = users.map(function (user) {
  return user.name;
});

const emails = users.map(function (user) {
  return `${user.name.toLowerCase()}.${user.lastName.toLocaleLowerCase()}@ironhack.com`;
});

const usersWithEmails = users.map(function (user) {
  user.email = `${user.name.toLowerCase()}.${user.lastName.toLocaleLowerCase()}@ironhack.com`;
  return user;
});

usersWithEmails.push({ name: 'Holi' });

console.log(users);
console.log(names);
console.log(namesWithMap);

console.log(users);

console.log(emails);
console.log(users);
console.log(usersWithEmails);

