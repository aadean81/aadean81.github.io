const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/screen.jpg") {
        myImage.setAttribute("src", "images/second.jpg");
    } else {
        myImage.setAttribute("src", "images/screen.jpg");
    }
};


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

const myButton = document.querySelector("button");
  myButton.onclick = () => {
    setUserName();
  };