// display current day at the top of the page
const currentDay = moment().format('dddd, MMMM Do, YYYY, HH:mm');

$('#currentDay').text(currentDay);

// create hour blocks
$(document).ready(function() {
$('.container').append('<div class="row time-block"><div class="col hour"> 9:00AM </div><textarea class="col-8 description">Testing 1 2 3</textarea><div class="col saveBtn"></div></div>');
});

// store & load tasks

// create save button