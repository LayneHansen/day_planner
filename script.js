
// TIME DISPLAY

// const { momentProperties } = require("./moment");

// const moment = require("./moment");

var currentDay = moment();
var momentDisplay = document.getElementById("time-display");
momentDisplay.innerHTML = currentDay.format('LLLL');

// TEXT FIELD VARIABLES

var field8Event = $('#text-area-1');
var field9Event = $('#text-area-2');
var field10Event = $('#text-area-3');
var field11Event = $('#text-area-4');
var field12Event = $('#text-area-5');
var field1Event = $('#text-area-6');
var field2Event = $('#text-area-7');
var field3Event = $('#text-area-8');
var field4Event = $('#text-area-9');



// TIME FUNCTIONS

// current hour integer used to compare with time blocks
var timeNowInt = moment().format('H');
console.log(timeNowInt); 

// TIME BLOCK variables

var timeBlock8 = parseInt($("#block-8").text().replace(/\D/g,));
var timeBlock9 = parseInt($("#block-9").text().replace(/\D/g,));
var timeBlock10 = parseInt($("#block-10").text().replace(/\D/g,));
var timeBlock11 = parseInt($("#block-11").text().replace(/\D/g,));
var timeBlock12 = parseInt($("#block-12").text().replace(/\D/g,));
var timeBlock1 = parseInt($("#block-1").text().replace(/\D/g,))+12;
var timeBlock2 = parseInt($("#block-2").text().replace(/\D/g,))+12;
var timeBlock3 = parseInt($("#block-3").text().replace(/\D/g,))+12;
var timeBlock4 = parseInt($("#block-4").text().replace(/\D/g,))+12;

 
// timeBlock = moment.duration(1,"hour");
// console.log(timeBlock);

// function textAreaColor() {

    
    // }
    
    // textAreaColor();
    // console.log(textAreaColor);
    
    
    
// TEXT FIELDS, TEXT AND COLOR STATUS
    
// 8:00 FIELD
    
$("#btn8").on("click", function() {
    field8Event = $("#text-area-1").val();
    localStorage.setItem("Event 8", field8Event);
})
    
$("#text-area-1").val(localStorage.getItem("Event 8"));
    
if (timeNowInt > timeBlock8) {
    // change color of text-area-1 to gray
    $("#text-area-1").addClass('past');
    
} else if (timeNowInt === timeBlock8) {
    // change color of  text-area-1 to white
     $("#text-area-1").addClass('present');
    
} else if (timeNowInt < timeBlock8) {
    // change color of text-area-1 to green
    $("#text-area-1").addClass('future');
}

// 9:00

$("#btn9").on("click", function() {
    field9Event = $("#text-area-2").val();
    localStorage.setItem("Event 9", field9Event);
})

$("#text-area-2").val(localStorage.getItem("Event 9"));

if (timeNowInt > timeBlock9) {
    // change color of text-area-1 to gray
    $("#text-area-2").addClass('past');

} else if (timeNowInt === timeBlock9) {
    // change color of  text-area-1 to white
    $("#text-area-2").addClass('present');

} else if (timeNowInt < timeBlock9) {
    // change color of text-area-1 to green
    $("#text-area-2").addClass('future');
}

// 10:00 FIELD

$("#btn10").on("click", function() {
    field10Event = $("#text-area-3").val();
    localStorage.setItem("Event 10", field10Event);
})

$("#text-area-3").val(localStorage.getItem("Event 10"));

if (timeNowInt > timeBlock10) {
    // change color of text-area-1 to gray
    $("#text-area-3").addClass('past');

} else if (timeNowInt === timeBlock10) {
    // change color of  text-area-1 to white
    $("#text-area-3").addClass('present');

} else if (timeNowInt < timeBlock10) {
    // change color of text-area-1 to green
    $("#text-area-3").addClass('future');

}

// 11: 00 FIELD

$("#btn11").on("click", function() {
    field11Event = $("#text-area-4").val();
    localStorage.setItem("Event 11", field11Event);
})

$("#text-area-4").val(localStorage.getItem("Event 11"));

if (timeNowInt > timeBlock11) {
    // change color of text-area-1 to gray
    $("#text-area-4").addClass('past');

} else if (timeNowInt === timeBlock11) {
    // change color of  text-area-1 to white
    $("#text-area-4").addClass('present');

} else if (timeNowInt < timeBlock11) {
    // change color of text-area-1 to green
    $("#text-area-4").addClass('future');

}

// 12:00 FIELD

$("#btn12").on("click", function() {
    field12Event = $("#text-area-5").val();
    localStorage.setItem("Event 12", field12Event);
})

$("#text-area-5").val(localStorage.getItem("Event 12"));

if (timeNowInt > timeBlock12) {
    // change color of text-area-1 to gray
    $("#text-area-5").addClass('past');

} else if (timeNowInt === timeBlock12) {
    // change color of  text-area-1 to white
    $("#text-area-5").addClass('present');

} else if (timeNowInt < timeBlock12) {
    // change color of text-area-1 to green
    $("#text-area-5").addClass('future');

}

// 1:00 FIELD

$("#btn1").on("click", function() {
    field1Event = $("#text-area-6").val();
    localStorage.setItem("Event 1", field1Event);
})

$("#text-area-6").val(localStorage.getItem("Event 1"));

if (timeNowInt > timeBlock1) {
    // change color of text-area-1 to gray
    $("#text-area-6").addClass('past');

} else if (timeNowInt === timeBlock1) {
    // change color of  text-area-1 to white
    $("#text-area-6").addClass('present');

} else if (timeNowInt < timeBlock1) {
    // change color of text-area-1 to green
    $("#text-area-").addClass('future');

}

// 2:00 FIELD

$("#btn2").on("click", function() {
    field2Event = $("#text-area-7").val();
    localStorage.setItem("Event 2", field2Event);
})

$("#text-area-7").val(localStorage.getItem("Event 2"));

if (timeNowInt > timeBlock2) {
    // change color of text-area-1 to gray
    $("#text-area-7").addClass('past');

} else if (timeNowInt === timeBlock2) {
    // change color of  text-area-1 to white
    $("#text-area-7").addClass('present');

} else if (timeNowInt < timeBlock2) {
    // change color of text-area-1 to green
    $("#text-area-7").addClass('future');

}

// 3:00 FIELD

$("#btn3").on("click", function() {
    field3Event = $("#text-area-8").val();
    localStorage.setItem("Event 3", field3Event);
})

$("#text-area-8").val(localStorage.getItem("Event 3"));

if (timeNowInt > timeBlock3) {
    // change color of text-area-1 to gray
    $("#text-area-8").addClass('past');

} else if (timeNowInt === timeBlock3) {
    // change color of  text-area-1 to white
    $("#text-area-8").addClass('present');

} else if (timeNowInt < timeBlock3) {
    // change color of text-area-1 to green
    $("#text-area-8").addClass('future');

}

// 4:00 FIELD

$("#btn4").on("click", function() {
    field4Event = $("#text-area-9").val();
    localStorage.setItem("Event 4", field4Event);
})

$("#text-area-9").val(localStorage.getItem("Event 4"));

if (timeNowInt > timeBlock4) {
    // change color of text-area-1 to gray
    $("#text-area-9").addClass('past');

} else if (timeNowInt === timeBlock4) {
    // change color of  text-area-1 to white
    $("#text-area-9").addClass('present');

} else if (timeNowInt < timeBlock4) {
    // change color of text-area-1 to green
    $("#text-area-9").addClass('future');

}








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




