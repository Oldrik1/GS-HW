// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Батьки дозволили?');
// }

// checkAge(19);




// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// function fun(a, b) {
//     if (a < b) {
//         console.log(a);
//     } else if (b < a) {
//         console.log(b);
//     }
// }

// fun(1, 10);
// console.log(fun);



// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// let ask = (question, yes, no) => {
//     if (confirm(question)) {
//         yes()
//     } else {
//         no();
//     }
// }
//     ask("Ви згодні?",
//     function() { alert("Ви погодились."); },
//     function() { alert("Ви скасували виконання."); }
//     );

