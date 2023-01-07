let stoppingFunction = false;
let setSecondAlreadyOn = false;
function setSecondsAndMinutes() {
  const secondContainer = document.querySelector("#second");
  const current = secondContainer.querySelector(".current");
  const next = secondContainer.querySelector(".next ");
  if (stoppingFunction !== true) {
    if (current != null) {
      current.style.transform = "translateY(-22.5rem)";
      next.style.transform = "translateY(-22.5rem)";
      current.textContent = ("0" + new Date().getSeconds().toString()).slice(
        -2
      );
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

      MinNext.textContent = ("0" + new Date().getMinutes().toString()).slice(
        -2
      );
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
}

// trigger the clock
clockInterval = setInterval(() => setSecondsAndMinutes(), 1000);

////sinc the minute with the seconds
function setHour() {
  const hour = document.getElementById("hour");
  const hourCurrent = hour.querySelector(".current");
  const hourNext = hour.querySelector(".next");
  const minutesReference = new Date().getMinutes().toString();

  if (stoppingFunction !== true) {
    //check if the MinCurrent exist cuz in the main function class current will switch to previous
    if (hourCurrent != null) {
      hourCurrent.textContent = ("0" + new Date().getHours().toString()).slice(
        -2
      );
    }

    if (minutesReference == "0") {
      hourCurrent.style.transform = "translateY(-19rem)";
      hourNext.style.transform = "translateY(-19rem)";
      hourNext.textContent = ("0" + new Date().getHours().toString()).slice(-2);
      hourCurrent.setAttribute("class", "previous");
      setTimeout(() => {
        const hourNext = hour.querySelector(".next ");
        hourNext.style.transform = "translateY(0rem)";
        hourNext.style.transition = "0s";
        const hourprevious = hour.querySelector(".previous");
        hourprevious.remove();
        const base = document.createElement("span");
        base.setAttribute("class", "next");
        hour.appendChild(base);
        clearInterval(clockInterval);
      }, 400);
      setTimeout(() => {
        hourNext.setAttribute("class", "current");
        hourCurrent.style.color = "white";
      }, 700);
      setTimeout(() => {
        hourCurrent.style.transform = "translateY(0rem)";
        hourNext.style.transform = "translateY(0rem)";
      }, 700);
    }
  }
}
// c();
setHour();
let HourCheckInterval = setInterval(() => {
  setHour();
}, 1000);

const info_box = document.querySelector(".info-box-container");
function setDate() {
  // const info_box = document.querySelector(".info-box-container");
  // const divControlDate = document.createElement("div");
  // divControlCont.classList.add("row");
  // divControlCont.classList.add("control-container");
  // info_box.appendChild(divControlCont);
  const spanDate = document.createElement("span");
  spanDate.classList.add("date");
  spanDate.classList.add("fs-3");
  info_box.appendChild(spanDate);
  if (stoppingFunction !== true) {
    spanDate.textContent = new Date().toString().slice(0, 15);
  }
}
setDate();

// toggle

// const main_main_content = main_content.forEach;
const nav_button = document.querySelector(".nav-button");
const hamburger = document.querySelector(".hamburger");
const main = document.querySelector("main");
const side = document.querySelector(".side");
addEventListener("click", (e) => {
  if (e.target == nav_button || e.target.className == "hamburger") {
    side.style.transform = "translateX(0em)";
    nav_button.classList.replace("nav-button", "nav-close");
    hamburger.classList.replace("hamburger", "close-hamburger");
    main.style.transform = "translateX(-3em)";
  } else if (
    document.querySelector(".close-hamburger") != null &&
    e.target.className == "close-hamburger"
  ) {
    side.style.transform = "translateX(5em)";
    nav_button.classList.replace("nav-close", "nav-button");
    document
      .querySelector(".close-hamburger")
      .classList.replace("close-hamburger", "hamburger");
    main.style.transform = "translateX(3em)";
  }
});

function clearTheMainNumberText() {
  const current = document.querySelectorAll(".current");
  const next = document.querySelectorAll(".next ");
  clearInterval(clockInterval);
  stoppingFunction = true;

  current.forEach((item) => {
    item.textContent = "00";
  });
  next.forEach((item) => {
    item.textContent = "00";
  });
}

//stopwatch
onceFuncForStopWatch = false;
side.addEventListener("click", (e) => {
  switch (e.target) {
    case document.querySelector(".clock-nav"):
      const start = document.querySelector(".btn-success");
      if (start != null) {
        start.removeEventListener("click", StopwatchFunc);
        stoppingFunction = false;
        onceFuncForStopWatch = false;
        setSecondsAndMinutes();
        setHour();
        clockInterval = setInterval(() => setSecondsAndMinutes(), 1000);
        hourCheckInterval = setInterval(() => {
          setHour();
        }, 1000);
        clearInfoBox();
        setDate();
        if (typeof stopwatchinterval !== "undefined") {
          clearInterval(stopwatchinterval);
        }
      }
      break;
    case document.querySelector(".stopwatch"):
      if (onceFuncForStopWatch != true) {
        onceFuncForStopWatch = true;

        clearInterval(clockInterval);
        stopwatch();
      }
      break;
    case document.querySelector(".world-clock"):
      console.log("e");
      break;
    case document.querySelector(".timer"):
      console.log("e");
      break;
    case document.querySelector(".calendar"):
      console.log("e");
      break;
    case document.querySelector(".info"):
      console.log("e");
      break;

    default:
      break;
  }
});

function change_main_content_header(text) {
  document.querySelector(".main-content-header").textContent = text;
}
function clearInfoBox() {
  const info_box = document.querySelector(".info-box-container");
  info_box.replaceChildren();
}
function stopwatch() {
  change_main_content_header("stopwatch");
  clearTheMainNumberText();
  const divControlCont = document.createElement("div");
  const info_box = document.querySelector(".info-box-container");
  divControlCont.classList.add("row");
  divControlCont.classList.add("control-container");
  info_box.appendChild(divControlCont);
  const control_container = document.querySelector(".control-container");
  function createButtonContainer(Class) {
    const div = document.createElement("div");
    div.classList.add("col-4");
    div.classList.add("button-container");
    div.classList.add(Class);
    control_container.appendChild(div);
  }
  createButtonContainer("start");
  createButtonContainer("reset");
  createButtonContainer("capture");
  // createButtonContainer("start");

  function createButton(btn_color, textNode, Class) {
    const button_start = document.createElement("button");
    const control_container = document.querySelector(
      ".button-container." + Class
    );
    control_container.appendChild(button_start);
    button_start.classList.add("btn");
    button_start.classList.add("btn-" + btn_color);
    button_start.setAttribute("type", "button");
    text_button_start = document.createTextNode(textNode);
    button_start.appendChild(text_button_start);
  }
  createButton("success", "START", "start");
  createButton("danger", "RESET", "reset");
  createButton("secondary", "capture", "capture");
  const Date = document.querySelector(".date");
  Date.textContent = "";

  //the reason onceFunc is make the start button clickable just once so after start button got click the start will not able to click again and after reset button clicked the start button will be able to click again
  onceFunc = false;
  //start and reset
  //capture
  const start = document.querySelector(".btn-success");

  start.addEventListener("click", StopwatchFunc);
}
function StopwatchFunc() {
  onceFunc = true;
  let GetAllTextSecond = document.querySelectorAll(".current");
  let textsecond = [...GetAllTextSecond];
  let milisecond = 00;
  let second = 00;
  let minute = 00;
  stopwatchinterval = setInterval(() => {
    milisecond++;
    textsecond[2].textContent = ("0" + milisecond.toString()).slice(-2);
    if (milisecond == 100) {
      second++;
      milisecond = 0;
      if (second == 60) {
        minute++;
        second = 0;
      }
    }
    textsecond[1].textContent = ("0" + second.toString()).slice(-2);
    textsecond[0].textContent = ("0" + minute.toString()).slice(-2);
  }, 10);
  const mainControlContainer = document.querySelector(".control-container");
  const start = document.querySelector(".btn-success");
  mainControlContainer.addEventListener("click", (e) => {
    const reset = document.querySelector(".btn-danger");
    const capture = document.querySelector(".btn-secondary");

    if (e.target == reset) {
      clearInterval(stopwatchinterval);
      minute = 00;
      textsecond.forEach((e) => (e.textContent = "00"));
      start.addEventListener("click", StopwatchFunc);
      onceFunc = false;
    }
    if (e.target == capture) {
      console.log("y");
    }
  });
  if (onceFunc == true) {
    start.removeEventListener("click", StopwatchFunc);
  }
}
