'use strict'
// 1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0

for (let i in salaries) {
    sum += Number(salaries[i])
}

alert(`Сумма зарплпат = ${sum}`)

// 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(x) {
    for (let i in x) {
        if ( typeof(x[i]) === 'number' ) {
            x[i] *= 2
        }
    }
  }
  multiplyNumeric(menu);
  alert('Вывод объекта в консоли')
  
console.log(menu)
  
// 3

let calculator = {
    a: 0,
    b: 0,

    read() {
        this.a = +prompt("Введите первое число:", 0);
        this.b = +prompt("Введите второе число:", 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

4
let cost = '$120'


function extractCurrencyValue(str) {
    return +cost.slice(1);
}

alert(extractCurrencyValue(cost));

// 5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 26 };

let users = [vasya, petya, masha]

let names = users.map(user => user.name);
console.log(names);

// 6

function getAverageAge(user) {
    if(user.length === 0) {
        return 0;
    }

    let sage = user.map(use => use.age);
    let otv = 0;
    let chast = 0;
    for (let i in sage) {
        otv += sage[i];
        chast++;
    } 
    otv = otv/chast;

    alert("Средний возраст = " + otv);
}

getAverageAge(users);