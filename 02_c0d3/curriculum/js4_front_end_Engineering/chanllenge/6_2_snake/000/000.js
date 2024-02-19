const blockSize = 30
const height = 10
const width = 30
board.style.height = `${height * blockSize}px`
board.style.width = `${width * blockSize}px`

function Block() {
  //都是block的css属性
  //block的方向
  this.getNextPos = dir => {
    switch (dir) {
      case 0: // Left
        return { top: this.top, left: this.left - 1 }
      case 1: // Up
        return { top: this.top - 1, left: this.left }
      case 2: // Right
        return { top: this.top, left: this.left + 1 }
      case 3: // Down
        return { top: this.top + 1, left: this.left }
      default:
        return { top: this.top, left: this.left }
    }
  }

  //设置block位置
  this.setPos = (top, left) => {
    this.top = top
    this.left = left
    element.style.top = `${this.top * blockSize}px`
    element.style.left = `${this.left * blockSize}px`
    element.style.height = `${blockSize}px`
    element.style.width = `${blockSize}px`
  }

  //创建block、class、位置
  const element = document.createElement('div')
  element.classList.add('block')
  board.appendChild(element)
  this.setPos(
    Math.floor(Math.random() * height),
    Math.floor(Math.random() * width)
  )
}


const snake = {
  head: new Block(),
  //默认移动方向：向左移动
  direction: 0,
  move: () => {
    //get 一个obj，包括了head下一次的方向，还没改head
    let pos = snake.head.getNextPos(snake.direction)

    if (pos.top === food.top && pos.left === food.left) {
      food.next = snake.head
      snake.head.previous = food
      snake.head = food
      food = new Block()
      return
    }

    //判断下一步是否超出边界
    updateGame(pos) // Check to see if out of bounds

    //把下一步的位置给尾巴,tail 已改
    snake.tail.setPos(pos.top, pos.left)

    //就是只有一个，移动tail就行
    if (snake.head === snake.tail) return

    // Set up new tail，snake.tail是一个obj
    const tmp = snake.tail //obj with nextPos
    snake.tail = tmp.previous
    snake.tail.next = null // Tail next is always null

    // Setup new head
    tmp.previous = null // Head never have previous
    tmp.next = snake.head
    snake.head.previous = tmp
    snake.head = tmp
  }
}

snake.tail = snake.head // head and tail both start at the same place

let shouldContinue = true

const checkSnakeNode = (pos, node) => {
  if (!node) return false
  if (pos.top === node.top && pos.left === node.left) return true
  return checkSnakeNode(pos, node.next)
}

const updateGame = pos => {
  if (
    pos.top < 0 ||
    pos.top >= height ||
    pos.left < 0 ||
    pos.left >= width ||
    checkSnakeNode(pos, snake.head)
  ) {
    shouldContinue = false
  }
}

const move = () => {
  if (!shouldContinue) {
    return alert('Game over. Please refresh the page to continue')
  }
  snake.move()
  console.log(snake.head.previous)
  setTimeout(move, 500)
}
setTimeout(move, 1000)

//申明一个food Object（有位置和方法）
let food = new Block()

document.onkeyup = e => {
  if (e.keyCode > 36 && e.keyCode < 41) {
    snake.direction = e.keyCode - 37
  }
}