/*
    Math.random() returns a number between 0 and 1 excluding 1 itself.
    That together with floor function returns a number between 0 and
    max-1 (here max = sentence.length) and fits the zero-based numbering
    of the elements in the array
*/
function getRandomSentence () {
    var index= Math.floor(Math.random() * (sentences.length));
    return sentences[index];
}

var sentences= [
    'Psalms 23:1',
    'Jeremiah 17:7-8',
    'Numbers 6:24-26',
    'Psalm 20:4',
    'Proverbs 16:3',
    'Jeremiah 29:11'
    ];

function scribble(){
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
  context.fillText(getRandomSentence(),canvas.width/2, canvas.height/2 + 10);
}