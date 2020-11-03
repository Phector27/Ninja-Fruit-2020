/*jshint esversion: 6 */

class Background {

    constructor(ctx, backgroundWidth, backgroundHeight, imgSource, speed) {

        this.ctx = ctx;

      this.backgroundSize = {
        w: backgroundWidth,
        h: backgroundHeight
      };

        this.image = new Image();
        this.image.src = imgSource;

        this.posX = 0;
        this.posY = 0;

        this.backgroundSpeed = speed;
    }

  draw() {
    
    this.ctx.drawImage(this.image, this.posX, this.posY, this.backgroundSize.w, this.backgroundSize.h);
    this.ctx.drawImage(this.image, this.posX + this.backgroundSize.w, this.posY, this.backgroundSize.w, this.backgroundSize.h);
  
    this.move();
}
    
      move() {
        if (this.posX <= -this.backgroundSize.w) {
          this.posX = 0;
        }
        this.posX -= this.backgroundSpeed;
      }

}