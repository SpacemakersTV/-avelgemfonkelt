var stars = [];

function setup() {
    var mycanvas = createCanvas(displayWidth, displayHeight);
    mycanvas.parent('canvas');

    for (var i = 0; i < 200; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    background(0);
    for (var i = 0; i < stars.length; i++) {
        stars[i].draw();
    }
}


// star class //
class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(0.25, 1.5);
        this.t = random(TAU);
    }

    draw() {
        this.t += 0.01;
        var scale = this.size + sin(this.t) * 2;
        noStroke();
        ellipse(this.x, this.y, scale, scale);
    }
}