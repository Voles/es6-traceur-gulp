/**
 * Strings
 */
var text = '你好吗？';

console.log(text);

var helloWorld = 'Hello, World!';
console.log(helloWorld.startsWith('H')); // returns true

var a = 'Jo';
console.log(a.endsWith('O')); // returns false (case sensitive)

var gangstaIpsum = 'Lorizzle ipsum dolizzle sizzle dawg, we gonna chung owned elizzle.';
console.log(gangstaIpsum.includes('ipsum'));

// repeat
var theWord = 'secret';
console.log(theWord.repeat(2)); // returns `secretsecret`

// the variable value is declared using let instead of var, which means the declaration is not hoisted to the top
for (let i = 3;i>=1;i--) {
  console.log('Loop ' + i);
}

// constants are also block-level declarations,
const theAnswer = 42;
console.log(theAnswer);

/**
 * Functions
 */
function doGreeting(greeting = 'Hoi') {
  console.log(greeting);
}

doGreeting();
doGreeting('Hallo');

// spread
let numbers = [1, 2, 3];
console.log(Math.max(...numbers));

// arrow functions
var sayIt = it => console.log(it);
sayIt('Yo');

var sayMultipleThings = (so, many, ...things) => console.log(so, many, ...things);
var alphabet = ['c', 'd', 'e'];
sayMultipleThings('a', 'b', ...alphabet);

// generators
function *alphabetGenerator() {
  yield 'A';
  yield 'B';
  yield 'C';
}

var alphabet = alphabetGenerator();

console.log(alphabet.next().value);
console.log(alphabet.next().value);
console.log(alphabet.next().value);
console.log(alphabet.next().value);

// multiline comments
let comment = `this
is
a
comment`;
console.log(comment);

// string substitutions (usage of backticks required)
let hi = 'hi';
let dummyText = `I just wanted to say ${hi}`;
console.log(dummyText);

var saySum = (a, b) =>
              `sum of ${a} and ${b} is ${a + b}`

console.log(saySum(2, 3));
