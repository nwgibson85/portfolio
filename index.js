//Project Carousel//
let n = 0;

function displayProPreview() {
  console.log(n);
  return $('#projectPreview').html(`
  <section id='previewBox'><legend id='previewTitle'><h2 id='projectTitle'>${myProjectsArr[n].title}</h2></legend>
  <p id='description'>${myProjectsArr[n].description}</p>
  <ul id='techsUsed'>
    <li><img src='${techUsedImg.hTML5}' alt='HTML5 logo'/></li>
    <li><img src='${techUsedImg.cSS3}' alt='CSS3 logo'/></li>
    <li><img src='${techUsedImg.javaScript}' alt='javaScript logo'/></li>
  </ul>
  <button class='projectButton' id='repoButton' type='button' onclick="window.location.href ='${myProjectsArr[n].repo}';">View Repository here</button>
  <button class='projectButton' id='liveAppButton' type='button' onclick="window.location.href ='${myProjectsArr[n].liveApp}';">View the Application here</button>`
  );
}

function handleThumbnailClicks() {
  $('#carouselBox').on('click', '.thumbnail', function(event) {
     const imgSrc = $(this).find('img').attr('src');  
     const imgAlt = $(this).find('img').attr('alt');
    
    $('.mainView img').attr('src', imgSrc).attr('alt', imgAlt);
  });
}

function responsiveNav() {
  var x = document.getElementById("myNav");
  if (x.className === "navButtons") {
    x.className += " responsive";
  } else {
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

// event handlers
function reactiveN0() {
  $('#quizApp').on('click', function(event) {
    n = 0;
    displayProPreview();
  });
}

function reactiveN1() {
  $('#IV').on('click', function(event) {
    n = 1;
    displayProPreview();
  });
}

// function reactiveN2() {
//   $('#quizApp').on('click', function(event) {
//     n = 2;
//     displayProPreview();
//   });
// }

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
  displayBio();
  handleThumbnailClicks();
  reactiveN0();
  reactiveN1();
  
}

$(callEventHandlers);