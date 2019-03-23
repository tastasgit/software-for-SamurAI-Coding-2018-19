var tintTimer;
var styleElem;
var style = document.createElement('style');
document.head.appendChild(style);

var moviePhase = 0;
var movieInterval = 30;
var movieSteps = 10;
var currentStep;
var movieSetInterval;

function movieStep() {
  currentStep = 0;
  switch (moviePhase) {
  case 0:
    movieSetInterval = setInterval(() => top8(), movieInterval);
    break;
  case 1:
    movieSetInterval = setInterval(() => disqualify(), movieInterval);
    break;
  case 2:
    collapse();
    break;
  }
  moviePhase += 1;
}

function top8() {
  const styleElem = document.createElement('style');
  const gb = 63*(movieInterval-currentStep)/movieInterval + 192;
  styleElem.innerHTML =
    ".top8 { background: rgb(255," + gb + "," + gb + "); }";
  console.log(styleElem);
  style.appendChild(styleElem);
  if (currentStep == movieInterval) clearInterval(movieSetInterval);
  currentStep++;
}

function disqualify() {
  const styleElem = document.createElement('style');
  const lightness = 255*(movieInterval-currentStep)/movieInterval;
  styleElem.innerHTML =
    "tr:not(.keep) { background: rgb(" +
    lightness + "," + lightness + "," + lightness +
    "); }";
  style.appendChild(styleElem);
  if (currentStep == movieInterval) clearInterval(movieSetInterval);
  currentStep++;
}

function collapse() {
  const styleElem = document.createElement('style');
  styleElem.innerHTML = "tr:not(.keep) { display: none; }" +
    ".keep { background: white; }";
  style.appendChild(styleElem);
}

