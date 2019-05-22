

// display pages //
function displayBio() {
    $('#myWork').hide();
    $('#contactMe').hide();
    $('#resume').hide();
    $('#bio').show();
    $('#super').show();
    
}

function displayMyWork() {
    $('#myWork').show();
    $('#contactMe').hide();
    $('#resume').hide();
    $('#bio').hide();
    $('#super').hide();
}

function displayContactMe() {
    $('#myWork').hide();
    $('#contactMe').show();
    $('#resume').hide();
    $('#bio').hide();
    $('#super').hide();
}

function displayResume() {
    $('#myWork').hide();
    $('#contactMe').hide();
    $('#resume').show();
    $('#bio').hide();
    $('#super').hide();
}

// event handlers //
function handleNickClick() {
    $('.navButtons').on('click', '#Nick', function(event) {
        event.preventDefault();
        displayBio();
    });
}

function handleWorkClick() {
    $('.navButtons').on('click', '#Work', function(event) {
        event.preventDefault();
        displayMyWork();
    });
}

function handleAboutMeClick() {
    $('.navButtons').on('click', '#aboutMe', function(event) {
        event.preventDefault();
        displayContactMe();
    });
}

function handleResumeClick() {
    $('').on('click', '#resume', function(event) {
        event.preventDefault();
    });
}

// start it up //
function showMeOff() {
    handleNickClick();
    handleWorkClick();
    handleAboutMeClick();
    handleResumeClick();
    displayBio();
}

$(showMeOff);