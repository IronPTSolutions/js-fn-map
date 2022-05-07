
function sum(numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number
  }
  return result;
}

const numbers = [1, 2, 3];
console.log(sum(numbers));


const sumNumbers = numbers.reduce((result, number) => {
  return result + number;
}, 0)

// [1, 2, 3]
// result = 0
// number = 1
// return 0 + 1

// result = 1
// number = 2
// 1 + 2 

// result = 3
// number = 3
// 3 + 3

const words = ['dog', 'cat', 'dog', 'cat', 'fish'];
const wordCount = words.reduce((count, word) => {
  if (count[word] === undefined) {
    count[word] = 1;
  } else {
    count[word] += 1;
  }
  return count;
}, {});
console.log(wordCount);

// count = {}
// word = 'dog'
// no existe => la creo
// { dog: 1 }

// count = { dog: 1 }
// word = 'cat'
// no existe => la creo
// { dog: 1, cat: 1 }

// count = { dog: 1, cat: 1}
// word = 'dog'
// existe!!! => sumo
// { dog: 2, cat: 1 }

// count = { dog: 2, cat: 1}
// word = 'cat'
// existe!! => sumo
// { dog: 2, cat: 2 }

// count = { dog: 2, cat: 2 }
// word = 'fish'
// no existe!!! => la creo
// { dog: 2, cat: 2, fish: 1 }

// resultado final => { dog: 2, cat: 2, fish: 1 }