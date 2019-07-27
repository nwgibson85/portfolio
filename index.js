const myProjectsArr = [
    {status: 0,
    title: "Random Animal Facts Quiz",
    description: "This is my first ever from scratch project. Ten multiple choice questions randomly selected from a bank of twenty plus such questions. Through use of JQuery and DOM manipulation one can navigate this quiz start to finish and receive feedback on each answer.",
    techUsed: "HTML5, CSS3, javaScript, JQuery",
    liveApp: "https://nwgibson85.github.io/quizApp/",
    repo: "https://github.com/nwgibson85/quizApp",
    displayImg: "https://i.imgur.com/FW4QB3k.png"},
  
    {status: 1,
    title: "Exoplanet Comparison Application",
    description: "Using NASA's exoplanet API this application allows users to compare exoplanet characteristics with earth.  Interactive features include: seeing how much the user would weigh on the alien world, orbital time comparison, solar system distance, and a planetary size comparison.",
    techUsed: "HTML5, CSS3, javaScript, JQuery",
    liveApp: "https://nwgibson85.github.io/Exoplanet-API/",
    repo: "https://github.com/nwgibson85/Exoplanet-API",
    displayImg: "https://i.imgur.com/mEgxMy6.png"},
  
    {status: 2,
    title: "IV Compatibility Optimizer",
    description: "I have been working with Epic EMR Custimization through their sandbox API to develop this application. In Critical Care nursing there are myriad IV drugs being administered at any one time. IV drug administration is very complex with just as many protocols and interactions to take into consideration. This application will take information that has already been input into the EMR by the health care professionals to provide an optimized route of administration for all prescribed IV Medications.",
    techUsed: "HTML5, CSS3, javaScript, JQuery",
    liveApp: "",
    repo: ""}
];
  
function displayProPreview() {
    $('#myWork').show();
    $('#contactMe').hide();
    $('#resume').hide();
    $('#bio').hide();
    $('#super').hide();
    $('#projectPreview').empty();
    let showMe = 0 + 'box';
    for (let i = 0; i < myProjectsArr.length; i++) {
        $('#projectPreview').append(
            `<section class='${i}Thumb' id='${i}box'>
            <legend class='preview-title'><h2 id='projectTitle'>${myProjectsArr[i].title}</h2></legend>
            <p class='description'>${myProjectsArr[i].description}</p>
            <p class='tech-used'>${myProjectsArr[i].techUsed}</p>
            <button class='projectButton' id='${i}repoButton' type='button' onclick="window.location.href ='${myProjectsArr[i].repo}';">View Repository here</button>
            <button class='projectButton' id='${i}liveAppButton' type='button' onclick="window.location.href ='${myProjectsArr[i].liveApp}';">View the Application here</button>` 
        );
        hideYoWork(i);
    }
    document.getElementById(showMe).style.display = 'block';
    handleThumbnailClicks();
}
  
function hideYoWork(i) {
    let hideMe = i + 'box';
    console.log(hideMe);
    document.getElementById(hideMe).style.display = "none";
}
 
function responsiveNav() {
    let x = document.getElementById("myNav");
    if (x.className === "navButtons") {
        x.className += " responsive";
    } 
    else {
        x.className = "navButtons";
    }
}
  
// display pages //
function displayBio() {
    $('#myWork').hide();
    $('#contactMe').hide();
    $('#resume').hide();
    $('#bio').show();
    $('#super').show();
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
  
  // event handlers
function handleThumbnailClicks() {
    $('#carouselBox').on('click', '.thumbnail', function(event) {
    event.preventDefault();
    const imgSrc = $(this).find('img').attr('src');  
    const imgAlt = $(this).find('img').attr('alt');
    $('.mainView img').attr('src', imgSrc).attr('alt', imgAlt);
    let n;
    let a;
    let alpha = $(this).prop('id');
    let x = alpha.charAt(0);
    let beta = x + 'box';
    if (x == 0) {
        a = 1,  n= 2;
    }
    else if (x == 1) { 
        a = 2, n = 0; 
    }
    else {
        a = 0, n = 1;
    }     
    let delta =  a + 'box';
    let gamma =  n + 'box';
    document.getElementById(beta).style.display = 'block';
    document.getElementById(delta).style.display = 'none';
    document.getElementById(gamma).style.display = 'none';
    });
}
  
function handleContactInfoClicks() {
    $(document).on("click", "i", function(){
        switch (this.id) {
            case "linkedIn":
                window.location.href="https://www.linkedin.com/feed/";
                break;
            case "gitHub":
                window.location.href="https://github.com/nwgibson85";
                break;
            case "gmail":
                location.href='mailto:nwgibson85@gail.com';
                break;
        }
    });
} 
  
function handleNickClick() {
    $('.navButtons').on('click', '#Nick', function(event) {
        event.preventDefault();
        displayBio();
    });
}
  
function handleWorkClick() {
    $('.navButtons').on('click', '#Work', function(event) {
        event.preventDefault();
        displayProPreview();
    });
}
  
function handleAboutMeClick() {
    $('.navButtons').on('click', '#aboutMe', function(event) {
        event.preventDefault();
        displayContactMe();
    });
}
  
function handleNavBurgerClick() {
    $('.navButtons').on('click', '#navBurger', function(event) {
        event.preventDefault();
        responsiveNav();
    });
}
  
function handleResumeClick() {
    $('.navButtons').on('click', '#rnResume', function(event) {
        event.preventDefault();
        displayResume();
    });
}
  
function callEventHandlers() {
    handleNavBurgerClick();
    handleNickClick();
    handleWorkClick();
    handleAboutMeClick();
    handleResumeClick();
    handleContactInfoClicks()
    displayBio(); 
}
  
$(callEventHandlers);