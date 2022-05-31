/*Menu Option*/

const desktopQuery = window.matchMedia("(min-width:720px)");
const mobileQuery = window.matchMedia("(max-width:720px)");
const burger = document.querySelector(".burger");
const main = document.querySelector(".main");
const aside = document.querySelector(".aside");
const asideMobile = document.querySelector(".asideMobile");
const asideLinks = document.querySelector(".asideLinks");



if (desktopQuery.matches) {burger.addEventListener("click", () => {
  
    asideLinks.classList.toggle("showLinks")
    main.classList.toggle("shrinkMain");
    burger.classList.toggle("cross")
    }
     )}

else if(mobileQuery.matches){burger.addEventListener("click", () => {
  
      burger.classList.toggle("cross")
      asideMobile.classList.toggle("showAsideMobile");
      }
       )};




//Made page refresh on resize //

window.addEventListener("resize" , () => {
    location.reload()
    console.log("working");
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


