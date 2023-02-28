// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function  User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};

let arr = []
let user1 =  new User(`1`,`vasya`,`anto`,`fseg`,`380681438755`);
arr.push(user1);
let user2 = new User (`2`,`faaf`,`anto`,`fseg`,`380681438755`);
arr.push(user2);
let user3 = new User (`3`,`fsafsd`,`anto`,`fseg`,`380681438755`);
arr.push(user3);
let user4 = new User (`4`,`fasdasfd`,`anto`,`fseg`,`380681438755`);
arr.push(user4);
let user5 = new User (`5`,`eee`,`anto`,`fseg`,`380681438755`);
arr.push(user5);
let user6 = new User (`6`,`ww`,`anto`,`fseg`,`380681438755`);
arr.push(user6);
let user7 = new User (`7`,`ggg`,`anto`,`fseg`,`380681438755`);
arr.push(user7);
let user8 = new User (`8`,`  v`,`anto`,`fseg`,`380681438755`);
arr.push(user8);
let user9 = new User (`9`,`ccc`,`anto`,`fseg`,`380681438755`);
arr.push(user9);
let user10 = new User (`10`,`zz`,`anto`,`fseg`,`380681438755`);
arr.push(user10);
console.log(arr);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// ЗМІГ ЗАЛИШИТИ ТІЛЬКИ НЕ ПАРНІ, на жаль
let filter = arr.filter((a) =>  { return a.id %2});
console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = arr.sort((a,b) => { return a.id - b.id});
console.log(sort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
constructor(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
 greeting(){
    let order = [`mandarun`, `ananas`,`abrukos`,`banan`]
     return order;
 }
};
let arr1 = []
let using = new Client (`1`,`vialik`,`antonik`,`email`,`phone`,``);
arr1.push(using);
console.log(arr1);
console.log(using.greeting())

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model,producer, years, speed, engine){
    this.model = model;
    this.producer = producer;
    this.years = years;
    this.speed = speed;
    this.engine = engine;
};
let car1 = new Car(`ford`,`USA`,2014,260,5.0);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function (){
    console.log(`їдемо зі швидкістю ${this.speed} на годину`);
}
console.log(car1);
let car2 = new Car(`Nissan`,`Asia`, 2012,340,3.8);
console.log(car2);
car2.drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
let car3 = new Car(`opel`,`odessa`, 2012,180,2.5);
console.log(`model - ${car3.model}`)
console.log(`producer - ${car3.producer}`)
console.log(`years - ${car3.years}`)
console.log(`speed - ${car3.speed}`)
console.log(`engine - ${car3.engine}`)
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (){
    console.log(`newSpeed - ${this.speed + 120 }`)
}
car3.increaseMaxSpeed();
// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.newValue = function (){
    console.log(`newValue - ${this.years + 10}`)
}
car3.newValue()
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// Car.prototype.addDriver = function (driver){
//     this.addDriver.push(driver);
//     console.log(`Driver`)
//     }
// car3.addDriver()

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Cars{
    constructor(model,producer, years, speed, engine) {

        this.model = model;
        this.producer = producer;
        this.years = years;
        this.speed = speed;
        this.engine = engine;

    }
};
let car4 = new Cars (`FORD`,`USA`,2017,280,6.0);{
    console.log(car4);
}

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// class classdrive {
//     constructor (speed) {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
// }
//     let car5 = new Cars(`Nissan`, `Asia`, 2012, 340, 3.8);
//     console.log(car5);
// console.log(classdrive(speed))

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку