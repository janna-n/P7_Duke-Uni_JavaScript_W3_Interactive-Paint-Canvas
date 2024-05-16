var paintcanvas = document.getElementById("paintingcanvas");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 25;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;

/* This will verify that the given value the user gave is actually a number */
function isNumeric (value) {
  /* This is a standard JavaScript function to determine whether a string is an illegal number (Not-a-Number) */
  return !isNaN(value);
}

function setWidth(value) {
    if (isNumeric(value)) {
        var maxWidth = document.body.clientWidth;
    
      if (parseInt(value) > maxWidth) {
        alert("Uh oh! The entered width exceeds the width of the page. Please enter a smaller value.");
    } 
      else {
        paintingcanvas.width = value;
    }
  }
    else {
    alert("Uh oh! You've entered a non-numeric answer! Please try again.");
  }
}

function setHeight (value) {
  if (isNumeric(value)) {
    paintingcanvas.height = value
  }
  else {
    alert("Uh oh! You've entered a non-numeric answer! Please try again.");
  }
} 

/* To clear the canvas */
function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

/* This paints a circle at location x,y */
function paintCircle (x,y) {
    /* This starts a new circle each time. */
    context.beginPath();
    /* Draw circle using a complete (2*PI) arc around given point */
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

/* To update the global variable we don't use var */
function startPaint() {
  isPainting = true;
}

function endPaint() {
  isPainting = false;
}

function doPaint(x,y) {
  if (isPainting) {
    paintCircle (x,y);
  }
}

function changeColor(newColor) {
  color = newColor
}

function resizeBrush(newSize) {
  radius = newSize
  document.getElementById("sizeOutput").textContent = newSize;
}