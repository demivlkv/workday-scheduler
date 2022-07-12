// display current day at the top of the page
const currentDay = moment().format('LLLL');
const now = moment().format('LT');

$('#currentDay').text(currentDay);

// create array for each hour
let workDay = [
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
];

// load any saved entries
function loadEntry(key) {
    let savedEntry = localStorage.getItem(key);

    // load previous entries upon refresh
    if (savedEntry) {
        $('#col-text-' + key).text(savedEntry);
    }
};

$(function() {
    // create hour blocks
    workDay.forEach(function(element, index) {
        const hour = element.time;
        const colorBlock = bgColor(hour);

        // create div for every hour
        $('.container').append('<div class="row time-block" id="' + index + 
        '"><div class="col-2 hour">' + hour + 
        '</div><textarea id="col-text-' + index + 
        '" class="col-8 description ' + colorBlock + 
        '">' + element.event + 
        '</textarea><button class="col-2 btn saveBtn" type="submit"><i class="fa-regular fa-floppy-disk"></i></button></div>');

        // load previous entries
        loadEntry(index);
    });

    // change color background according to time
    function bgColor(time) {
        let currentTime = moment(now, "H a");
        let workPlan = moment(time, "H a");

        // compare current time with planned time
        if (currentTime.isBefore(workPlan) === true) {
            return 'future';
        } else if (currentTime.isAfter(workPlan) === true) {
            return 'past';
        } else {
            return 'present';
        }
    };

    // create save function
    $('.saveBtn').on('click', function(event) {
        event.preventDefault();

        // get input text from textarea
        let entryId = parseInt($(this).closest('.time-block').attr('id'));
        let newEntry = $.trim($(this).parent().find('textarea').val());

        // set id and value into workday array
        workDay[entryId].event = newEntry;

        // save to local storage
        localStorage.setItem(entryId, newEntry);
    });

});