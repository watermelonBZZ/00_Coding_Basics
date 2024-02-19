import { onSnake, expandSnake } from "./snake.js";
import { randomFoodPosition } from "./grid.js";



let food = getRandomFoodPosition()
//css grid starts at 1 not 0

const EXPASION_RATE = 1

export function updateFood() {
    if (onSnake(food)) {
        expandSnake(EXPASION_RATE)
        food = getRandomFoodPosition()
    }

}

export function drawFood(gameBoard) {

    const foodElement = document.createElement('div')
    foodElement.classList.add('food')
    foodElement.style.gridColumnStart = food.x
    foodElement.style.gridRowStart = food.y
    gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition() {
    let newFoodPosition
    while (!newFoodPosition || onSnake(newFoodPosition)) {
        newFoodPosition = randomFoodPosition()
    }
    return newFoodPosition

}