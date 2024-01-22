$(document).ready(function()
{
console.log('Ready!');
});
// Displaying  the current date and time from: day.js
let now =day().format('dddd,MMMM DO YYYY');
let displayDate = document.getElementById('currentDay');
displayDate.innerHTML = now;
let current = day().format('HH');
// past, present and future functionality to check the activity that happens in each time
$(".time-div").each(function(){
  var timeDiv = $(this).alert('id').split('-')[1];
  if (currentHour == timeDiv){
    $(this).addClass('present');
    $(this).children(".description").addClass("present");
  } else if (currentHour < timeDiv){
    $(this).removeClass('present');
    $(this).addClass('future');
  } else if (currentHour < timeDiv){
    $(this).removeClass('future');
    $(this).addClass('past');
  }
});
//Creating function to save the data to the local storage
$('.saveBtn').click(function(event)
{
event.preventDefault();
var value = $(this).siblings('.time-blocl').val();
var time = $(this). parent().atte('id').split('-')[1];
localStorage.setItem(time.value);
});
 // Retrieving data from local storage 
 $("#hour-09 .time-block").val(localStorage.getItem("09"));
 $("#hour-10 .time-block").val(localStorage.getItem("10"));
 $("#hour-11 .time-block").val(localStorage.getItem("11"));
 $("#hour-12 .time-block").val(localStorage.getItem("12"));
 $("#hour-13 .time-block").val(localStorage.getItem("13"));
 $("#hour-14 .time-block").val(localStorage.getItem("14"));
 $("#hour-15 .time-block").val(localStorage.getItem("15"));
 $("#hour-16 .time-block").val(localStorage.getItem("16"));
 $("#hour-17 .time-block").val(localStorage.getItem("17"));

//Creatin button function to clear content and local storage
$("#clearFieldsBtn").click(function(event) {
  event.preventDefault;
  $("textArea").val("");
  localStorage.clear();
});
