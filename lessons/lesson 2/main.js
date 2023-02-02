// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let names = ['vasya', 'oleh', 'ivan', 'andrii', 'olya', 'ostap', 'anton', 'vitalik', 'yana', 'tania'];
console.log(names)
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
let obj2 = ['vasya', 'oleh', 'ivan', 'andrii', 'olya', 'yana', 'ostap', 'anton', 'vitalik', 'tanya']
    ['andrienko', 'andrienko', 'andrienko', 'andrienko', 'andrienko', 'andrienko', 'andrienko', 'andrienko', 'andrienko', 'andrienko']
    ['523451', '63456', '45', '12345', '4135', '335', '4135', '135', '34135', '244']];

console.log(obj2)
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".