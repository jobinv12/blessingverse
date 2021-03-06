function getVerse() {

  var verseDiv = document.getElementById("versediv");
  verseDiv.innerHTML = checkCookieForVerse();

  var containerDiv = document.getElementById("containerdiv");
  containerDiv.style.visibility = 'visible';

  var nydiv = document.getElementById("nydiv");
  nydiv.style.visibility = 'visible';

  document.getElementById('clickhere').style.display = 'none'
  document.getElementById("clickhere").remove;
}

function checkCookieForVerse() {

  //Check if new year 2021 has arrived
  var d = new Date();
  var n = d.getFullYear();
  if (n == 2021) {
    //Check 2021 cookie is present
    var userVerse = getCookie("verse2021");
    if (userVerse != "") {
      return userVerse;
    } else {
      userVerse = getRandomVerse();
      if (userVerse != "" && userVerse != null) {
        setCookie("verse2021", userVerse, 30);
        return userVerse;
      }
    }
  } else {
    //Check cookie is present
    var userVerse = getCookie("userVerse");
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
}

function getRandomVerse() {
  var index = Math.floor(Math.random() * (sentences.length));
  return sentences[index];
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
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


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie() {
  document.cookie = "userVerse=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

// 150 Blessing Verses compiled by Ancy Jaison
var sentences = [
  'Jeremiah 32:27',
  'Psalm 100:5',
  'Psalm 116:12-14',
  'Isaiah 43:4',
  'Psalm 31:19',
  'Psalm 103:8',
  'James 1:17-18',
  'Psalm 84:11',
  'Jeremiah 29:11',
  'Psalm 34:10',
  'Matthew 11:28-30',
  'John 8:12',
  'Isaiah 61:1',
  'John 15:5',
  'John 14:27',
  'Luke 11:9-13',
  'Isaiah 9:2',
  'Psalm 25:5',
  'Psalm 23:1-2',
  'Matthew 5:6',
  'Psalm 105:7,8',
  'Psalm 25:14',
  'Ezekiel 34:25,26',
  '2 Corinthians 9:8',
  'Proverbs 3:7-8',
  'Ephesians 2:8',
  'Joshua 1:5-9',
  '2 Chronicles 7:14',
  'Isaiah 60:22',
  'Psalm 91:11',
  'Psalm 40:1-3',
  'John 14:27',
  'Malachi 3:10',
  'Proverbs 3:5-6',
  'Joshua 1:9',
  'Hebrews 11:6',
  'Hebrews 11:1',
  'Hebrews 13:5-6',
  'Psalm 46:10',
  'Romans 8:31',
  'Job 42:2',
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
  'Isaiah 43:1-2',
  'Isaiah 54:10',
  'James 4:7',
  '2 Chronicles 7:14',
  'Mark 11:24',
  'Joshua 1:9',
  'Philippians:4:9',
  'Psalm 23:4',
  'Psalm 37:4',
  'Proverbs 3:26',
  'Matthew 6:31-33',
  'Psalm 107:13-16',
  'John 14:13-16',
  'Romans 8:31-35',
  'Psalm 32:8',

  'Deuteronomy 31:8',
  'Isaiah 33:21-22',
  'Isaiah 35:3-4',
  'Isaiah 35:9-10',
  'Isaiah 43:18-19',
  'Isaiah 51:6',
  'Isaiah 52:11-12',
  'Isaiah 54:7-8',
  'Isaiah 54:10',
  'Isaiah 55:8-10',
  'Isaiah 55:11-13',
  'Isaiah 60:18-20',
  'Isaiah 61:10',
  'Daniel 10:10-19',
  'Hosea 14:9',
  'Exodus 14:13-14',
  'Deuteronomy 8:10-18',
  'Deuteronomy 28:9-11',
  'Deuteronomy 28:12-14',
  'Joshua 1:6-7',
  'Joshua 3:5',
  'Joshua 5:9',
  'Job 23:10',
  'Job 37:5',
  'Job 37:14',
  'Psalm 20:7',
  'Psalm 18:25-29',
  'Psalm 18:30-34',
  'Psalm 27:7-10',
  'Psalm 27:13-14',
  'Psalm 30:5',
  'Psalm 32:8-11',
  'Psalm 34:18-19',
  'Psalm 34:8-10',
  '1 Peter 5:13-17',
  'Psalm 37:39-40',
  '1 Chronicles 28:9-10',
  'Psalm 52:5',
  'Psalm 55:22-23',
  'Psalm 59:9',
  'Psalm 66:5',
  'Psalm 66:16-20',
  'Psalm 84:11',
  'Psalm 85:10-13',
  'Psalm 86:17',
  'Psalm 112:3-6',
  'Psalm 143:8',
  'Psalm 145:17-20',
  'Proverbs 8:17-18',
  'Proverbs 14:26-27',
  'Ecclesiastes 3:11',
  'Isaiah 26:3-4',
  'Isaiah 30:20- 21',
  'Isaiah 30:22',
  'Psalm 33:6',
  'Isaiah 40:7-8',
  'Isaiah 45:3',
  'Isaiah 46:10',
  'Isaiah 49:14-15',
  'Isaiah 54:3-4',
  'Isaiah 54:17',
  'Lamentations 3:22-26',
  'Nahum 2:1',
  'Matthew 19:27-30',
  'Matthew 21:22-22',
  'Luke 18:27',
  'Luke 12:7',
  'Romans 2:9-11',
  '1 Corinthians 2:9',
  '2 Corinthians 4:16-18',
  'Ephesians 6:10-15',
  'Philippians 4:13',
  'Philippians 4:19',
  'Revelation 3:7-8',
  'Revelation 2:10',
  'Revelation 2:17',
  '1 Peter 5:6-7',
  '1 Peter 1:24-25',
  'James 4:7-8',
  'Exodus 23:25',
  'Deuteronomy 30:16',
  'Psalm 23:6',
  'Zephaniah 3:20',
  'Zephaniah 3:17',
  'Psalm 31:4'
];
