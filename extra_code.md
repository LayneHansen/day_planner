<!-- <div class="col-md-1" id="left-col">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">8:00</li>
                <li class="list-group-item">9:00</li>
                <li class="list-group-item">10:00</li>
                <li class="list-group-item">11:00</li>
                <li class="list-group-item">12:00</li>
                <li class="list-group-item">1:00</li>
                <li class="list-group-item">2:00</li>
                <li class="list-group-item">3:00</li>
                <li class="list-group-item">4:00</li>
                <li class="list-group-item">5:00</li>
                <li class="list-group-item"></li>
              </ul>

        </div> -->


<!-- var userEvent = {

    field8Input: field8.value.trim(),
    field9Input: field9.value.trim(),
    field10Input: field10.value.trim(),
    field11Input: field11.value.trim(),
    field12Input: field12.value.trim(),
    field1Input: field1.value.trim(),
    field2Input: field2.value.trim(),
    field3Input: field3.value.trim(),
    field4Input: field4.value.trim(),
    field5Input: field5.value.trim(),
}      -->

<!-- // var date = new Date();
// document.querySelector("#time-display").innerHTML = date.toDateString();

// var date = new Date();
// document.getElementById("time-display").innerText = date; -->

<!-- // JQUERY

// var button8 = $("#btn8");
// var button9 = $("#btn9");
// var button10 = $("#btn10");
// var button11 = $("#btn11");
// var button12 = $("#btn12");
// var button1 = $("#btn1");
// var button2 = $("#btn2");
// var button3 = $("#btn3");
// var button4 = $("#btn4");
// var button5 = $("#btn5");

// $("#btn8");
// $("btn9");
// $("btn10");
// $("btn11");
// $("btn12");
// $("btn1");
// $("btn2");
// $("btn3");
// $("btn4");
// $("btn5"); -->

// TEXT FIELD VARIABLES

// var field8Event = $('#text-area-1');
// var field9Event = $('#text-area-2');
// var field10Event = $('#text-area-3');
// var field11Event = $('#text-area-4');
// var field12Event = $('#text-area-5');
// var field1Event = $('#text-area-6');
// var field2Event = $('#text-area-7');
// var field3Event = $('#text-area-8');
// var field4Event = $('#text-area-9');


// var timeNowInt = 7;
// console.log(timeNowInt); 


// TIME BLOCK variables

// var timeBlock8 = parseInt($("#block-8").text().replace(/\D/g,));
// var timeBlock9 = parseInt($("#block-9").text().replace(/\D/g,));
// var timeBlock10 = parseInt($("#block-10").text().replace(/\D/g,));
// var timeBlock11 = parseInt($("#block-11").text().replace(/\D/g,));
// var timeBlock12 = parseInt($("#block-12").text().replace(/\D/g,));
// var timeBlock1 = parseInt($("#block-1").text().replace(/\D/g,))+12;
// var timeBlock2 = parseInt($("#block-2").text().replace(/\D/g,))+12;
// var timeBlock3 = parseInt($("#block-3").text().replace(/\D/g,))+12;
// var timeBlock4 = parseInt($("#block-4").text().replace(/\D/g,))+12;

// $("#btn8").on("click", function() {
    //     localStorage.setItem("Event 8", textAreaEve8nt("#text-area-1"));
    // })
    
    
// if (timeNowInt > timeOutOfBlock("#block-8", false)) {
//     // change color of text-area-1 to gray
//     $("#text-area-1").addClass('past');
    
// } else if (timeNowInt === timeOutOfBlock("#block-8", false)) {
//     // change color of  text-area-1 to white
//      $("#text-area-1").addClass('present');
    
// } else if (timeNowInt < timeOutOfBlock("#block-8", false)) {
//     // change color of text-area-1 to green
//     $("#text-area-1").addClass('future');
// }

// if (timeNowInt > timeOutOfBlock("#block-9")) {
//     // change color of text-area-1 to gray
//     $("#text-area-2").addClass('past');

// } else if (timeNowInt === timeOutOfBlock("#block-9")) {
//     // change color of  text-area-1 to white
//     $("#text-area-2").addClass('present');

// } else if (timeNowInt < timeOutOfBlock("#block-9")) {
//     // change color of text-area-1 to green
//     $("#text-area-2").addClass('future');
// }

$("#btn10").on("click", function() {
    field10Event = $("#text-area-3").val();
    localStorage.setItem("Event 10", field10Event);
})


if (timeNowInt > timeOutOfBlock("#block-10")) {
    // change color of text-area-1 to gray
    $("#text-area-3").addClass('past');

} else if (timeNowInt === timeOutOfBlock("#block-10")) {
    // change color of  text-area-1 to white
    $("#text-area-3").addClass('present');

} else if (timeNowInt < timeOutOfBlock("#block-10")) {
    // change color of text-area-1 to green
    $("#text-area-3").addClass('future');

}

$("#btn11").on("click", function() {
//     field11Event = $("#text-area-4").val();
//     localStorage.setItem("Event 11", field11Event);
// })

// $("#text-area-4").val(localStorage.getItem("Event 11"));

// if (timeNowInt > timeOutOfBlock("#block-11")) {
//     // change color of text-area-1 to gray
//     $("#text-area-4").addClass('past');

// } else if (timeNowInt === timeOutOfBlock("#block-11")) {
//     // change color of  text-area-1 to white
//     $("#text-area-4").addClass('present');

// } else if (timeNowInt < timeOutOfBlock("#block-11")) {
//     // change color of text-area-1 to green
//     $("#text-area-4").addClass('future');

// }

$("#btn12").on("click", function() {
//     field12Event = $("#text-area-5").val();
//     localStorage.setItem("Event 12", field12Event);
// })

// $("#text-area-5").val(localStorage.getItem("Event 12"));

// if (timeNowInt > timeOutOfBlock("#block-12")) {
//     // change color of text-area-1 to gray
//     $("#text-area-5").addClass('past');

// } else if (timeNowInt === timeOutOfBlock("#block-12")) {
//     // change color of  text-area-1 to white
//     $("#text-area-5").addClass('present');

// } else if (timeNowInt < timeOutOfBlock("#block-12")) {
//     // change color of text-area-1 to green
//     $("#text-area-5").addClass('future');

// }

$("#btn1").on("click", function() {
//     field1Event = $("#text-area-6").val();
//     localStorage.setItem("Event 1", field1Event);
// })

// $("#text-area-6").val(localStorage.getItem("Event 1"));

// if (timeNowInt > timeOutOfBlock("#block-1", true)) {
//     // change color of text-area-1 to gray
//     $("#text-area-6").addClass('past');

// } else if (timeNowInt === timeOutOfBlock("#block-1", true)) {
//     // change color of  text-area-1 to white
//     $("#text-area-6").addClass('present');

// } else if (timeNowInt < timeOutOfBlock("#block-1", true)) {
//     // change color of text-area-1 to green
//     $("#text-area-6").addClass('future');

// }

// $("#btn2").on("click", function() {
//     field2Event = $("#text-area-7").val();
//     localStorage.setItem("Event 2", field2Event);
// })

// $("#text-area-7").val(localStorage.getItem("Event 2"));

// if (timeNowInt > timeOutOfBlock("#block-2")) {
//     // change color of text-area-1 to gray
//     $("#text-area-7").addClass('past');

// } else if (timeNowInt === timeOutOfBlock("#block-2")) {
//     // change color of  text-area-1 to white
//     $("#text-area-7").addClass('present');

// } else if (timeNowInt < timeOutOfBlock("#block-2")) {
//     // change color of text-area-1 to green
//     $("#text-area-7").addClass('future');

// }

// $("#btn3").on("click", function() {
//     field3Event = $("#text-area-8").val();
//     localStorage.setItem("Event 3", field3Event);
// })

// $("#text-area-8").val(localStorage.getItem("Event 3"));

// if (timeNowInt > timeOutOfBlock("#block-3")) {
//     // change color of text-area-1 to gray
//     $("#text-area-8").addClass('past');

// } else if (timeNowInt === timeOutOfBlock("#block-3")) {
//     // change color of  text-area-1 to white
//     $("#text-area-8").addClass('present');

// } else if (timeNowInt < timeOutOfBlock("#block-3")) {
//     // change color of text-area-1 to green
//     $("#text-area-8").addClass('future');

// }

// $("#btn4").on("click", function() {
//     field4Event = $("#text-area-9").val();
//     localStorage.setItem("Event 4", field4Event);
// })

// $("#text-area-9").val(localStorage.getItem("Event 4"));

// if (timeNowInt > timeOutOfBlock("#block-4")) {
//     // change color of text-area-1 to gray
//     $("#text-area-9").addClass('past');

// } else if (timeNowInt === timeOutOfBlock("#block-4")) {
//     // change color of  text-area-1 to white
//     $("#text-area-9").addClass('present');

// } else if (timeNowInt < timeOutOfBlock("#block-4")) {
//     // change color of text-area-1 to green
//     $("#text-area-9").addClass('future');

// }