// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let q = 'hello world';
console.log(q.length);
let w = 'lorem ipsum';
console.log(w.length);
let e = 'javascript is cool';
console.log(e.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = ('hello world');
upperCase = a.toUpperCase();
console.log(upperCase);
let s = ('lorem ipsum');
upperCase = s.toUpperCase();
console.log(upperCase);
let d = ('javascript is cool');
upperCase = d.toUpperCase();
console.log(upperCase);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let y = ('HELLO WORLD');
lowerCase = y.toLowerCase();
console.log(lowerCase);
let t = ('LOREM IPSUM');
lowerCase = t.toLowerCase();
console.log(lowerCase);
let r = ('JAVASCRIPT IS COOL');
lowerCase = r.toLowerCase();
console.log(lowerCase);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str1 = ' dirty string   ';
let p1 = str1.replace(`   `, `.`);
console.log(p1)
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let arr = 'Ревуть воли як ясла повні'.split(` `);
console.log(arr);

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let map = numbers.map(value => {
    return numbers.length;
});
console.log(numbers);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
let sort = nums.sort((a, b,) => a - b);
console.log(sort);
let sort1 = nums.sort((a, b,) => b - a);
console.log(sort1);
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort2 = coursesAndDurationArray.sort((a, b,) => {
    return b.monthDuration - a.monthDuration;
});
console.log(sort2);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let sort3 = coursesAndDurationArray.sort((a,b) =>{
//     return a > 5
// })
// console.log(sort3);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let users = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let MapedUser = users.map(function (value, index) {
    let newUser = {
        name: value.name,
        title: value.title,
        monthDuration: value.monthDuration,
        id: index + 1
    }
    return newUser;
});
console.log(MapedUser);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let kard =
    [
        {cardSuit: 'піка', value: '6', color: 'black'},
        {cardSuit: 'spade', value: '7', color: 'black'},
        {cardSuit: 'spade', value: '8', color: 'black'},
        {cardSuit: 'spade', value: '9', color: 'black'},
        {cardSuit: 'spade', value: '10', color: 'black'},
        {cardSuit: 'spade', value: 'jack', color: 'black'},
        {cardSuit: 'spade', value: 'queen', color: 'black'},
        {cardSuit: 'spade', value: 'king', color: 'black'},
        {cardSuit: 'spade', value: 'ace', color: 'black'},
        {cardSuit: 'хреста', value: '6', color: 'black'},
        {cardSuit: 'clubs', value: '7', color: 'black'},
        {cardSuit: 'clubs', value: '8', color: 'black'},
        {cardSuit: 'clubs', value: '9', color: 'black'},
        {cardSuit: 'clubs', value: '10', color: 'black'},
        {cardSuit: 'clubs', value: 'jack', color: 'black'},
        {cardSuit: 'clubs', value: 'queen', color: 'black'},
        {cardSuit: 'clubs', value: 'king', color: 'black'},
        {cardSuit: 'clubs', value: 'ace', color: 'black'},
        {cardSuit: 'буба', value: '6', color: 'red'},
        {cardSuit: 'diamonds', value: '7', color: 'red'},
        {cardSuit: 'diamonds', value: '8', color: 'red'},
        {cardSuit: 'diamonds', value: '9', color: 'red'},
        {cardSuit: 'diamonds', value: '10', color: 'red'},
        {cardSuit: 'diamonds', value: 'jack', color: 'red'},
        {cardSuit: 'diamonds', value: 'queen', color: 'red'},
        {cardSuit: 'diamonds', value: 'king', color: 'red'},
        {cardSuit: 'diamonds', value: 'ace', color: 'red'},
        {cardSuit: 'черва', value: '6', color: 'red'},
        {cardSuit: 'hearts', value: '7', color: 'red'},
        {cardSuit: 'hearts', value: '8', color: 'red'},
        {cardSuit: 'hearts', value: '9', color: 'red'},
        {cardSuit: 'hearts', value: '10', color: 'red'},
        {cardSuit: 'hearts', value: 'jack', color: 'red'},
        {cardSuit: 'hearts', value: 'queen', color: 'red'},
        {cardSuit: 'hearts', value: 'king', color: 'red'},
        {cardSuit: 'hearts', value: 'ace', color: 'red'},

    ];
// - знайти піковий туз
console.log(kard.at(8));
// - всі шістки
let find = kard.filter(value => value.value === `6`);
console.log(find);
// - всі червоні карти
let find1 = kard.filter(value => value.color === `red`);
console.log(find1);
// - всі буби
let find2 = kard.filter(value => value.cardSuit === 'diamonds');
console.log(find2);
// - всі трефи від 9 та більше


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// --написати пошук всіх об'єктів, в який в modules є docker