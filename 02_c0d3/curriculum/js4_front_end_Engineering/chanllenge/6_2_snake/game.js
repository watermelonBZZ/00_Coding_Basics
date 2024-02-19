import { drawFood, updateFood } from "./food.js";
import { drawSnake, updateSnake, SNAKE_SPPED, getHead, sneakIntersection} from './snake.js' // !!
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('gameBoard')

function main(currentTime) {

    if (gameOver) {

        if(confirm('You lost. Press ok to restart.')){
            window.location = '/6_2_snake.html'
        }
        return 
    }
    //keep refresh the page
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    //only update the snake on certain speed
    if (secondsSinceLastRender < 1 / SNAKE_SPPED) return

    lastRenderTime = currentTime

    //updating the js data of snake and fruit


    //draw/render the data on screen
    update()
    draw()

}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    //每次渲染之前，清空
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getHead()) || sneakIntersection()
}