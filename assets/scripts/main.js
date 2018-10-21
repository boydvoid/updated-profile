let clicked;

$(document).ready(function () {
  clicked = false;
  if ($(window).width() > 1200 || clicked === false) {

    $('.tilt-div').tilt({
      maxTilt: 2,
      glare: true,
      maxGlare: .3
    })
  } else {

  }
})

// mouse overs for bgs
document.getElementById("got-link").addEventListener("mouseover", function () {
  document.querySelector('body').style.backgroundColor = "#e0df96"
  document.getElementById("got-image").style.opacity = "1";
}, false);
document.getElementById("got-link").addEventListener("mouseout", function () {
  if (clicked === false) {
    console.log(clicked === false);
    document.getElementById("got-image").style.opacity = "0";
  }
  document.querySelector('body').style.backgroundColor = "#EBEBEB";
}, false);

//star wars game
document.getElementById("sw-link").addEventListener("mouseover", function () {
  document.querySelector('body').style.backgroundColor = "#b0cdfc"
  document.getElementById("sw-image").style.opacity = "1";
}, false);
document.getElementById("sw-link").addEventListener("mouseout", function () {
  if (clicked === false) {
    document.getElementById("sw-image").style.opacity = "0";
  }
  document.querySelector('body').style.backgroundColor = "#EBEBEB";
}, false);


//tsf
document.getElementById("tsf-link").addEventListener("mouseover", function () {
  document.querySelector('body').style.backgroundColor = "#fc3835"
  document.getElementById("tsf-image").style.opacity = "1";
}, false);
document.getElementById("tsf-link").addEventListener("mouseout", function () {
  if (clicked === false) {
    document.getElementById("tsf-image").style.opacity = "0";
  }
  document.querySelector('body').style.backgroundColor = "#EBEBEB";
}, false);


//star wars game
document.getElementById("wgg-link").addEventListener("mouseover", function () {
  document.querySelector('body').style.backgroundColor = "#4a8de0"
  document.getElementById("wgg-image").style.opacity = "1";
}, false);
document.getElementById("wgg-link").addEventListener("mouseout", function () {
  if (clicked === false) {
    document.getElementById("wgg-image").style.opacity = "0";
  }
  document.querySelector('body').style.backgroundColor = "#EBEBEB";
}, false);

//onclicks for links

$(document).on('click', '#about-link', function () {
  $('.about-me').css({
    "left": "0"
  })
})

$(document).on('click', '#back-to-home', function () {
  $('.about-me').css({
    "left": "-100%"
  })
})


$(document).on('click', '#github-icon', function () {
  window.location.href = "https://www.github.com/robaboyd";
})

$(document).on('click', '#linkedin-icon', function () {
  window.location.href = "https://www.linkedin.com/in/robert-boyd-99bb0664/";
})

$(document).on('click', '.project-links', function () {
  clicked = true;
  $('.project-info').css({
    "right": '0',
    "width": '100%',
    "height": '100vh',
    "position": 'absolute',
    "z-index": '5'
  });

  setTimeout(function () {
    $('.project-links').css({
      "display": "none"
    })
  }, 500)

  if (this.id === 'tsf-link') {
    console.log(this.id)
    $('#tsf-image').css({
      "opacity": "1 !important",
      "z-index": "6",
      "width": "50%",
      "top": "10%",
      "left": "25%"
    })
    $("#description").text("Search any Marvel Comic Book character to see their comics, the events they are in, and the Actor who has portrayed them.");

    $("#project-github").attr("href", "https://github.com/robaboyd/theSecretFiles");

    $("#live-link").attr("href", "https://robaboyd.github.io/theSecretFiles/index.html");
  }

  if (this.id === 'got-link') {
    $('#got-image').css({
      "opacity": "1 !important",
      "z-index": "6",
      "width": "50%",
      "top": "10%",
      "left": "25%"
    })

    $("#description").text("Game of Thrones Trivia! Can you get them right?");

    $("#project-github").attr("href", "https://github.com/robaboyd/TriviaGame");

    $("#live-link").attr("href", "https://robaboyd.github.io/Homework/TriviaGame/index.html");

  }

  if (this.id === 'sw-link') {
    $('#sw-image').css({
      "opacity": "1 !important",
      "z-index": "6",
      "width": "50%",
      "top": "10%",
      "left": "25%"
    })

    $("#description").text("This is a Star Wars Rpg made with javascript.");

    $("#project-github").attr("href", "https://github.com/robaboyd/Unit-4-Game");

    $("#live-link").attr("href", "https://robaboyd.github.io/Homework/unit-4-game/index.html");
  }

  if (this.id === 'wgg-link') {
    $('#wgg-image').css({
      "opacity": "1 !important",
      "z-index": "6",
      "width": "50%",
      "top": "10%",
      "left": "25%"
    })

    $("#description").text("A simple hangman like game made with javascript.");

    $("#project-github").attr("href", "https://github.com/robaboyd/Word-Guess-Game");

    $("#live-link").attr("href", "https://robaboyd.github.io/Homework/Word-Guess-Game/index.html");
  }

})

$(document).on('click', '#back-to-home-2', function () {
  clicked = false;
  $('.project-links').css({
    "display": "block"
  })
  $('.project-info').css({
    "background-color": "#ffffff",
    "width": "100%",
    "height": "100vh",
    "position": "absolute",
    "z-index": "5",
    "right": "200%",
    "transition": "all .5s ease"
  });
  $('#tsf-image').css({
    "position": "absolute",
    /* z-index: 1; */
    "width": "40%",
    "height": "100%",
    "left": "5%",
    "top": "30%",
    "height": "auto",
    "opacity": "0",
    "transition": "all .5s ease",
    "box-shadow": "0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)",
    "transform": "translateZ(20px)",
    "border": "3px solid white"
  })
  $('#sw-image').css({
    "position": "absolute",
    /* z-index: 1; */
    "width": "40%",
    "height": "100%",
    "left": "5%",
    "top": "30%",
    "height": "auto",
    "opacity": "0",
    "transition": "all .5s ease",
    "box-shadow": "0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)",
    "transform": "translateZ(20px)",
    "border": "3px solid white"
  })
  $('#got-image').css({
    "position": "absolute",
    /* z-index: 1; */
    "width": "40%",
    "height": "100%",
    "left": "5%",
    "top": "30%",
    "height": "auto",
    "opacity": "0",
    "transition": "all .5s ease",
    "box-shadow": "0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)",
    "transform": "translateZ(20px)",
    "border": "3px solid white"
  })
  $('#wgg-image').css({
    "position": "absolute",
    /* z-index: 1; */
    "width": "40%",
    "height": "100%",
    "left": "5%",
    "top": "30%",
    "height": "auto",
    "opacity": "0",
    "transition": "all .5s ease",
    "box-shadow": "0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)",
    "transform": "translateZ(20px)",
    "border": "3px solid white"
  })
})