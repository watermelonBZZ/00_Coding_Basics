import { getInputDirection } from "./input.js";

export const SNAKE_SPPED = 5 //!!

const snakeBody = [
    { x: 11, y: 11 }
]
let newSegment = 0




export function updateSnake() {
    // console.log(snakeBody)
    addSegment(newSegment)
    const inputDirection = getInputDirection()

    function updatesnakeBody(i = snakeBody.length - 2){
        if(i >= 0){
            snakeBody[i + 1] = { ...snakeBody[i] }
            return updatesnakeBody(i-1)
        }
        snakeBody[0].x += inputDirection.x
        snakeBody[0].y += inputDirection.y

    }
    updatesnakeBody()
    
}


export function drawSnake(gameBoard) {
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement('div')
        snakeElement.classList.add('snake')
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.style.gridRowStart = segment.y
        
        gameBoard.appendChild(snakeElement)
    })
}
export function expandSnake(amount) {
    newSegment += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) { return false }
        return equalPosition(segment, position)
    })
}

export function getHead() {
    return snakeBody[0]
}

export function sneakIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

export function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y

}

function addSegment(i = newSegment) {
    if (i === 0) return newSegment = 0
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    return addSegment(i - 1)
}