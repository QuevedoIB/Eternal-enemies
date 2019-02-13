"use strict";
class Enemy {
  constructor(canvas, y) {
    this.size = 20;
    this.canvas = canvas;
    this.x = this.canvas.width;
    this.y = y;
    this.context = this.canvas.getContext("2d");
    this.speed = 5;
    this.direction = -1;
  }
  update() {
    this.x = this.x + this.direction * this.speed;
  }

  draw() {
    this.context.fillStyle = "red";
    this.context.fillRect(this.x, this.y - this.size / 2, this.size, this.size);
  }
}
