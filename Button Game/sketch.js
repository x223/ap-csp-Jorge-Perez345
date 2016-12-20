var button;
function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton("TOUCH ME!");
  button.mousePressed(randomLocation);
  background(50);
  noStroke();
}
function draw() {
  
}


function randomRectangle() {
    fill(random(255));
    rect(random()*width, random()*height,
      random(400), random(400));
}      
function randomLocation() {
  button.position(random(windowWidth), random(windowHeight));
  background(random(200),random(200),random(200));
  
  
  
  
  
  
  
  
  
}
 