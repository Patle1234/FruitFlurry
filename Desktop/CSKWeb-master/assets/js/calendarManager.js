var selectedDates = [];

function dateChange(object) {
  selectedDates = [];
  var cal1 = document.getElementById("c");
  while (cal1.firstChild) {
    cal1.removeChild(cal1.firstChild);
  }
  var cal2 = document.getElementById("c2");
  while (cal2.firstChild) {
    cal2.removeChild(cal2.firstChild);
  }
  var start = document.getElementById("startDate").value.split("-");
  var end = document.getElementById("endDate").value.split("-");
  if (start.length != 2 || end.length != 2) {
    return;
  }
  var validDates = [];
  if (start[0] == end[0] && start[1] == end[1]) {
    validDates.push(start);
  } else {
    validDates.push(start);
    validDates.push(end);
  }
  var ids = ["#c", "#c2"];
  for (d = 0; d < validDates.length; d++) {
    console.log("Creating Calendar");

    $(ids[d]).simpleCalendar({
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      insertEvent: false,
      month: validDates[d][1] - 1,
      year: validDates[d][0]
    });
  }
}

function dayClicked(element) {
  var dateSelected = new Date(element.attributes.meta.value);
  var dateStr =
    dateSelected.getDate() +
    "-" +
    (dateSelected.getMonth() + 1) +
    "-" +
    dateSelected.getFullYear();

  if (element.classList.contains("event")) {
    element.classList.remove("event");
    element.parentElement.classList.remove("event");
    var index = selectedDates.indexOf(dateStr);
    if (index != -1) {
      selectedDates.splice(index, 1);
    }
  } else {
    element.classList.add("event");
    element.parentElement.classList.add("event");
    selectedDates.push(dateStr);
  }
}
function createNewSession() {
  document.getElementById("addSessionPopup").style.display = "block";
}
function submitNewSession() {
  document.getElementById("addSessionPopup").style.display = "none";
  console.log("Submitted");
}
