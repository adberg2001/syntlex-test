const circle = document.getElementById("circle_range_line");
const emptyCircle = document.getElementById("circle_range_empty-line")
const radius = circle.r.baseVal.value;
const circumference = circle.r.baseVal.value * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = radius * 2 * Math.PI;

emptyCircle.style.strokeDasharray = `${circumference} ${circumference}`;

function setProgress(percent) {
  for (let i = 0; i <= percent; i++) {
    setTimeout(() => {
      const offSet = circumference - i / 100 * circumference;
      circle.style.strokeDashoffset = offSet;
    }, 1000)
  }

}

setProgress(81)
