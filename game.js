"use strict";
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.player;
    this.enemies = [];
  }
  startLoop() {
    const loop = () => {
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      window.requestAnimationFrame(loop);
    };

    window.requestAnimationFrame(loop);
  }

  updateCanvas() {}

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawCanvas() {}
}
