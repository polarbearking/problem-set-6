/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
    let ctx = document.getElementById('canvas1').getContext('2d');
    ctx.font = "48px sans-serif";
    ctx.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx.strokeText('Hello, World!', 10, 50);
  }

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let ctx = document.getElementById('canvas2').getContext('2d');
  let width = Number(prompt("Enter the width of the rectangle."));
  let height = Number(prompt("Enter the height of the rectangle."));
  let x = Number(prompt("Enter the x-coordinate of the rectangle"));
  let y = Number(prompt("Enter the y-coordinate of the rectangle"));
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    if(isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
        ctx.clearRect(0, 0, canvas2.width, canvas2.height);
        alert("One of your inputs is not a number");
      }
    if (width<=1) {
      alert("Your width is too small");
      width = null
    }
    if (height<=1) {
      alert("Your height is too small");
      height = null
    }
    if (x<5) {
      alert("Your x value is too small");
      x = null
    }
    if (y<5) {
      alert("Your y value is too small");
      y = null
    }
    if (0>=canvas.width-x-width || 0>=canvas.height-y-height) {
      width = null
      ctx.clearRect(0, 0, canvas2.width, canvas2.height)
      alert("The drawing is too large to fit on the canvas.")
    }
    if (width==null || height==null || x==null || y==null) {
      ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    }
      ctx.strokeRect(x, y, width, height);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let ctx = document.getElementById('canvas3').getContext('2d');
  let color = prompt("Enter a valid color");
  let iColor = color
  ctx.clearRect(0, 0, canvas2.width, canvas2.height);
  switch(color) {
    case color='black':
      break;
    case color='blue':
      break;
    case color='green':
      break;
    case color='orange':
      break;
    case color='purple':
      break;
    case color='red':
      break;
    case color='yellow':
      break;
    default:
      alert(iColor + " is not a supported color");
      ctx.clearRect(0, 0, canvas3.width, canvas3.height);
      color = 'white'
}
  ctx.fillStyle = color;
  ctx.fillRect(10, 10, 100, 50);
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let ctx = document.getElementById('canvas4').getContext('2d');
  let side1 = Number(prompt("Enter side 1."));
  let side2 = Number(prompt("Enter side 2."));
  let side3 = Number(prompt("Enter side 3."));
  if ((side1**2) + (side2**2) != (side3**2)){
    side1 = null
    side2 = null
    side3 = null
    alert("Not a valid right triangle.")
    ctx.clearRect(0, 0, canvas4.width, canvas4.height)
  }
/*  if (x + width > canvas4.width || y + height > canvas4.height) {
    width = null
    ctx.clearRect(0, 0, canvas4.width, canvas4.height)
    alert("The drawing is too large to fit on the canvas.")
  }*/
  ctx.clearRect(0, 0, canvas4.width, canvas4.height)
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(10, 10+side1);
  ctx.lineTo(10+side2, 10+side1)
  ctx.lineTo(10, 10);
  ctx.stroke();
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let ctx = document.getElementById('canvas5').getContext('2d');
  let r = Number(prompt("Enter a radius."));

  ctx.clearRect(0, 0, canvas5.width, canvas5.height);
  ctx.beginPath();
  ctx.arc(r+10, r+10, r, 0, Math.PI*2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc((r+10)+r/2, (r+10)-r/2, r*.1, 0, Math.PI*2);
  ctx.stroke();
  ctx.beginPath()
  ctx.arc((r+10)-r/2, (r+10)-r/2, r*.1, 0, Math.PI*2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc((r+15)-r/4, (r+15)-r/4, r*.7, 0, Math.PI);
  ctx.stroke();
  if (r<1) {
    ctx.clearRect(0, 0, canvas5.width, canvas5.height)
    alert("The radius was too small.")
  }
  if (r>canvas5.width) {
    ctx.clearRect(0, 0, canvas5.width, canvas5.height)
    alert("The smiley face will not fit on the canvas.")
  }
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let ctx =document.getElementById('canvas6').getContext('2d');
  ctx.clearRect(0, 0, canvas6.width, canvas6.height);
    let outerR=Number(prompt("Enter an outer radius"));
    let innerR=Number(prompt("Enter an inner radius"));
    if (outerR<=innerR){
      ctx.clearRect(0, 0, canvas6.width, canvas6.height);
      alert("Outer radius must be larger than inner radius.")
    }
    if (innerR<1 || outerR<1) {
      ctx.clearRect(0, 0, canvas6.width, canvas6.height);
      alert("One of your dimensions are to small.")
    }
      let outerx=[];
      let outery=[];
      let innerx=[];
      let innery=[];
      for(let i=0;i<5;i++){
        outerx.push(Math.cos((Math.PI*2*i)/5-(Math.PI/2))*outerR+125);
        outery.push(Math.sin((Math.PI*2*i)/5-(Math.PI/2))*outerR+125);
        innerx.push(Math.cos(((Math.PI*2*i)/5)-(Math.PI/2)+(Math.PI/5))*innerR+125);
        innery.push(Math.sin(((Math.PI*2*i)/5)-(Math.PI/2)+(Math.PI/5))*innerR+125);
      }
      ctx.beginPath();
      ctx.moveTo(outerx[0], outery[0]);
      for(let j=0;j<outerx.length;j++){
        ctx.lineTo(innerx[j], innery[j]);
        ctx.lineTo(outerx[j+1], outery[j+1]);
      }
      ctx.lineTo(outerx[0], outery[0]);
      ctx.stroke();
      ctx.closePath();
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let ctx = document.getElementById('canvas7').getContext('2d');
  ctx.clearRect(0, 0, canvas7.width, canvas7.height);
  let sidelength=80;
  let center=[10+(80)/2+80/Math.sqrt(2), 10+(80/2)+(80/Math.sqrt(2))];
  let pointx=[];
  let pointy=[];

  for(let i=0;i<8;i++){
    pointx.push(Math.cos(((Math.PI*2*i)/8)-Math.PI/8)*100+center[0]);
    pointy.push(Math.sin(((Math.PI*2*i)/8)-Math.PI/8)*100+center[1]);
  }
  ctx.beginPath();
  ctx.moveTo([pointx][0], pointy[0]);
  for(let j=0;j<pointx.length;j++){
    ctx.lineTo(pointx[j], pointy[j]);
  }
  ctx.lineTo(pointx[0], pointy[0]);
  ctx.stroke();

  ctx.fillStyle="red";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.textAlign="center";
  ctx.font="60px Arial";
  ctx.fillStyle="white";
  ctx.fillText("STOP", center[0], center[1]+15);
  ctx.closePath()
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let ctx =document.getElementById('canvas8').getContext('2d');
  ctx.clearRect(0, 0, canvas8.width, canvas8.height);
  let sideLength=Number(prompt("Enter a side length"));
  let x=10;
  let y=canvas8.height-10;
  let i=0;
  let lineNumber=1;
  while(i<5){
    for(let j=0+lineNumber;j<=5;j++){
      ctx.strokeRect(x,y-sideLength,sideLength,sideLength);
      x+=sideLength;
    }
    x=10+(sideLength/2)*lineNumber;
    y-=sideLength;
    lineNumber++;
    i++;
  }
  if (sideLength>100){
    ctx.clearRect(0, 0, canvas8.width, canvas8.height);
    alert("The pyramid will not fit on the canvas.")
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let ctx = document.getElementById('canvas9').getContext('2d');
  let base= prompt("Enter a color for the house.");
  let door= prompt("Enter a color for the door.");
  while(true){
    if (base=="red" || base=="blue" || base=="brown" || base=="green" || base=="orange" || base== "purple" || base=="yellow" || door=="red" || door=="blue" || door=="brown" || door=="green" || door=="orange" || door=="purple" || door=="yellow"){
      break;
    } else {
      alert("One of your colors are invalid.")
    }
  }
  ctx.fillStyle=base;
  ctx.fillRect(150 , canvas9.height-400-10, 650, 400);

  ctx.fillStyle=door;
  ctx.fillRect(150+(650/2)-30, canvas9.height-400-10+300, 60, 100);
  ctx.strokeRect(150+(650/2)-30, canvas9.height-400-10+300, 60, 100);
  ctx.stroke();


  ctx.fillStyle="gray";
  ctx.moveTo(150, canvas9.height-400-10);
  ctx.lineTo(430, 155);
  ctx.lineTo(800, canvas9.height-400-10);
  ctx.lineTo(150, canvas9.height-400-10);
  ctx.fill();

  ctx.fillStyle="LightBlue";
  ctx.fillRect(300, canvas9.height-400-10+100, 75, 75);
  ctx.fillRect(575, canvas9.height-400-10+100, 75, 75);
  ctx.fillRect(300, canvas9.height-400-10+200, 75, 75);
  ctx.fillRect(575, canvas9.height-400-10+200, 75, 75);
  ctx.closePath();
}
