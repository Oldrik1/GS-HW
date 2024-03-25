// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout


// function printNumbers(from, to) {
//     console.log(from);
//     console.log(to);
    
    
// }
// const Interval = setInterval(printNumbers, 1000, 1, 2);



// function printNumbers(from, to) {
//     console.log(from);
//     console.log(to);
    
    
// }

// const timeOut = setTimeout(printNumbers, 1000, 3, 4);




// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
    
// } delay(3000).then(() => alert('виконалось через 3 секунди'));



