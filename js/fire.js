/*jshint esversion: 6 */

class Fire {

    constructor(ctx, firePosX, firePosY, canvasSize, speed) {
        
        this.ctx = ctx;

        this.firePos = {
            x: firePosX,
            y: firePosY
        };

        this.width = 170;
        this.height = 70;

        this.canvasSize = canvasSize;

        this.fireSpeed = speed;

        this.fireImage = new Image();
        this.fireImage.src = './images/fire.png';

        this.fireImage.frames = 8;
        this.fireImage.framesIndex = 0;

    }




    /* FIRE ANIMATION / USE FRAMES */
    
    draw(framesCounter) {

        this.moveFire();

        this.ctx.drawImage(

            this.fireImage,
            this.fireImage.framesIndex * Math.floor(this.fireImage.width / this.fireImage.frames),
            0,
            Math.floor(this.fireImage.width / this.fireImage.frames),
            this.fireImage.height,
            this.firePos.x,
            this.firePos.y,
            this.width,
            this.height
        );

        this.animate(framesCounter);
    }



    /* FIRE MOVE BY PX */
    
    animate(framesCounter) {

        if (framesCounter % 8 == 0) {
            this.fireImage.framesIndex++;
        }
        
        if (this.fireImage.framesIndex > this.fireImage.frames - 1) {
            this.fireImage.framesIndex = 0;

          }
    }

    

    /* FIRE MOVE FROM NEGATIVE-X */
    
    moveFire() {

        this.firePos.x -= this.fireSpeed;
    }

}