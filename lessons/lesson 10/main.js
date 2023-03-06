// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку
// зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.forms.f1;

form.onsubmit = function (e) {
    e.preventDefault();
    const wrapper = document.createElement(`div`);
    const name = document.createElement(`div`);
    const surname = document.createElement(`div`);
    const age = document.createElement(`div`);

    name.innerText = `Name: ${this.name.value}`;
    surname.innerText = `Surname: ${this.surname.value}`;
    age.innerText = `Age: ${this.age.value}`;

    wrapper.append(name, surname, age);
    document.body.appendChild(wrapper);
}
// ==========================
// є сторінка, на якій є блок,в якому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let target = document.querySelector(`.target`);
target.onclick = function (){
    console.log(`click +1`);
};

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація
// про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// =========================

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
// const forms = document.forms.f2;
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     const list = document.createElement(`div`);
//     list.innerText = `user: ${this.list.value}`;
//
//     document.body.appendChild(list);
// }
//
// let arr = [];
// for (let i = 1; i < 101; i++) {
//     arr.push({index: `${i}`, name:`user ${i}`});
// }
// let form1 = document.forms[0];
// form.onsubmit = function (eo){
//     eo.preventDefault();
//     console.log(form.username.value);
// }
// const forma = document.forms.f2;
//
// forma.onsubmit = function (e) {
//     e.preventDefault();
//     const wrapper = document.createElement(`div`);
//     const arr = document.createElement(`div`);
//
//     arr.innerText = `user: ${this.arr.value}`;
//
//     wrapper.append(arr);
//     document.body.appendChild(wrapper);
// }

//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)