let num1 = 8;
let num2 = 2;


document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;


//Add function 
let addBtn = document.getElementById("add-btn").addEventListener('click',add);

let sumEl = document.getElementById("sum-el");

function add(){
    sumEl.textContent = "Sum :" + (num1 + num2);
}


// Subract function 


let subtractBtn = document.getElementById('subtract-btn').addEventListener('click',subtract);

function subtract(){
    sumEl.textContent = "Remaining  : " + (num1 - num2);
}


let divideBtn = document.getElementById("divide-btn").addEventListener('click',divide);

function divide(){
    sumEl.textContent = "Total : " + (num1 / num2);
}

let multiplyBtn = document.getElementById("multply-btn").addEventListener('click', multiply);

function multiply(){
    sumEl.textContent = "Total : " + (num1 * num2);
}

let clearBtn = document.getElementById('clear-btn').addEventListener('click',clear);

function clear(){
    sumEl.textContent = "Total : " + 0;
}