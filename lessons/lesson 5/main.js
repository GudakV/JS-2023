
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calculator =(a, b) => a * b;
console.log(calculator(5, 3));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let Radius = (pi, r) => pi * r * r;
console.log(Radius(3,5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// Площа повної поверхні циліндра дорівнює:
//     S(повн.)=2S(осн.)+S(біч.)= 2πR2 + 2πRH
let S = (H, R, Pi) => (2 * Pi * (R * R) + 2 * Pi * (R * H));
console.log(S(4,2,7));

// - створити функцію яка приймає масив та виводить кожен його елемент
let named = function userArray(user) {
    for (const item of user) {
        console.log(item);
    }
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}];
console.log(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргументаг
const txt = text => {
    document.write(`<p>${text}</p>`);
}
document.write(txt(`hello`));
//ЦІКАВО ЧОМУ НАПИСАНО undefined НА СТОРІНЦІ?

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let bed = function foo1 (ul,li) {}
    document.write(`<ul>`);
    {
        let text = `
    <li>${`hello`}</li>
    <li>${`yep`}</li>
    <li>${`i do`}</li>`
        document.write(text);
    }
    document.write(`</ul>`);
    bed(`ul`, `li`);

// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let bed2 = function foo(text, column) {
    document.write(`<ul>`)
    for (let i = 0; i < column; i++) {
        const textElement = text[i];
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

bed2(`hi`, 6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arr = [56, 43, 32, `niki`, `antonio buntan`, true, false];

let Funk = function prum(element) {
    document.write(`<ul>`);
    for (let i = 0; i < 1; i++) {
        const listElement = element[i];
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
}
    Funk(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let = function (id,name,age) =>

//    function (objects) {
//     for (const item of objects) {
//         document.write(`<div>${item.id}${item.name}${item.age}</div>`);
//     }
// }

// function fooBlockCreator(objects) {
//     for (const item of objects) {
//         document.write(`<div>${item.id}${item.name}${item.age}</div>`);
//     }
// }

// - створити функцію яка повертає найменьше число з масиву
// function min(numbers) {
//     let minimum = numbers[0];
//     for (const number of numbers) {
//         if (minimum > number) {
//             minimum = number
//         }
//     }
//     return minimum
// }
//
// min([11], [22], [33]);


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(numbers) {
//     let basket = 0;
//     for (const number of numbers) {
//         basket += number;
//     }
//     return basket;
// }

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//     let v1 = arr[index1];
//     let v2 = arr[index2];
//     arr[index1] = v2;
//     arr[index2] = v1;
// }
//
// swap([11, 22, 33, 44, 55]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250  (((IF)))
// function exchange(uah, currencies, exitCurrency) {
//     for (const item in currencies) {
//         if (item.currency === exitCurrency) {
//             return uah / item.value;
//         }
//
//     }
// }
//
// exchange(10000,
//     [
//         {currency: 'USD', value: 40},
//         {currency: 'EUR', value: 42}
//     ],
//     'USD'
// )
//


