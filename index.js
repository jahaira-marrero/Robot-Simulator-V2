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
}

function loadRight() {
  const li = document.createElement("li")
  li.textContent = "right"
  container.append(li)
}

function loadUp() {
  const li = document.createElement("li")
  li.textContent = "up"
  container.append(li)
}

function loadDown() {
  const li = document.createElement("li")
  li.textContent = "down"
  container.append(li)
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
  const moves
})

