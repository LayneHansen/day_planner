
// TIME DISPLAY

var currentDay = moment();
var displayDay = document.getElementById("time-display");
displayDay.innerHTML = currentDay.format('LLLL');

var field8Event;



var field8 = document.querySelector("#text-area-1");
// var field9 = document.querySelector("#text-area-2");
// var field10 = document.querySelector("#text-area-3");
// var field11 = document.querySelector("#text-area-4");
// var field12 = document.querySelector("#text-area-5");
// var field1 = document.querySelector("#text-area-6");
// var field2 = document.querySelector("#text-area-7");
// var field3 = document.querySelector("#text-area-8");
// var field4 = document.querySelector("#text-area-9");
// var field5 = document.querySelector("#text-area-10");


var button8 = document.querySelector("#btn8");
// var button9 = document.querySelector("#btn9");
// var button10 = document.querySelector("#btn10");
// var button11 = document.querySelector("#btn11");
// var button12 = document.querySelector("#btn12");
// var button1 = document.querySelector("#btn1");
// var button2 = document.querySelector("#btn2");
// var button3 = document.querySelector("#btn3");
// var button4 = document.querySelector("#btn4");
// var button5 = document.querySelector("#btn5");

// function fieldInput(type, message) {
//     field8.innerText = message;
//     localStorage.setItem("Event", type);
    
// }


// BUTTON EVENTS

button8.addEventListener('click', function () {
    // console.log(button8);
    
    field8Event = field8.value;
    // console.log(field8Event);
    localStorage.setItem("Event", field8Event);
    
});

field8.innerHTML = localStorage.getItem("Event");


// $("btn8").on("click", function() {
//     field8Event = field8.val;
//     localStorage.setItem("Event", field8Event);

// })

// field8.innerHTML = localStorage.getItem("Event");


// fieldInput();


// button9.addEventListener('click' function ());
// button10.addEventListener('click' function ());
// button11.addEventListener('click' function ());
// button12.addEventListener('click' function ());
// button1.addEventListener('click' function ());
// button2.addEventListener('click' function ());
// button3.addEventListener('click' function ());
// button4.addEventListener('click' function ());
// button5.addEventListener('click' function ());




