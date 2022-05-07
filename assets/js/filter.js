
function getEvens(numbers) {
  const evens = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      evens.push(number);
    }
  }
  return evens;
}

function filterByName(users, slug) {
  const filtered = [];
  for (let user of users) {
    if (user.name.startsWith(slug)) {
      filtered.push(user)
    }
  }
  return filtered;
}

const numbers = [1, 2, 3, 4];
console.log(getEvens(numbers));

const evens = numbers.filter((number) => number % 2 === 0)

const users = [
  { name: 'Carlos' },
  { name: 'Juli' },
  { name: 'Carmen' }
]
console.log(filterByName(users, 'Car'));

const slag = 'Car';
const filtered = users.filter((user) => {
  return user.name.startsWith(slag) && !user.name.endsWith('s')
})
