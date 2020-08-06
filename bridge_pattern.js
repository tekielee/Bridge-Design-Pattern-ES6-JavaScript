class RedCircle {
	constructor() {
		
	}
	
	drawCircle(radius, x, y) {
		console.log('Drawing Circle[ color : red, radius: ' + radius + ', x: ' + x + ', ' + y + ']')
	}
}

class GreenCircle {
	constructor() {
		
	}
	
	drawCircle(radius, x, y) {
		console.log('Drawing Circle[ color : green, radius: ' + radius + ', x: ' + x + ', ' + y + ']')
	}
}

class Shape {
	constructor(drawAPI) {
		this.drawAPI = drawAPI;
	}
	
	draw() {}
}

class Circle extends Shape {
	constructor(x, y, radius, drawAPI) {
		super(drawAPI);
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.drawAPI = drawAPI;
	}
	
	draw() {
		this.drawAPI.drawCircle(this.radius, this.x, this.y);
	}
}

const redCircle = new Circle(100, 100, 10, new RedCircle());
const greenCircle = new Circle(100, 100, 10, new GreenCircle());

redCircle.draw();
greenCircle.draw();