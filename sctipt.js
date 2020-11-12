const circle = document.getElementById("circle_range_line");
const emptyCircle = document.getElementById("circle_range_empty-line")
const radius = circle.r.baseVal.value;
const levelColor = document.getElementById("level_color");
const levelText = document.getElementById("level_text");
const circumference = circle.r.baseVal.value * 2 * Math.PI;

const loaderPercentage = document.getElementById("loader_percentage_num");

circle.style.strokeDashoffset = radius * 2 * Math.PI;
circle.style.strokeDasharray = `${circumference} ${circumference}`;

emptyCircle.style.strokeDasharray = `${circumference} ${circumference}`;

(function () {
///////////////////////here you can change percentage
  const percent = 81;

  let i = 0;
  (function k() {

    if (i < 30) {
      levelColor.style.backgroundColor = "#e91313";
      levelText.innerHTML = "низкая"
    } else if (i < 60) {
      levelColor.style.backgroundColor = "#ffcf00"
      levelText.innerHTML = "средняя"
    } else {
      levelColor.style.backgroundColor = "#20fa1b"
      levelText.innerHTML = "высокая"
    }

    loaderPercentage.innerHTML = i;

    const offSet = circumference - i / 100 * circumference;
    circle.style.strokeDashoffset = offSet;

    if (i++ !== percent) {
      setTimeout(
        k,
        i === 0
          ? 0
          : (Math.round(percent / 2)) <= i
          ? (i / 2) + 1
          : 50 / (i / i + 1)
      );
    }

  })()
})()
