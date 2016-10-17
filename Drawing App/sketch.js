var weight = 10 
var strokeColor = "black"

function setup() {
  createCanvas(500,500);
  text('p = Pink, r = Red, l = Blue = g = Green o = Orange y = Yellow',10,15)
}

function draw() {
  if(mouseIsPressed) {
      stroke(strokeColor)
      strokeWeight(weight)
      line(pmouseX,pmouseY,mouseX, mouseY)
  
  }
}


function keyTyped() {
  if (key === 'b') {
    strokeColor = 'black';
  } else if (key === 'p') {
    strokeColor = '#E32173';
    weight = 5
  } else if (key === 'r') {
    strokeColor = 'red';
    weight = 5 
  } else if (key === 'l') {
    strokeColor = 'blue';
    weight = 5
  } else if (key === 'g') {
    strokeColor = 'green';
    weight = 5
  } else if (key === 'o') {
    strokeColor = 'orange';
    weight = 5
  } else if (key === 'y') {
    strokeColor = 'yellow';
    weight = 5
  } else if (key === 'e') {
    strokeColor = 'white';
    weight = 50
  }
}