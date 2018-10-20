
document.getElementById("about-btn").onclick = function () { openAbout() };
document.getElementById("close-btn").onclick = function () { close() };

function openAbout() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("about").style.left = "0";
  document.getElementById("side").style.marginLeft = "50%";
  document.getElementById("main-title").style.fontSize = "70px";
  document.getElementById("small-text").style.marginLeft = "20px";
}

function close() {
  if (document.getElementById("main").style.marginLeft = "25%") {
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("about").style.left = "-50%";
    document.getElementById("side").style.marginLeft = "0";
    document.getElementById("main-title").style.fontSize = "100px";
    document.getElementById("small-text").style.marginLeft = "30px";
  }
}