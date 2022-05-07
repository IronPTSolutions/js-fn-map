
/*
function greet(name) {
  return `Hi ${name}`
}

const greet = function (name) {
  return `Hi ${name}`
}


const greet = (name) => {
  return `Hi ${name}`
}

const greet = (name) => `Hi ${name}`

greet('Carlos')
*/


// => ['hola', 'adios', 'carlos', 'patata']
// <= ['HOLA', 'ADIOS', 'CARLOS', 'PATATA']
/*
function toUpperedWords(words) {
  return words.map(function (word) {
    return word.toUpperCase();
  });
}
*/

function toUpperedWords(words) {
  return words.map((word) => word.toUpperCase());
}

const words = ['hola', 'adios', 'carlos', 'patata'];
const upperedWords = toUpperedWords(words);

