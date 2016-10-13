var Jorge = 'blue'

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(Jorge)
  if (mouseX < 8 * windowWidth / 10) {
    jorge = 'red';
  } else if (mouseX < 9 * windowWidth / 10) {
    jorge = 'green';
  }
}