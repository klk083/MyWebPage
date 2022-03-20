function changeParagraph() {
  document.getElementById("p1").innerHTML = "You changed the paragraph.";
}
function changeParagraph1() {
  document.getElementById("p1").innerHTML = "You change back";
}

function testButton() {
}

function swap(sheet) {
  document.getElementById('theme').setAttribute('href',sheet);
}

function nextPage() {
  location.href = "home.html";
}

function pageSelector(page)  {
    location.href = page;
}
