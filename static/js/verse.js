/*
    Math.random() returns a number between 0 and 1 excluding 1 itself.
    That together with floor function returns a number between 0 and
    max-1 (here max = sentence.length) and fits the zero-based numbering
    of the elements in the array
*/
function getVerse(){
 /* // get the canvas element you want to write to
  var verseDiv = document.getElementById("woodcut");
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
  context.fillText(checkCookieForVerse(),canvas.width/2, canvas.height/2 + 10);
 */
var verseDiv = document.getElementById("versediv");
verseDiv.innerHTML = checkCookieForVerse();

var containerDiv = document.getElementById("containerDiv");
containerDiv.style.visibility='visible';


var nydiv = document.getElementById("nydiv");
nydiv.style.visibility='visible';
}

function checkCookieForVerse () {
    //Check cookie is present
    var userVerse=getCookie("userVerse");
    if (userVerse != "") {
      return userVerse;
    } else {
       userVerse = getRandomVerse();
       if (userVerse != "" && userVerse != null) {
         setCookie("userVerse", userVerse, 30);
         return userVerse;
       }
    }
}

function getRandomVerse () {
    var index= Math.floor(Math.random() * (sentences.length));
    return sentences[index];
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

  function deleteCookie(){
    document.cookie = "userVerse=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
 
// Blessing Verses compiled by Ancy Jaison
var sentences= [
'Jeremiah 32:27',
'Psalm 100:5',
'Psalm 116 : 12',
'Isaiah 43:4',
'Psalm 86:15',
'Psalm 103:8',
'James 1:17 ',
'Psalm 84:11',
'Jeremiah 29:11',
'Psalm 34:10',
'Matthew 11:28-30 ',
'John 8:12',
'Isaiah 61:1',
'John 15:5',
'John 14:27',
'Luke 11:9-13',
'Nehemiah 9:17',
'Exodus:34:6,7',
'Jonah 4:2',
'Nehemiah 9:8',
'Psalm 105:7,8',
'Psalm 25:14',
'Ezekiel 34:25,26',
'1 Corinthians 11:25',
'Malachi :2:14,15',
'Ephesians 2:8',
'Joshua 1:5-9',
'2 Chronicles 7:14',
'Isaiah 60:22,62',
'Psalm 91:11',
'Psalm 40:1-3',
'John 14:27',
'Malachi 3:10',
'Proverbs 3: 5-6',
'Joshua 1:9',
'Hebrews 11:6',
'Psalm 46:10',
'Romans 8:31',
'Job 42:2,',
'Job 9:10',
'Isaiah 46:4',
'Malachi 3:18',
'Luke 18:27',
'Revelation 3:8',
'Matthew 7:7-8 ',
'Isaiah 45:3',
'Isaiah 45:5-7',
'Isaiah 45:22-24',
'Psalm 37:23-24',
'Jeremiah 29:11',
'James 1:2-3',
'Exodus:14:14',
'Romans 8:28',
'Isaiah :43:2',
'Isaiah 54:10',
'James 4:7',
'2 Chronicles 7:14',
'Mark 11:24',
'Joshua 1:9',
'Philippians:4:9',
'Psalm 23:4',
'Psalm 37:4',
'Proverbs :3:5-6',
'Matthew 6:31-33',
'Psalm :107:13-16',
'John:14:13-16',
'Romans :8:31-35',
'Psalm 32:8',
'Deuteronomy 31:8'
];