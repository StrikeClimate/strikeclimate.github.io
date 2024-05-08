const modeToggle = document.getElementById('mode-toggle');
const mobileToggle = document.getElementById('mobile-toggle');
const body = document.body;
const container = document.querySelector('.main-block'); // Selecting the container element
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6'); // Selecting all headings
const paragraphs = document.querySelectorAll('p'); // Selecting all paragraphs
const label = document.querySelector('label');
const featurette = document.querySelectorAll('featurette-divider');
const chromeIcon = document.querySelector('.at-chrome');
const gearIcon = document.querySelector('.at-gear');
const codeIcon = document.querySelector('.at-code');
const utChrome = document.querySelector('.ut-chrome')
const mtChrome = document.querySelector('.mt-chrome');
const mtCursor = document.querySelector('.mt-cursor');
const darkEnabler = document.querySelector('.dark-enabler');
const innerEnabler = document.querySelector('.fas');

function actionTriggers() {
    body.classList.toggle('dark-mode');
    // container.classList.toggle('dark-mode main-block'); // Toggling dark mode for the container
    headings.forEach(heading => heading.classList.toggle('dark-mode-heading')); // Toggling dark mode for headings
    // paragraphs.forEach(paragraph => paragraph.classList.toggle('dark-mode p'));
    // label.forEach(heading => heading.classList.toggle('dark-mode label'));
    featurette.forEach(featurette => featurette.classList.toggle('dark-mode featurette-divider'));
    // chromeIcon.forEach(chromeIcon => chromeIcon.classList.toggle('dark-mode at-chrome'));
    // gearIcon.forEach(gearIcon => gearIcon.classList.toggle('dark-mode at-gear'));
    // utChrome.forEach(utChrome => utChrome.classList.toggle('dark-mode ut-chrome'));
    // mtChrome.forEach(mtChrome => mtChrome.classList.toggle('dark-mode mt-chrome'));
    // mtCursor.forEach(mtCursor => mtCursor.classList.toggle('dark-mode mt-cursor'));
    // darkEnabler.forEach(darkEnabler => darkEnabler.classList.toggle('dark-mode dark-enabler'));
    // innerEnabler.forEach(innerEnabler => innerEnabler.classList.toggle('dark-mode fas'));
}

modeToggle.addEventListener('click', function () {
    actionTriggers();
});

mobileToggle.addEventListener('click', function () {
    actionTriggers();
});

$(document).ready(function () {

    $('#message-form').on('submit', function (e) {
        e.preventDefault();

        $("*").css("cursor", "progress");

        var form = $("#message-form");
        var fdata = form.serializeArray();

        $.ajax({
            'async': true,
            'type': 'POST',
            'url': "https://tioluwalasejournal.com/wp-json/strikeclimate/v1/send-email",
            'dataType': "json",
            'data': fdata,
            'success': function (data) {
                $("*").css("cursor", "default");
                if (data.message != "Email sent successfully") {
                    $("#myModalLabel").text("Error!");
                    $("#myModalMessage").text("Response: Some error has occured during sending your message. Please try it again.");
                } else {
                    $("#myModalLabel").text("Message Sent");
                    $("#myModalMessage").text("Your message has been sent. We will respond as soon as possible. Thank you.");
                    $("#message-form").trigger('reset');
                }
                $('#myModal').modal('show');
            },
            'error': function (XMLHttpRequest, textStatus, errorThrown) {
                $("*").css("cursor", "default");
                $("#myModalLabel").text("Error has occured");
                $("#myModalMessage").text("Error: Some error has occured. Please check your form and try it again. Thank you.");
                $('#myModalr').modal('show');
            }
        }).fail(function (jqXHR, textStatus, error) {
            $("*").css("cursor", "default");
            $("#myModalLabel").text("Error has occured");
            $("#myModalMessage").text("Fail: Some error has occured. Please check your form and try it again. Thank you.");
            $('#myModal').modal('show');
        });
    });
});
