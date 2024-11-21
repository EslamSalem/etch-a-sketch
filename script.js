const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset");

drawGrid(16);

resetBtn.addEventListener("click", () => {
  let grid = prompt("Enter the Dimensions:");

  if (grid < 1 || isNaN(grid)) {
    alert("Enter a valid number!");
    return;
  }
  if (grid > 100) {
    alert("100 is the limit!");
    return;
  }

  container.replaceChildren();
  drawGrid(+grid);
})

function drawGrid(grid) {
  for (let i = 0; i < grid; i++) {

    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
  
    for (let j = 0; j < grid; j++) {
  
      let cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
  
      cell.addEventListener("mouseenter", (e) => {
        let currentCell = e.target;
        currentCell.style.opacity = +getComputedStyle(currentCell).opacity + 0.1;
      });
    }
  }
}