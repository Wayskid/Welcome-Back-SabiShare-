/*Menu Option*/

const main = document.querySelector(".main");
const aside = document.querySelector(".aside")
const burger = document.querySelector(".burger");
let homeEmpty = document.querySelector(".spanHome");
let loginEmpty = document.querySelector(".spanLogin");
let signupEmpty = document.querySelector(".spanSignup");

burger.addEventListener("click", () => {

    if (homeEmpty.textContent.length == 0) {
        aside.style.width = "15%";
        homeEmpty.textContent = "Home";
        main.style.width = "85%";
        aside.style.transition = "0.9s";
    } else{
        homeEmpty.textContent = "";
        aside.style.width = "7%";
        main.style.width = "93%";
    }

    if (loginEmpty.textContent.length == 0) {
        loginEmpty.textContent = "Login";
    } else{
        loginEmpty.textContent = "";
    }

    if (signupEmpty.textContent.length == 0) {
        signupEmpty.textContent = "SignUp";
    } else{
        signupEmpty.textContent = "";
    }
    
    
});



/*Click to copy*/

/*1st Button*/
const clickCopy1 = document.querySelector(".clickCopy1");

clickCopy1.addEventListener("click", () => {
  const copiedContent = document.querySelector(".md5Text").textContent;

  navigator.clipboard.writeText(copiedContent);
});

/*2nd Button*/
document.querySelector(".clickCopy2").addEventListener("click", () => {
  const copiedContent = document.querySelector(".shaText").textContent;

  navigator.clipboard.writeText(copiedContent);
});

/*MediaQuery*/

const mediaQuery = window.matchMedia("(max-width:720px)");

if (mediaQuery.matches) {
  alert("It matches");
}
