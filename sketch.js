//press any mouse button on the canvas

let balls = [];

function setup() {
	createCanvas(700, 500);
	// for (i=0; i<100; i++){
	// 	balls.push(new Ball(random(width), random(height), random(20, 40)));
	// }
}

function draw() {
	background(200);
	for (i of balls) {
		i.display();
		i.move();
		i.friction();
		i.bounce();

		let overlapping= false;
		for (m of balls){
			if(i!==m && i.intersects(m)) {	//we don't want to color it for every time it intersects, true or false is enough for us
			overlapping = true;
		}

		if (overlapping) {
			i.changeColor(255,0,0,100);
		}
		else {
			i.changeColor(100,100,100,100);
		}
	}
}
}

function mousePressed() {
	balls.push(new Ball(mouseX, mouseY, random(30, 40)));
}
