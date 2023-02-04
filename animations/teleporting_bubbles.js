// let p5Instance;

// Modal
$('#bubblesModal').on('shown.bs.modal', function (e) {
  let p5Instance;

  let sketch = function(p) {
    let index;
    let circles = [
      {x: 23, y: 23, d: 15, theta: 0},
      {x: 55, y: 55, d: 25, theta: 0},
      {x: 55, y: 55, d: 25, theta: 0},
      {x: 55, y: 55, d: 25, theta: 0},
      {x: 55, y: 55, d: 25, theta: 0}
    ];

    p.setup = function() {
      p.createCanvas(576, 324);
      index = 0;
      p.fill('red');
      while (index < circles.length) {
        circles[index].x = p.random(0, 576);
        circles[index].y = p.random(0, 324);
        circles[index].d = p.random(10, 80);
        circles[index].theta = p.random(0, p.HALF_PI);
        index++;
      }
    };

    p.draw = function() {
      p.background('yellow');

      index = 0;
      p.fill('blue');
      while (index < circles.length) {
        p.drawingContext.shadowOffsetX = 5;
        p.drawingContext.shadowOffsetY = -5;
        p.drawingContext.shadowBlur = 10;
        p.drawingContext.shadowColor = 'black';
        p.circle(circles[index].x, circles[index].y, circles[index].d);
        index++;
      }

      index = 0;
      while (index < circles.length) {
        circles[index].x += 2 * p.cos(circles[index].theta);
        circles[index].y += 2 * p.sin(circles[index].theta);

        if (circles[index].x >= 576) {
          circles[index].x = 0;
        } else if (circles[index].x <= 0) {
          circles[index].x = 576;
        }
        if (circles[index].y >= 324) {
          circles[index].y = 0;
        }
        index++;
      }
    };
  };
  p5Instance = new p5(sketch, 'bubbles-canvas');
});

$('#bubblesModal').on('hidden.bs.modal', function (e) {
  p5Instance.remove();
});
