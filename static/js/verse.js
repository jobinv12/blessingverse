/*
    Math.random() returns a number between 0 and 1 excluding 1 itself.
    That together with floor function returns a number between 0 and
    max-1 (here max = sentence.length) and fits the zero-based numbering
    of the elements in the array
*/
function getSentence () {
    //Check cookie is present
    var userVerse=getCookie("userVerse");
    if (userVerse != "") {
      alert("your verse is: " + userVerse);
      return userVerse;
    } else {
       userVerse = getRandomSentence();
       alert("your random verse is: " + userVerse);
       if (userVerse != "" && userVerse != null) {
         setCookie("userVerse", userVerse, 30);
         return userVerse;
       }
    }
}

function getRandomSentence () {
    var index= Math.floor(Math.random() * (sentences.length));
    return sentences[index];
}
function getVerse(){
  // get the canvas element you want to write to
  var canvas = document.getElementById("woodcut");
  // get a handle for the above canvas (here 2d only for simple text)
  var context = canvas.getContext("2d");
  // the canvas is blank the first time only, so erase the content
  // even if it is already blank, checking for it would be more
  // complicated and slower, too
  context.clearRect(0, 0, canvas.width, canvas.height);
  // choose a font (you can choose the size also as you can see)
  context.font = "30px Arial";
  // the letters are filled and they are filled in red
  context.fillStyle = "red";
  // center the text horizontally
  context.textAlign = "center";
  // put a random line in the middle of the canvas
  // the +10 account for the fonttype's height
  context.fillText(getSentence(),canvas.width/2, canvas.height/2 + 10);
}


function checkCookie() {
  }

  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  
  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  
var sentences= [
    'Psalms 23:1',
    'Jeremiah 17:7-8',
    'Numbers 6:24-26',
    'Psalm 20:4',
    'Proverbs 16:3',
    'Jeremiah 29:11'
    ];

