// display current day at the top of the page
const currentDay = moment().format('dddd, MMMM Do, YYYY, HH:mm');

$('#currentDay').text(currentDay);

// create array for each hour
const hoursDisplay = [
    { time: "7:00 AM", event: ""},
    { time: "8:00 AM", event: ""},
    { time: "9:00 AM", event: ""},
    { time: "10:00 AM", event: ""},
    { time: "11:00 AM", event: ""},
    { time: "12:00 PM", event: ""},
    { time: "1:00 PM", event: ""},
    { time: "2:00 PM", event: ""},
    { time: "3:00 PM", event: ""},
    { time: "4:00 PM", event: ""},
    { time: "5:00 PM", event: ""}
]

const now = moment().format('H A');

// create hour blocks
hoursDisplay.forEach(function(timeBlock, index) {
    const hourDisplay = timeBlock.time;
    const colorBlock = bgColor(hourDisplay);

    // create div for every hour
    $('.container').append('<div class="row time-block" id="' + index + 
    '"><div class="col-2 hour">' + hourDisplay + 
    '</div><textarea class="col-8 description ' + colorBlock + '">' + timeBlock.event + 
    '</textarea><div class="col-2 saveBtn"><button type="submit"><span class="oi oi-pencil"></span></button></div></div>');
});

// change color background according to time
function bgColor(time) {
    let currentTime = moment(now, "H A");
    let eventPlan = moment(time, "H A")
    console.log(currentTime);
    if (currentTime.isBefore(eventPlan) === true) {
        return 'future';
    } else if (currentTime.isAfter(eventPlan) === true) {
        return 'past';
    } else {
        return 'present';
    }
};
// store & load tasks

// create save button