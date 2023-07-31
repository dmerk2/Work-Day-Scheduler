$(document).ready(function () {
  // Displaying current day using dayjs
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  //Apply the according class depending on the time
  const displayHour = () => {
    let currentHour = dayjs().hour();
    let timeSlot = $('[id^="hour-"]');
    timeSlot.each(function () {
      let hourBlock = $(this).attr("id").split("-")[1];

      // Compares the hour block with the current hour to add appropriate classes
      if (hourBlock > currentHour) {
        $(this).addClass("future");
      } else if (hourBlock < currentHour) {
        $(this).addClass("past");
      } else {
        $(this).addClass("present");
      }
    });
  };
  displayHour();

  // Save to local storage when save button is clicked
  $(".saveBtn").on("click", function () {
    let timeSlot = $(this).parent().attr("id");
    let task = $(this).siblings(".description").val().trim();
    localStorage.setItem(timeSlot, task);
    if (!task) {
      alert("Please enter task");
    }
  });

  // Get from local storage and add to the timeSlot
  $(function () {
    $(".time-block").each(function () {
      let timeSlot = $(this).attr("id");
      $(this).children(".description").val(localStorage.getItem(timeSlot));
    });
  });
});
