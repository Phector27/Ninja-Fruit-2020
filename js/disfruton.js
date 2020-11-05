/*jshint esversion: 6 */

class Disfruton {

    constructor(ctx, fruitPosX, fruitPosY, fruitSizeW, fruitSizeH, canvasSize, speed) {
        
        this.ctx = ctx;

        this.fruitPos = {
            x: fruitPosX,
            y: fruitPosY
        };

        this.fruitSize = {
            w: fruitSizeW,
            h: fruitSizeH
        };

        this.canvasSize = canvasSize;

        this.fruitSpeed = speed;

        this.fruitImage = new Image();
        this.fruitImage.src = './images/disfruton.png';

        this.drawDisfruton();
    }



    /* DISFRUTONES DRAW */
    
    drawDisfruton() {
        
        this.moveDisfruton();
        this.ctx.drawImage(this.fruitImage, this.fruitPos.x, this.fruitPos.y, this.fruitSize.w, this.fruitSize.h);
    
    }



    /* DISFRUTONES MOVE */
    
    moveDisfruton() {

        this.fruitPos.y += this.fruitSpeed;
    }
}