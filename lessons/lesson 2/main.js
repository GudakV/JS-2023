// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let names = ['vasya', 'oleh', 'ivan', 'andrii', 'olya', 'ostap', 'anton', 'vitalik', 'yana', 'tania'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
console.log(names[6]);
console.log(names[7]);
console.log(names[8]);
console.log(names[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let obj = {
    title: 10,
    pageCount: 8,
    genre: 'horror'
};
console.log(obj);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let obj1 = {
    title: 10,
    pageCount: 8,
    genre: 'horror',
    authors: [
        {name: 'ivan', age: 23},
        {name: 'igor', age: 23},
        {name: 'anya', age: 23}
    ],
};
console.log(obj1);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'aaa', username: 'qqq', password: '111'},
    {name: 'ccc', username: 'www', password: '222'},
    {name: 'xxx', username: 'eee', password: '333'},
    {name: 'bbb', username: 'wwe', password: '444'},
    {name: 'nnn', username: 'yyy', password: '555'},
    {name: 'mmm', username: 'uuu', password: '666'},
    {name: ',,,', username: 'iii', password: '777'},
    {name: 'hhh', username: 'ooo', password: '888'},
    {name: 'ggg', username: 'ppp', password: '999'},
    {name: 'fff', username: 'nnn', password: '000'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let number = +prompt('number');
if (number === 0) {
    console.log('true')
} else {
    console.log('false')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('select time');
if (time >= 0 && time <= 14) {
    console.log('first quarter');
} else if (time >= 14 && time <= 29) {
    console.log('second quarter');
} else if (time >= 29 && time <= 44) {
    console.log('third quarter');
} else if (time >= 44 && time <= 59) {
    console.log('four quarter');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('select dekad');
if (day >= 0 && day <= 10) {
    console.log('first dekad');
} else if (day >= 10 && day <= 20) {
    console.log('second dekad');
} else if (day >= 20 && day <= 31) {
    console.log('third dekad');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let days = prompt('days');
switch (days) {
    case 'monday':
        console.log('work');
        break;
    case 'tuesday':
        console.log('sleep');
        break;
    case 'wednesday':
        console.log('gym');
        break;
    case 'thursday':
        console.log('eat');
        break;
    case 'friday':
        console.log('drink');
        break;
    case 'saturday':
        console.log('party');
        break;
    case 'sunday':
        console.log('vodka');
        break;
        default ('its ok')
    }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = prompt('Перше число');
let b = parseInt(prompt('Друге число'));
if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else if (a === b) {
    console.log('funny,but no');
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)



//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = prompt('Тривалість навчання')[
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

