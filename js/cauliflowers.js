class Cauliflower {

    constructor(ctx, fruitPosX, fruitPosY, fruitSizeW, fruitSizeH, canvasSize, speed) {
        
        this.ctx = ctx;

        this.fruitPos = {
            x: fruitPosX,
            y: fruitPosY
        }

        this.fruitSize = {
            w: fruitSizeW,
            h: fruitSizeH
        }

        this.canvasSize = canvasSize;

        this.fruitSpeed = speed;

        this.fruitImage = new Image();
        this.fruitImage.src = './images/cauliflower.png';

        this.drawCauliflower()
    }

    drawCauliflower() {
        
        this.moveCauliflower()
        this.ctx.drawImage(this.fruitImage, this.fruitPos.x, this.fruitPos.y, this.fruitSize.w, this.fruitSize.h)
    
    }

    moveCauliflower() {

        this.fruitPos.y += this.fruitSpeed;
    }
}