// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function S(a, b) {
    let result = a * b;
    return result;
}

let r1 = S(2, 5);
console.log(r1);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function R(pi, r) {
    let result = pi * r * r;
    return result;
}

let r2 = R(3.14, 3);
console.log(r2);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// Площа повної поверхні циліндра дорівнює:
//     S(повн.)=2S(осн.)+S(біч.)= 2πR2 + 2πRH
function s(H, R, Pi) {
    let result = 2 * Pi * (R * R) + 2 * Pi * (R * H);
    return result;
}

let r3 = s(5, 3, 3.14);
console.log(r3);

// - створити функцію яка приймає масив та виводить кожен його елемент
function userArray(user) {
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
userArray(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function page() {
    let par = `<div> 
<h2>параграф
<p>текст через аргумент</p>
</h2>
</div>`
    document.write(par);
}

page();

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function foo1(ul, li) {
    let text = `
<ul>${ul}
<li>${li}</li>
<li>${li}</li>
<li>${li}</li>
</ul>`
    document.write(text);
}

foo1(`wazauap`, `I am`);

// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function foo(text, column){
    document.write(`<ul>`)
    for (let i = 0; i < 6; i++) {
        const textElement = text[i];
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
foo(`hi`,6);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arr= [56,43,32,`niki`,`antonio buntan`,true, false];
function prum(element){
    document.write(`<ul>`);
    for (let i = 0; i < 1; i++) {
        const listElement = element[i];
        document.write(`<li>${element}</li>`);
    }
}
prum(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const peaples =[
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}];

// - створити функцію яка повертає найменьше число з масиву



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function calculator(num1, num2, num3) {
    return num1 + num2 + num3;
}
let newVar = [calculator(1,2,10)];
console.log(newVar);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap()

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250  (((IF)))
