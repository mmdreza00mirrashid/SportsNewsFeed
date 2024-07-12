function getCurrentDateTime() {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}

document.addEventListener('DOMContentLoaded', function() {
    var currentDateTimeElement = document.getElementById('currentDateTime');
    if (currentDateTimeElement) {
        currentDateTimeElement.textContent = getCurrentDateTime();
    }
});
