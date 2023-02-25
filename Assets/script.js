

$(function () {
  
  // adding previously entered data to the task fields
  
  document.getElementById("hour-9").childNodes[3].innerHTML = localStorage.getItem("task9");
  document.getElementById("hour-10").childNodes[3].innerHTML = localStorage.getItem("task10");
  document.getElementById("hour-11").childNodes[3].innerHTML = localStorage.getItem("task11");
  document.getElementById("hour-12").childNodes[3].innerHTML = localStorage.getItem("task12");
  document.getElementById("hour-1").childNodes[3].innerHTML = localStorage.getItem("task1");
  document.getElementById("hour-2").childNodes[3].innerHTML = localStorage.getItem("task2");
  document.getElementById("hour-3").childNodes[3].innerHTML = localStorage.getItem("task3");
  document.getElementById("hour-4").childNodes[3].innerHTML = localStorage.getItem("task4");
  document.getElementById("hour-5").childNodes[3].innerHTML = localStorage.getItem("task5");
  
  // using button to save data to the local storage
  
  var saveButton = $('.saveBtn');
  saveButton.on('click', function() {
    var taskEntry = document.getElementById("hour-9").childNodes[3].value;
    localStorage.setItem("task9", taskEntry);
  });
  
  saveButton.on('click', function() {
    var taskEntry = document.getElementById("hour-10").childNodes[3].value;
    localStorage.setItem("task10", taskEntry);
  });
  
  saveButton.on('click', function() {
    var taskEntry = document.getElementById("hour-11").childNodes[3].value;
    localStorage.setItem("task11", taskEntry);
  });
  
  saveButton.on('click', function() {
    var taskEntry = document.getElementById("hour-12").childNodes[3].value;
    localStorage.setItem("task12", taskEntry);
  });
  
  saveButton.on('click', function() {
    var taskEntry = document.getElementById("hour-1").childNodes[3].value;
    localStorage.setItem("task1", taskEntry);
  });
  
  saveButton.on('click', function() {
    var taskEntry = document.getElementById("hour-2").childNodes[3].value;
    localStorage.setItem("task2", taskEntry);
  });
  
  saveButton.on('click', function() {
    var taskEntry = document.getElementById("hour-3").childNodes[3].value;
    localStorage.setItem("task3", taskEntry);
  });
  
  saveButton.on('click', function() {
    var taskEntry = document.getElementById("hour-4").childNodes[3].value;
    localStorage.setItem("task4", taskEntry);
  });
  
  saveButton.on('click', function() {
    var taskEntry = document.getElementById("hour-5").childNodes[3].value;
    localStorage.setItem("task5", taskEntry);
  });
  
  // time variables
  
  var today = dayjs();
  $('#currentDay').text(today.format('MMMM D, YYYY'));
  var currentHour = dayjs().hour();

  console.log("current hour", currentHour)

  // var hour = dayjs().hour();
  // var time = $('.time');
  // var timeOfDay = time.text();
  // var timeOfDayParse = parseInt(timeOfDay);
  // var militaryTime;
  
  // // converting to military time
  
  // if (timeOfDayParse >= 1 && timeOfDayParse <= 5) {
  //   militaryTime = timeOfDayParse + 12;
  // } else {
  //   militaryTime = timeOfDayParse;
  // }

  // console.log(hour);
  // console.log(time);
  // console.log(timeOfDay);
  // console.log(timeOfDayParse);
  // console.log(militaryTime);  
  
  // adding past, present and future classes in respect to the current hour
  
  putColor()
  function putColor() {
    var blockOfTime = $(".description");
    blockOfTime.each(function(){
      var hour = $(this).attr("id")
      console.log("this is the hour", hour);
      if (currentHour > hour) {
        $(this).addClass("past");
      } else if (currentHour < hour) {
        $(this).remove("present")
        $(this).remove("past")
        $(this).addClass("future");
      } else if (currentHour == hour) {
        $(this).remove("past")
        $(this).addClass("present");
      }

      })
    }
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// 
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// console.log(document.getElementById("hour-9"), "get elembyID")
// console.log(document.getElementById("hour-9").childNodes, "childNodes")
// console.log(document.getElementById("hour-9").childNodes[1], "childNodes[1]")
// console.log(document.getElementById("hour-9").childNodes[1].textContent, "textContent")
// console.log(taskEntry, "taskEntry")
// 
// var taskEntry = taskArea.value;
// taskArea.innerHTML = taskEntry;
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.