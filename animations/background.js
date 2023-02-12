var canvas;
// let center = [Math.floor(windowWidth/2), Math.floor(windowHeight/2)]

let circles = [
  /* Mercury */  {x: 50,  y: 22,  d: 20, color: 'grey'},
  /* Venus */    {x: 85,  y: 38,  d: 20, color: '#e3bb76'},
  /* Earth */    {x: 118, y: 54,  d: 20, color: '#1c821a'},
  /* Mars  */    {x: 154, y: 70,  d: 20, color: '#CC3333'},
  /* Jupiter */  {x: 188, y: 86,  d: 20, color: '#d8ca9d'},
  /* Saturn */   {x: 222, y: 103, d: 20, color: '#c99039'},
  /* Uranus */   {x: 261, y: 118, d: 20, color: '#4FD0E7'},
  /* Neptune */  {x: 293, y: 133, d: 20, color: '#4b70dd'},
  /* Pluto */    {x: 330, y: 148, d: 20, color: '#968570'},

]

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    let index = 0 
    while (index < circles.length) {
        circles[index].x = random(0, windowWidth)
        circles[index].y = random(0, 324);
        circles[index].d = random(10, 80);
        //circles[index].theta = random(0, HALF_PI);
        index++;
    }
}

function draw() {
    background("#0D1B2A");
    fill('yellow')
    noStroke()
    circle(0, 530, 300) // sun
    // background("#1B263B");
    index = 0;
    fill('blue');
    while (index < circles.length) {
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'black';
      circle(circles[index].x, circles[index].y, circles[index].d);
      index++;
    }
}
