class Ball {

	constructor(tempx, tempy, tempr) {
		this.x = tempx;
		this.y = tempy;
		this.r = tempr;
		this.speed = 0;
		this.gravity = 0.25;
		this.fk = 0.05; //works but not great, has to be
		this.rgbR =	100;
		this.rgbG = 100;
		this.rgbB =100;
		this.rgbA =100;
	}

	display(tempR=this.rgbR, tempG=this.rgbG, tempB=this.rgbB, tempA=this.rgbA) {
		noStroke();
		fill(tempR, tempG, tempB, tempA);
		ellipse(this.x, this.y, this.r);
	}

	intersects(other){
		return (dist(this.x, this.y, other.x, other.y)<(this.r+other.r)/2);
	}
	
	move() {
		this.y = this.y + this.speed;
		this.speed += this.gravity - this.fk;
	}

	friction() {
		if (this.speed > 0) {
			this.down = true;
			this.fk = 0.1;
		} else {
			this.down = false
			this.fk = -this.fk;
		}
	}

	changeColor(tempR, tempG, tempB, tempA) {
		this.rgbR =	tempR;
		this.rgbG = tempG;
		this.rgbB =tempB;
		this.rgbA =tempA;
	}

	bounce() {
		if (this.y > height-(this.r/2) || this.y < 0) {
			this.speed = -this.speed;
		}
	}
}
