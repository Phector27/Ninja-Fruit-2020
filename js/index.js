/*jshint esversion: 6 */


/* GAME START WITH START BUTTON CLICK */

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };



    /* START GAME FUNCTION */
    
    function startGame() {
        ninjaGame.init('myCanvas');
    }
};