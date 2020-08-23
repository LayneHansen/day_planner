
// TIME DISPLAY

// const { momentProperties } = require("./moment");

// const moment = require("./moment");

var currentDay = moment();
var momentDisplay = document.getElementById("time-display");
momentDisplay.innerHTML = currentDay.format('LLLL');

// TIME FUNCTIONS

// current hour integer used to compare with time blocks

var timeNowInt = moment().format('H');




// FUNCTION CREATES INTEGER USED TO COMPARE MOMENTJS TIME

function timeOutOfBlock (eventTime, ifMilitaryTime) {

    var timeBlock = parseInt($(eventTime).text().replace(/\D/g,));
    if (ifMilitaryTime) {
        timeBlock += 12;
    }
    return timeBlock;

}

// FUNCTION CREATES VARIABLES FOR TEXT ENTERED INTO TEXT AREAS

function textAreaEvent (eventText) {

    var textField = $(eventText);
    return textField.val();

}

// CLICK FUNCTION


// FUNCTION THAT SETS TEXT TO LOCAL STORAGE

function setTextToLS (buttonSelector, lsKey, textArea) {
    $(buttonSelector).on("click", function() {
        localStorage.setItem(lsKey, textAreaEvent(textArea));
    })

}



// FUNCTION THAT GETS TEXT TO LOCAL STORAGE


// TEXT FIELDS, TEXT AND COLOR STATUS

function timeCompare (timeBlockSelector, textAreaSelector, ifMilitaryTime) {
    
    if (timeNowInt > timeOutOfBlock(timeBlockSelector, ifMilitaryTime)) {
        // change color of text-area-1 to gray
        $(textAreaSelector).addClass('past');
        
    } else if (timeNowInt === timeOutOfBlock(timeBlockSelector, ifMilitaryTime)) {
        // change color of  text-area-1 to white
        $(textAreaSelector).addClass('present');
        
    } else if (timeNowInt < timeOutOfBlock(timeBlockSelector, ifMilitaryTime)) {
        // change color of text-area-1 to green
        $(textAreaSelector).addClass('future');
    }
    
}



// 8:00 FIELD

setTextToLS("#btn8", "Event 8", "#text-area-1");
$("#text-area-1").val(localStorage.getItem("Event 8"));
timeCompare("#block-8", "#text-area-1", false);



// 9:00

setTextToLS("#btn9", "Event 9", "#text-area-2");
$("#text-area-2").val(localStorage.getItem("Event 9"));
timeCompare("#block-9", "#text-area-2", false);
    
    
    
// 10:00 FIELD
    
setTextToLS("#btn10", "Event 10", "#text-area-3");
$("#text-area-3").val(localStorage.getItem("Event 10"));
timeCompare("#block-10", "#text-area-3", false);



// 11: 00 FIELD

setTextToLS("#btn11", "Event 11", "#text-area-4");
$("#text-area-4").val(localStorage.getItem("Event 11"));
timeCompare("#block-11", "#text-area-4", false);



// 12:00 FIELD

setTextToLS("#btn12", "Event 12", "#text-area-5");
$("#text-area-5").val(localStorage.getItem("Event 12"));
timeCompare("#block-12", "#text-area-5", false);


// 1:00 FIELD

setTextToLS("#btn1", "Event 1", "#text-area-6");
$("#text-area-6").val(localStorage.getItem("Event 1"));
timeCompare("#block-1", "#text-area-6", true);


// 2:00 FIELD

setTextToLS("#btn2", "Event 2", "#text-area-7");
$("#text-area-7").val(localStorage.getItem("Event 2"));
timeCompare("#block-2", "#text-area-7", true);


// 3:00 FIELD

setTextToLS("#btn3", "Event 3", "#text-area-8");
$("#text-area-8").val(localStorage.getItem("Event 3"));
timeCompare("#block-3", "#text-area-8", true);


// 4:00 FIELD

setTextToLS("#btn4", "Event 4", "#text-area-9");
$("#text-area-9").val(localStorage.getItem("Event 4"));
timeCompare("#block-4", "#text-area-9", true);





