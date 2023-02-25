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
  var currentHour = dayjs().hour();
  
  // formatting the current date in header

  $('#currentDay').text(today.format('MMMM D, YYYY'));

  console.log("current hour", currentHour)

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