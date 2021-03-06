// Current date to be displayed
var today = moment();
$('#currentDay').text(today.format('dddd, MMM Do, YYYY'));

// current time to be displayed
var currentTime = moment();
$("#currentTime").text(currentTime.format('hh:mm a'));

// retrieving the values from local storage to put onto the page
// get item by the key 
// got help from BCS - Val !! 
// Val said that to target multiple things at one time, you need to just put space in between. 
$('#9 .task').val(localStorage.getItem('9'));
$('#10 .task').val(localStorage.getItem('10'));
$('#11 .task').val(localStorage.getItem('11'));
$('#12 .task').val(localStorage.getItem('12'));
$('#13 .task').val(localStorage.getItem('13'));
$('#14 .task').val(localStorage.getItem('14'));
$('#15 .task').val(localStorage.getItem('15'));
$('#16 .task').val(localStorage.getItem('16'));
$('#17 .task').val(localStorage.getItem('17'));

// function to add task to local storage based on the time
var saveButtonEl = $('.save-button');


saveButtonEl.on('click', function() {
    // parent element for submit button and then selecting attr id
    var time = $(this).parent().attr('id');
    // sibling element for submit button and the selecting value for class task
    // target this level. then siblings. specifically the class = task. then the value.
    var task = $(this).siblings('.task').val();
    console.log(time);
    console.log(task);
    // local storage key & value
    localStorage.setItem(time, task);
})

// function to color the timeblocks to show future, present, or past
// .each for a for loop
// this calls the function so we dont have to call it 
$('.task').each(function () {

    // making the current time into 24 hr format so that it's easier to compare
    var currentTime24 = today.format('HH');
    console.log(currentTime24);

    // parseInt makes the string return as a integer
    var hourTime = parseInt($(this).parent().attr('id'));
    console.log(hourTime);

    // adding class already in css based on the comparison
    if (hourTime == currentTime24) {
        $(this).addClass('present');
    } else if (hourTime > currentTime24) {
        $(this).addClass('future');
    } else {
        $(this).addClass('past');
    }
});