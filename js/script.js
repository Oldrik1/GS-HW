// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// let btn = document.getElementById("btn");

// let divRemove = document.getElementById("text")


// btn.addEventListener ('click' , () => {
//     divRemove.style.display = "none";
// }
// )


// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// let btn = document.getElementById("btn");

// btn.addEventListener('click', () => {
//     btn.style.display = "none";

// })


// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

let generalDiv = document.getElementById('genDi');
let di = document.getElementById('di');

di.style.cursor = "default";
generalDiv.style.cursor = "pointer";

generalDiv.addEventListener("click", () => {
    di.style.display = "none";

    generalDiv.addEventListener('click', () => {
        di.style.display = (di.style.display == "none") ? "block" : 'none'
    })

});


    




        
    
   
        
        
        










