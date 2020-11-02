class Player {

    constructor(ctx, playerPosX, playerPosY, keys, canvasSize) {

        this.ctx = ctx;

        this.canvasSize = canvasSize;

        this.width = 120; // NO ENTENDEMOS PORQUE NO NOS TOMA EN FORMA DE OBJETO
        this.height = 200;

        this.playerPos = {
            x: playerPosX,
            y: playerPosY
        }

        this.playerKeys = keys;

        this.playerImage = new Image();
        this.playerImage.src = './images/ninja5.png';

        this.playerImage.frames = 3;
        this.playerImage.framesIndex = 0;

        this.playerLife = 5;

        // this.velY = 1;
        // this.gravity = 0.4;
    }

    draw(framesCounter) {
        
        this.ctx.drawImage(

            this.playerImage,
            this.playerImage.framesIndex * Math.floor(this.playerImage.width / this.playerImage.frames),
            0,
            Math.floor(this.playerImage.width / this.playerImage.frames),
            this.playerImage.height,
            this.playerPos.x,
            this.playerPos.y,
            this.width,
            this.height
        );

        this.animate(framesCounter)
    }

    animate(framesCounter) {

        if (framesCounter % 3 == 0) {
            this.playerImage.framesIndex++;
        }
        
        if (this.playerImage.framesIndex > this.playerImage.frames - 1) {
            this.playerImage.framesIndex = 0;

          }
    }

    movePlayer(direction) {

        if (this.playerPos.x > 50 && (this.playerPos.x + this.width) < (this.canvasSize.w - 50)) {

            direction === 'left' ? this.playerPos.x -= 30 : null
            direction === 'right' ? this.playerPos.x += 30 : null

        } else if (this.playerPos.x <= 50) {

            direction === 'left' ? this.playerPos.x -= 0 : null
            direction === 'right' ? this.playerPos.x += 30 : null

        } else if ((this.playerPos.x + this.width) >= (this.canvasSize.w - 50)) {

            direction === 'left' ? this.playerPos.x -= 30 : null
            direction === 'right' ? this.playerPos.x -= 0 : null

        // } else if (this.playerPos.y < this.playerPos.y) {   // Está saltando!
        //     this.playerPos.y += this.velY;
        //     this.velY += this.gravity;
        //     direction === 'left' ? this.playerPos.x -= 30 : null

        //   } else {
        //     this.playerPos.y = this.playerPos.y;
        //     this.velY = 1;
          }
    }   
}