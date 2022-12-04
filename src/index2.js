function akk() {
  const secondContainer = document.getElementById("second");
  var current = secondContainer.querySelector(".current");
  const next = secondContainer.querySelector(".next ");
  if (current != null) {
    current.style.transform = "translateY(-22.5rem)";
    next.style.transform = "translateY(-22.5rem)";

    current.textContent = ("0" + new Date().getSeconds().toString()).slice(-2);
    next.textContent = ("0" + new Date().getSeconds().toString()).slice(-2);
    current.setAttribute("class", "previous");
  }

  setTimeout(() => {
    const next = secondContainer.querySelector(".next ");
    next.style.transform = "translateY(0rem)";
    next.style.transition = "0s";
    const previous = secondContainer.querySelector(".previous");
    previous.remove();

    const base = document.createElement("span");
    base.setAttribute("class", "next");
    secondContainer.appendChild(base);
  }, 400);
  clearTimeout();
  setTimeout(() => {
    next.setAttribute("class", "current");
    current.style.color = "white";
  }, 700);
  //
  //
  //
  const minute = document.getElementById("minutes");
  const MinCurrent = minute.querySelector(".current");
  const MinNext = minute.querySelector(".next");
  // check if the MinCurrent exist cuz in the main function current will switch to previous
  if (current != null) {
    MinCurrent.textContent = ("0" + new Date().getMinutes())
      .toString()
      .slice(-2);
  }
  if (current.textContent.includes("00")) {
    MinCurrent.style.transform = "translateY(-22.5rem)";
    MinNext.style.transform = "translateY(-22.5rem)";

    MinNext.textContent = ("0" + new Date().getMinutes().toString()).slice(-2);
    MinCurrent.setAttribute("class", "previous");
    setTimeout(() => {
      const MinNext = minute.querySelector(".next ");
      MinNext.style.transform = "translateY(0rem)";
      MinNext.style.transition = "0s";
      const Minprevious = minute.querySelector(".previous");
      Minprevious.remove();

      const base = document.createElement("span");
      base.setAttribute("class", "next");
      minute.appendChild(base);
    }, 400);
    clearTimeout();
    setTimeout(() => {
      MinNext.setAttribute("class", "current");
      MinCurrent.style.color = "white";
    }, 700);
  }
}
akk();
setInterval(() => akk(), 1000);

////sinc the minute with the seconds

// if (secCurrent.textContent.includes("00")) {
//   console.log("dk");
// }

////sinc the minute with the seconds
// function setHour() {
//   const hour = document.getElementById("hour");
//   const hourCurrent = hour.querySelector(".current");
//   const hourNext = hour.querySelector(".next");

//   //check if the MinCurrent exist cuz in the main function class current will switch to previous
//   if (hourCurrent != null) {
//     hourCurrent.textContent = new Date().getHours();
//   }

//   function setHour() {
//     if (MinCurrent.textContent.includes("00")) {
//       hourCurrent.style.transform = "translateY(-22.5rem)";
//       hourNext.style.transform = "translateY(-22.5rem)";

//       hourNext.textContent = ("0" + new Date().getHours().toString()).slice(-2);
//       hourCurrent.setAttribute("class", "previous");
//       setTimeout(() => {
//         const hourNext = hour.querySelector(".next ");
//         hourNext.style.transform = "translateY(0rem)";
//         hourNext.style.transition = "0s";
//         const hourprevious = hour.querySelector(".previous");
//         hourprevious.remove();

//         const base = document.createElement("span");
//         base.setAttribute("class", "next");
//         hour.appendChild(base);
//       }, 400);
//       setTimeout(() => {
//         hourNext.setAttribute("class", "current");
//         hourCurrent.style.color = "white";
//       }, 700);
//     }
//   }

//   if (MinCurrent != null) {
//   }
// }
// setHour();

//
const date = document.querySelector(".date");
date.textContent = new Date().toString().slice(0, 15);
