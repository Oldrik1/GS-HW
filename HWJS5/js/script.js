// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentList = {
//     name: "name",
//     speciality: "speciality",
//     gpa: "gpa",
//     missedClasses: "missedClasses",
//         studentListInfo: function (students) {
//             console.log(`${this.name}`)
//             console.log(`${this.speciality}`)
//             console.log(`${this.gpa}`)
//             console.log(`${this.missedClasses}`)
//     }
// }


// const student1 = {
//     name: "Billy",
//     speciality: "Front-End Developer",
//     gpa: "25",
//     missedClasses: "13"
// }

// const student2 = {
//     name: "Kel",
//     speciality: "FullStack Developer",
//     gpa: "50",
//     missedClasses: "4"
// }

// const student3 = {
//     name: "Kel",
//     speciality: "Caster",
//     gpa: "10",
//     missedClasses: "40"
// }

// console.log(studentList.studentListInfo.call(student1));
// console.log(studentList.studentListInfo.apply(student2));
// console.log(studentList.studentListInfo.bind(student3)());



/////////////////////////////////////////////////////////////////////////

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const html_css = {
//     show(){
//         console.log(this.show);
//     }
// }

// const html = {
//     show: ["HTML — стандартизована мова розмітки документів для перегляду вебсторінок у браузері."]
// }

// const css = {
//     show: ["CSS — це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду. Самі ж сторінки написані мовами розмітки даних."]
// }

// document.querySelector("#html").addEventListener("click" ,html_css.show.bind(html));
// document.querySelector("#css").addEventListener("click", html_css.show.bind(css));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4


// const shop = {
//     name: "name",
//     cost: "cost",
//     weight:"weigh",
//     info: function (tov) {
//            console.log(`${this.name}`)
//            console.log(`${this.cost}`)
//            console.log(`${this.weight}`)
//        }
    
// }


// const banana = {
//     name: "banana",
//     cost: 30,
//     weight: 4.5
// }

// const cherry = {
//     name: "cherry",
//     cost: 58,
//     weight: 1.3
// } 

// const jrange = {
//     name: "jrange",
//     cost: 89,
//     weight: 3.4
// }

// console.log(shop.info.call(cherry));