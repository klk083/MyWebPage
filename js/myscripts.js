function changeParagraph() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

function changeCSSTest(cssFile){
  document.getElementById('theme').setAttribute("href","css/lightMode.css");

}
function toggleTheme() {

            // Obtain the name of stylesheet
            // as a parameter and set it
            // using href attribute.
            var sheets = document
                .getElementsByTagName('link');

            sheets[0].href = "css/lightMode.css";
        }
function testButton() {
  document.getElementById()
}

function swap(sheet) {
  document.getElementById('theme').setAttribute('href',sheet);


}
