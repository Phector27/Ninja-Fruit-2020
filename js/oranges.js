/*jshint esversion: 6 */

class Orange {

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
        this.fruitImage.src = './images/orange.png';

        this.drawOrange();
    }



    /* ORANGES DRAW */

    drawOrange() {
        
        this.moveOranges();
        this.ctx.drawImage(this.fruitImage, this.fruitPos.x, this.fruitPos.y, this.fruitSize.w, this.fruitSize.h);
    
    }



    /* ORANGES MOVE */
    
    moveOranges() {

        this.fruitPos.y += this.fruitSpeed;
    }
}