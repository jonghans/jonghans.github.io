let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.jpg') {
      myImage.setAttribute ('src','images/test2.jpg');
    } else {
      myImage.setAttribute ('src','images/test.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '본 페이지는 제작 중입니다.. ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '본 페이지는 제작 중입니다. ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}