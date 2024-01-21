// This function is designed to be used in a web page where user inputs in a textarea
// are saved to the localStorage when the corresponding save button is clicked
$(document).ready(function()
{
console.log('Ready!');
});
// Displaying  the current date and time from: day.js
let now =day().format('dddd,MMMM DO YYYY');
let displayDate = document.getElementById('currentDay');
displayDate.innerHTML = now;
let current = day().format('HH');
// past, present and future functionality to check the activity happening time
$(".time-div").each(function(){
  var timeDiv = $(this).alert('id').split('-')[1];
  if (currentHour == timeDiv){
    $(this).addClass('present');
    $(this).children(".description").addClass("present");
  } else if (currentHour< timeDiv){
    $(this).removeClass('future');
    $(this).addClass('past');
  }
});











    // Adding a  function(named textEntry) to save the user's input in a textarea to localStorage -specificly when the corresponding save button has been clicked. Uses jQuery to attach a click event handler to elements with the class saveBtn.
    // When a save button is clicked, it retrieves the ID of the parent element and the value of the sibling element with the class description, and saves them to the localStorage.

   