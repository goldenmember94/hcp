// Область видимости
// Что выведет консоль?

let foo = 1;
let bar = 2;
const testFunc = () => {
  foo = 10;
  let bar = 3;
  console.log(foo, bar); // ???
}
testFunc();
console.log(foo, bar); // ???


// Приведение типов
// Что выведет консоль?

console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(null == undefined); // false
console.log({foo: 1} === {foo: 1}) // false

console.log(2 + '2' - 2) // 2


// Асинхронность
// В каком порядке выведутся сообщения в консоль?

console.log('1');
setTimeout(function() {
  console.log('2')
}, 0);
Promise.resolve().then( () => console.log('3') );
console.log('4');

// Напишите тут порядок чисел
1 4 3 2


// Ссылочные типы
// Что выведет консоль?

let foo = {};
let bar;

foo.x = 1;

bar = foo;
bar.x = 2;

console.log(foo.x); //1
console.log(bar.x); //2

