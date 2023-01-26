let stoppingFunction = false;
let setSecondAlreadyOn = false;
let onceforcapturecontainer = false;
let stopwatchStartStop = false;
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
        // start.removeEventListener("click", StopwatchFunc);
        stoppingFunction = false;
        onceFuncForStopWatch = false;
        //stopwatchStartStop is for prevent multiple running function when start is clickedx`
        stopwatchStartStop = false;
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
      change_main_content_header("Keep In Time");
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
  const info_box = document.querySelector(".info-box-container");
  change_main_content_header("stopwatch");
  clearTheMainNumberText();
  const divControlCont = document.createElement("div");
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
  createButtonContainer("stop");
  createButtonContainer("start");
  createButtonContainer("reset");
  createButtonContainer("capture");
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
  createButton("warning", "STOP", "stop");
  createButton("success", "START", "start");
  createButton("danger", "RESET", "reset");
  createButton("secondary", "CAPTURE", "capture");
  const Date = document.querySelector(".date");
  Date.textContent = "";

  //the reason onceFunc is make the start button clickable just once so after start button got click the start will not able to click again and after reset button clicked the start button will be able to click again
  onceFunc = false;
  //start and reset
  //capture
  const start = document.querySelector(".btn-success");

  let milisecond = 0;
  let second = 0;
  let minute = 0;
  stopwatchintervalstop = false;
  start.addEventListener("click", () => {
    if (stopwatchStartStop !== true) {
      start.parentNode.classList.add("visually-hidden");
      let GetAllTextSecond = document.querySelectorAll(".current");
      let textsecond = [...GetAllTextSecond];
      stopwatchStartStop = true;
      onceFuncCapt = false;
      stop.classList.remove("visually-hidden");
      reset.parentNode.classList.remove("visually-hidden");
      capture.parentNode.classList.remove("visually-hidden");
      stopwatchinterval = setInterval(() => {
        milisecond++;
        if (milisecond == 100) {
          second++;
          milisecond = 0;
          if (second == 60) {
            minute++;
            second = 0;
          }
        }
        textsecond[2].textContent = ("0" + milisecond.toString()).slice(-2);
        textsecond[1].textContent = ("0" + second.toString()).slice(-2);
        textsecond[0].textContent = ("0" + minute.toString()).slice(-2);
      }, 10);
    }
  });
  const stop = document.querySelector(".stop");
  stop.classList.add("visually-hidden");
  stop.addEventListener("click", () => {
    clearInterval(stopwatchinterval);
    stopwatchStartStop = false;
    stop.classList.add("visually-hidden");
    control_container.style.gap = "4em";
    capture.parentNode.classList.add("visually-hidden");
    start.parentNode.classList.remove("visually-hidden");
  });
  const reset = document.querySelector(".btn-danger");
  reset.parentNode.classList.add("visually-hidden");
  reset.addEventListener("click", () => {
    let GetAllTextSecond = document.querySelectorAll(".current");
    let textsecond = [...GetAllTextSecond];
    if (typeof stopwatchinterval !== undefined) {
      clearInterval(stopwatchinterval);
    }
    minute = 00;
    second = 00;
    milisecond = 00;
    textsecond.forEach((e) => (e.textContent = "00"));
    stopwatchStartStop = false;
    onceforcapturecontainer = false;
    onceFunc = false;
    const capturecontainer = document.querySelector(".capture-container");
    if (capturecontainer !== null) {
      capturecontainer.replaceChildren();
      capturecontainer.remove();
    }
    stop.classList.add("visually-hidden");
    reset.parentNode.classList.add("visually-hidden");
    capture.parentNode.classList.add("visually-hidden");
    start.parentNode.classList.remove("visually-hidden");
  });

  const capture = document.querySelector(".btn-secondary");
  capture.parentNode.classList.add("visually-hidden");
  capture.addEventListener("click", () => {
    setInterval(stopwatchinterval, 10);
    if (minute != 0 || second != 0 || milisecond != 0) {
      if (onceforcapturecontainer !== true) {
        const capturecontainercreate = document.createElement("div");
        capturecontainercreate.classList.add("col");
        capturecontainercreate.classList.add("capture-container");
        capturecontainercreate.classList.add("w-75");
        capturecontainercreate.classList.add("h-75");
        capturecontainercreate.classList.add("mb-3");
        capturecontainercreate.classList.add("mt-3");
        onceforcapturecontainer = true;
        info_box.appendChild(capturecontainercreate);
      }
      let capturecontainer = document.querySelector(".capture-container");
      const row = document.createElement("div");
      row.classList.add("row");
      row.classList.add("h-100");
      const col = document.createElement("div");
      const col2 = document.createElement("div");
      col.classList.add("col");
      col.classList.add("h-100");
      col.classList.add("fs-3");
      col2.classList.add("col");
      col2.classList.add("text-end");
      col2.textContent = "test";
      col2.classList.add("fs-3");
      col.textContent =
        ("0" + minute.toString()).slice(-2) +
        ":" +
        ("0" + second.toString()).slice(-2) +
        ":" +
        ("0" + milisecond.toString()).slice(-2);
      milisecond;
      row.appendChild(col);
      row.appendChild(col2);

      // console.log(milisecond);
      capturecontainer.prepend(row);

      // console.log(thenumberofrows);
      const thenumberofrows = [...capturecontainer.querySelectorAll(".row")];

      if (thenumberofrows.length > 1) {
        let forDeletion = [":"];
        let previousCapture = parseInt(
          [...thenumberofrows[1].firstChild.textContent.toString()]
            .filter((item) => !forDeletion.includes(item))
            .join("")
        );
        let currentCapture = parseInt(
          [...thenumberofrows[0].firstChild.textContent.toString()]
            .filter((item) => !forDeletion.includes(item))
            .join("")
        );
        let g = [
          ...(("00000" + (currentCapture - previousCapture))
            .slice(-6)
            .toString() + "+"),
        ];
        function insertAt(array, index, ...elementsArray) {
          array.splice(index, 0, ...elementsArray);
        }
        insertAt(g, 2, ":");
        insertAt(g, 5, ":");
        col2.textContent = g.join("");
      } else col2.textContent = col.textContent + "+";
    }
  });
  control_container.addEventListener("click", (e) => {
    if (e.target != stop.firstChild) control_container.style.gap = "0em";
    else control_container.style.gap = "4em";
  });
}
