
/*jshint esversion: 6 */

class Fire {

    constructor(ctx, firePosX, firePosY, fireW, fireH, canvasSize, speed) {
        
        this.ctx = ctx;

        this.firePos = {
            x: firePosX,
            y: firePosY
        };

        this.fireSize = {
            w: fireW,
            h: fireH
        };

        this.canvasSize = canvasSize;

        this.fireSpeed = speed;

        this.fireImage = new Image();
        this.fireImage.src = './images/FUEGOFIJO3.png';

        this.drawFire();
    }

    drawFire() {

        this.moveFire();
        this.ctx.drawImage(this.fireImage, this.firePos.x, this.firePos.y, this.fireSize.w, this.fireSize.h);

    }

    moveFire() {

        this.firePos.x -= this.fireSpeed;
    }

}