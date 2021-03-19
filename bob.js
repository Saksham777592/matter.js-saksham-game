class Bob {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0.1,
            density: 0.9
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        fill(87, 133, 138);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop();
    }
}
