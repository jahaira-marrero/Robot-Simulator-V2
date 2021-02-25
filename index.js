document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
});

const container = document.querySelector("ul")
console.log(container)

function loadLeft() {
  const li = document.createElement("li")
  li.textContent = "left"
  container.append(li)
  li.addEventListener("click", function(event){
    event.target.remove()
  })
}

function loadRight() {
  const li = document.createElement("li")
  li.textContent = "right"
  container.append(li)
  li.addEventListener("click", function(event){
    event.target.remove()
  })
}

function loadUp() {
  const li = document.createElement("li")
  li.textContent = "up"
  container.append(li)
  li.addEventListener("click", function(event){
    event.target.remove()
  })
}

function loadDown() {
  const li = document.createElement("li")
  li.textContent = "down"
  container.append(li)
  li.addEventListener("click", function(event){
    event.target.remove()
  })
}

document.addEventListener("keydown", function(e) {
switch (e.key) { 
  case "ArrowLeft": 
    loadLeft(); 
      break;
  case "ArrowRight":
    loadRight();
      break;
  case "ArrowUp":
      loadUp();
        break;
  case "ArrowDown":
      loadDown();
        break;
      default:
        return}
})

const button = document.querySelector("#move-button")

button.addEventListener("click", function(){
  const moves = container.querySelectorAll("li")
  const arrayMoves = Array.from(moves)

  let i = arrayMoves.length

  function myLoop() {
    setTimeout(function() {
      move(arrayMoves[0].innerText)
      arrayMoves[0].remove()
      arrayMoves.shift();
      i--;
      if (i > 0) {
        myLoop();
      }
    }, 500)
  }

  myLoop();

  }
)

