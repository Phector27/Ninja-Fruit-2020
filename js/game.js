/*jshint esversion: 6 */


// GLOBAL OBJECT:

const ninjaGame = {

    name: 'New Ninja Fruit Game 2020',
    description: ' Ninja fuit game made with Canvas',
    version: '1.2',
    license: undefined,
    authors: 'Heyling Marquez & Héctor Carramiñana',
    canvas: undefined,
    ctx: undefined,
    frames: 0,
    playerPoints: 0,
    framesCounter: 0,
    canvasSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    keys: {
        left: 37,
        right: 39,
        jump: 38,
    },
    background: [],
    audios: {

        cutSound: new Audio('./audios/cutSound.mp3'),
        candySound: new Audio('./audios/candySound.mp3'),
        midgetSound: new Audio('./audios/midgetSound.wav'),
        gameOverSound: new Audio('./audios/gameOverSound1.mp3'),
        victorySound: new Audio('./audios/victorySound.mp3'),
        sawSound: new Audio('./audios/sawSound.mp3'),
        fireSound: new Audio('./audios/fireSound.mp3'),
        sharkSound: new Audio('./audios/SHARK.mp3')

    },

    player: undefined,
    apples: [], oranges: [], pears: [], watermelon: [], candy: [], disfrutones: [],
    obstacles: [],
    fire: [],
    shark: [],
    level: 1,



    // INIT:

    init(id) {

        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        this.setDimensions();
        this.start();
        this.setEventListeners();
    },



    // CANVAS DIMENSIONS:

    setDimensions() {

        this.canvas.setAttribute('width', this.canvasSize.w);
        this.canvas.setAttribute('height', this.canvasSize.h);

    },



    // START GAME FUNCTIONS:

    start() {

        this.reset(this.level);


        this.interval = setInterval(() => {


            this.clear();
            this.drawAll();
            this.isCollision();
            this.nextLevel();


            this.frames += 1;
            this.frames % 120 === 0 ? this.createApples() : null; // jshint ignore:line
            this.frames % 90 === 0 ? this.createOranges() : null; // jshint ignore:line
            this.frames % 130 === 0 ? this.createPears() : null; // jshint ignore:line
            this.frames % 150 === 0 ? this.createWatermelon() : null; // jshint ignore:line
            this.frames % 250 === 0 ? this.createCandy() : null; // jshint ignore:line
            this.frames % 80 === 0 ? this.createDisfruton() : null; // jshint ignore:line


            this.pears.some(elm => elm.drawPears());
            this.apples.some(elm => elm.drawApple());
            this.oranges.some(elm => elm.drawOrange());
            this.watermelon.some(elm => elm.drawWatermelon());
            this.candy.some(elm => elm.drawCandy());
            this.disfrutones.some(elm => elm.drawDisfruton());
            this.obstacles.some(elm => elm.drawObstacle());
            this.fire.some(elm => elm.draw(this.framesCounter));
            this.shark.some(elm => elm.draw(this.framesCounter));


            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++; // jshint ignore:line



            // LEVEL ON SCREEN:
            this.ctx.font = 'bold 60px Turret Road';
            this.ctx.fillStyle = 'white';
            this.ctx.fillText(`LEVEL: ${this.level}`, this.canvasSize.w / 2 - 100, 75);


            if (this.playerPoints >= 0 && this.playerPoints < 700) {

                this.frames % 50 === 0 ? this.createObstacle() : null; // jshint ignore:line
            }

            if (this.playerPoints > 350 && this.playerPoints < 700) {

                this.frames % 70 === 0 ? this.createFire() : null // jshint ignore:line
            }

            if (this.playerPoints > 700 && this.playerPoints < 1000) {

                this.frames % 50 === 0 ? this.createShark() : null // jshint ignore:line
            }



            // SCORE ON SCREEN:

            this.ctx.font = 'bold 60px Turret Road';
            this.ctx.fillStyle = '#5e1f0c';
            this.ctx.fillText(`SCORE: ${this.playerPoints}`, 75, 75);



            // LIVES ON SCREEN:

            this.ctx.font = 'bold 60px Turret Road';
            this.ctx.fillStyle = 'yellow';
            this.ctx.fillText(`LIVES: ${this.player.playerLife}`, this.canvasSize.w - 300, 75);



            //GAME OVER AND VICTORY CALLED FUNCTIONS:

            if (this.player.playerLife <= 0) {
                return this.gameOver();
            }

            if (this.playerPoints >= 1000) {
                return this.victory();
            }

        }, 70);

    },



    // RESET DIFFERENTS LEVELS:

    reset(level) {

        switch (level) {

            case 1:

                this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "./images/backgroundmerluzo.png", 7);
                this.player = new Player(this.ctx, this.canvasSize.w / 2 - 50, this.canvasSize.h - 400, this.keys, this.canvasSize);
                break;

            case 2:

                this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "./images/backgroundnight.png", 25);
                this.player = new Player2(this.ctx, this.canvasSize.w / 2 - 50, this.canvasSize.h - 400, this.keys, this.canvasSize, this.player.playerLife);
                break;

            case 3:

                this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "./images/backgroundaqua.png", 35);
                this.player = new Aquaplayer(this.ctx, this.canvasSize.w / 2 - 50, this.canvasSize.h - 200, this.keys, this.canvasSize);
                break;
        }
    },



    // CREATE FRUITS AND OBSTACLES:

    createApples() {

        const apple = new Apple(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 80, 80, this.canvasSize, 15);
        this.apples.push(apple);
    },

    createOranges() {

        const orange = new Orange(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 80, 80, this.canvasSize, 15);
        this.oranges.push(orange);
    },

    createPears() {

        const pear = new Pear(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 80, 80, this.canvasSize, 15);
        this.pears.push(pear);
    },

    createWatermelon() {

        const watermelon = new Watermelon(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 100, 100, this.canvasSize, 22);
        this.watermelon.push(watermelon);
    },

    createCandy() {

        const candy = new Candy(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 80, 80, this.canvasSize, 20);
        this.candy.push(candy);
    },

    createDisfruton() {

        const disfruton = new Disfruton(this.ctx, Math.random() * this.canvasSize.w - 100, 0, 100, 100, this.canvasSize, 25);
        this.disfrutones.push(disfruton);

    },

    createObstacle() {

        const obstacle = new Obstacle(this.ctx, this.canvasSize.w + 1520, this.canvasSize.h - 175, 90, 60, this.canvasSize, 40);
        this.obstacles.push(obstacle);
    },

    createFire() {

        const fire = new Fire(this.ctx, this.canvasSize.w + 1500, this.canvasSize.h - 185, this.canvasSize, 30);
        this.fire.push(fire);
    },

    createShark() {

        const shark = new Shark(this.ctx, this.canvasSize.w + 1500, Math.random() * this.canvasSize.h + 250, this.canvasSize, 30);
        this.shark.push(shark);
    },



    // PLAYER CONTROL:

    setEventListeners() {

        document.addEventListener('keydown', e => {
            e.keyCode === this.keys.left ? this.player.movePlayer('left') : null; // jshint ignore:line
            e.keyCode === this.keys.right ? this.player.movePlayer('right') : null; // jshint ignore:line
            e.keyCode === this.keys.jump ? this.player.movePlayer('jump') : null; // jshint ignore:line
            // e.keyCode === this.keys.down ? this.player.movePlayer('down') : null; // jshint ignore:line
        });
    },



    // LEVEL UP:

    nextLevel() {

        if (this.playerPoints > 350 && this.level < 2) {

            console.log("entra condicion", this.level);
            this.level += this.level;
            this.reset(this.level);

        } else if (this.playerPoints > 700 && this.level < 3) {

            this.level++;
            this.reset(this.level);
        }
    },



    // DRAW ALL:

    drawAll() {

        this.background.draw();
        this.player.draw(this.framesCounter);

    },



    // COLLISIONS:
    isCollision() {

        this.apples.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.apples = this.apples.filter(elm => elm === 1);
                this.playerPoints += 50;

                this.audios.cutSound.play();
            }
        });


        this.pears.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.pears = this.pears.filter(elm => elm === 1);
                this.playerPoints += 20;

                this.audios.cutSound.play();
            }
        });


        this.oranges.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.oranges = this.oranges.filter(elm => elm === 1);
                this.playerPoints += 35;

                this.audios.cutSound.play();
            }
        });


        this.watermelon.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.watermelon = this.watermelon.filter(elm => elm === 1);
                this.playerPoints += 100;

                this.audios.cutSound.play();
            }
        });


        this.candy.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.candy = this.candy.filter(elm => elm === 1);
                this.player.playerLife += 1;

                this.audios.candySound.play();
            }
        });


        this.disfrutones.forEach(elm => {

            if (this.player.playerPos.x < elm.fruitPos.x + elm.fruitSize.w &&
                this.player.playerPos.x + this.player.width > elm.fruitPos.x &&
                this.player.playerPos.y < elm.fruitPos.y + elm.fruitSize.h &&
                this.player.height + this.player.playerPos.y > elm.fruitPos.y) {

                this.disfrutones = this.disfrutones.filter(elm => elm === 1);
                this.player.playerLife -= 2;

                this.audios.midgetSound.play();
            }
        });


        this.obstacles.forEach(elm => {

            if (this.player.playerPos.x < elm.obstaclePos.x + elm.obstacleSize.w &&
                this.player.playerPos.x + this.player.width > elm.obstaclePos.x &&
                this.player.playerPos.y < elm.obstaclePos.y + elm.obstacleSize.h &&
                this.player.height + this.player.playerPos.y > elm.obstaclePos.y) {

                this.obstacles = this.obstacles.filter(elm => elm === 1);

                if (this.player.playerPos.y <= this.player.posY0) {
                    this.player.playerLife -= 1;

                    this.audios.sawSound.play();
                }
            }
        });


        this.fire.forEach(elm => {

            if (this.player.playerPos.x < elm.firePos.x + elm.width &&
                this.player.playerPos.x + this.player.width > elm.firePos.x &&
                this.player.playerPos.y < elm.firePos.y + elm.height &&
                this.player.height + this.player.playerPos.y > elm.firePos.y) {

                this.fire = this.fire.filter(elm => elm === 1);

                if (this.player.playerPos.y <= this.player.posY0) {
                    this.player.playerLife -= 1;

                    this.audios.fireSound.play();
                }
            }
        });


        this.shark.forEach(elm => {

            if (this.player.playerPos.x < elm.sharkPos.x + elm.width &&
                this.player.playerPos.x + this.player.width > elm.sharkPos.x &&
                this.player.playerPos.y < elm.sharkPos.y + elm.height &&
                this.player.height + this.player.playerPos.y > elm.sharkPos.y) {

                this.shark = this.shark.filter(elm => elm === 1);

                if (this.player.playerPos.y <= this.player.posY0) {
                    this.player.playerLife -= 1;

                    this.audios.sharkSound.play();
                }
            }
        });


    },



    // CLEAR SCREEN:

    clear() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    },



    // VICTORY:

    victory() {

        this.ctx.font = 'bold 200px Turret Road';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText(`YOU WIN`, this.canvasSize.w / 2 - 400, this.canvasSize.h / 4);
        this.ctx.fillText(`🔥🔥FUEGOTE🔥🔥`, this.canvasSize.w / 2 - 900, this.canvasSize.h / 2);
        this.playerPoints = 0;
        this.audios.victorySound.play();
        this.level = 1;
        clearInterval(this.interval);
    },



    // GAME OVER:

    gameOver() {

        this.ctx.font = 'bold 200px Turret Road';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`GAME OVER`, this.canvasSize.w / 2 - 600, this.canvasSize.h / 2);
        this.ctx.fillText(`GAME OVER`, this.canvasSize.w / 2 - 600, this.canvasSize.h / 4);
        this.ctx.fillText(`GAME OVER`, this.canvasSize.w / 2 - 600, this.canvasSize.h - 230);
        this.playerPoints = 0;
        this.audios.gameOverSound.play();
        this.level = 1;
        clearInterval(this.interval);
    }

};