// This function is designed to be used in a web page where user inputs in a textarea
// are saved to the localStorage when the corresponding save button is clicked

const localeSettings = {};
  dayjs.locale(localeSettings);
  // executing the code inside the function.
  $(function () {
    //using the dayjs library to apply the  current hour if the day.
    const currentHour = dayjs().format('H');
  // The function below changes the color of each time block based on whether it's in the "past, present, or future" relative to the current hour.
    function hourlyColor() {
      $('.time-block').each(function() {
        const blockHour = parseInt(this.id);
        $(this).toggleClass('past', blockHour < currentHour);
        $(this).toggleClass('present', blockHour === currentHour);
        $(this).toggleClass('future', blockHour > currentHour);
      });
    }
    // Adding a  function(named textEntry) to save the user's input in a textarea to localStorage -specificly when the corresponding save button has been clicked. Uses jQuery to attach a click event handler to elements with the class saveBtn.
    // When a save button is clicked, it retrieves the ID of the parent element and the value of the sibling element with the class description, and saves them to the localStorage.

    function textEntry() {
      $('.saveBtn').on('click', function() {
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
      });
    }