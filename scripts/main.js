var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my Website ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
}
else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my Website ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

var myImage = document.querySelector('img');
var myLink =  document.querySelector('a.main_img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  var url = myLink.getAttribute('class');
  if(mySrc === 'images/images.png') {
    myImage.setAttribute('src', 'images/zoso.png');
    url.setAttribute('class', 'https://en.wikipedia.org/wiki/Led_Zeppelin_IV');
  }
  else {
    myImage.setAttribute('src', 'images/images.png');
    url.setAttribute('class', 'https://www.ancient.eu/Yin_and_Yang/');
  }
}
