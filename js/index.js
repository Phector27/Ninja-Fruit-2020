/*jshint esversion: 6 */

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };



    function startGame() {
        ninjaGame.init('myCanvas');
    }
};