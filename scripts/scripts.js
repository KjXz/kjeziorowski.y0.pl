function hamburger() {
    var x = document.getElementById("menu");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

function openSection(evt, sectionName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("section");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-indigo", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " w3-indigo";
}