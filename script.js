
// TIME DISPLAY

// const { momentProperties } = require("./moment");

// const moment = require("./moment");

var currentDay = moment();
var momentDisplay = document.getElementById("time-display");
momentDisplay.innerHTML = currentDay.format('LLLL');

var field8Event;


// TIME FUNCTIONS

// current date and time
var timeNow = moment();

// current hour integer used to compare with time blocks
var timeNowInt = moment().format('h');
console.log(timeNowInt); 

// TIME BLOCK variables

var timeBlock8 = parseInt($("#block-8").text().replace(/\D/g,));
 timeBlock = moment.duration(1,"hour");
 console.log(timeBlock);



//  timeBlock9 = $("#block-9");
//  console.log(timeBlock9);
 





// var timeBlock8 = moment(8:00).add(1, "hour");
// console.log(timeBlock8);

// timeBlock = moment.duration(1, "hour");
// console.log(timeBlock);

// var timePast = timeNow > timePresent;

// var timePresent = currentTimeBlock;

// var timeFuture = timeNow < timePresent;

// Create identifiable blocks of time that identify the 


// var timeBlock8 = {
//     let: start = '8:00:00'
//     let: end = '8:59:59'
// };







// TEXT FIELDS

// 8:00 FIELD

$("#btn8").on("click", function() {
    field8Event = $("#text-area-1").val();
    localStorage.setItem("Event 8", field8Event);
})

$("#text-area-1").val(localStorage.getItem("Event 8"));

// 9:00

$("#btn9").on("click", function() {
    field9Event = $("#text-area-2").val();
    localStorage.setItem("Event 9", field9Event);
})

$("#text-area-2").val(localStorage.getItem("Event 9"));

// 10:00 FIELD

$("#btn10").on("click", function() {
    field10Event = $("#text-area-3").val();
    localStorage.setItem("Event 10", field10Event);
})

$("#text-area-3").val(localStorage.getItem("Event 10"));

// 11: 00 FIELD

$("#btn11").on("click", function() {
    field11Event = $("#text-area-4").val();
    localStorage.setItem("Event 11", field11Event);
})

$("#text-area-4").val(localStorage.getItem("Event 11"));

// 12:00 FIELD

$("#btn12").on("click", function() {
    field12Event = $("#text-area-5").val();
    localStorage.setItem("Event 12", field12Event);
})

$("#text-area-5").val(localStorage.getItem("Event 12"));

// 1:00 FIELD

$("#btn1").on("click", function() {
    field1Event = $("#text-area-6").val();
    localStorage.setItem("Event 1", field1Event);
})

$("#text-area-6").val(localStorage.getItem("Event 1"));

// 2:00 FIELD

$("#btn2").on("click", function() {
    field2Event = $("#text-area-7").val();
    localStorage.setItem("Event 2", field2Event);
})

$("#text-area-7").val(localStorage.getItem("Event 2"));

// 3:00 FIELD

$("#btn3").on("click", function() {
    field3Event = $("#text-area-8").val();
    localStorage.setItem("Event 3", field3Event);
})

$("#text-area-8").val(localStorage.getItem("Event 3"));

// 4:00 FIELD

$("#btn4").on("click", function() {
    field4Event = $("#text-area-9").val();
    localStorage.setItem("Event 4", field4Event);
})

$("#text-area-9").val(localStorage.getItem("Event 4"));









// for (var i=1; i < 11; i++) {

//     $("#text-area-" + i).val(localStorage.getItem());

// }


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




