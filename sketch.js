function setup() {
    createCanvas(450, 450);
  background (400);
  }
  
  function draw() {
    
    fill("black")
    
    //console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
    
      square(mouseX, mouseY, 5);
    }
  }