const grid = document.querySelector("#grid");
const btn = document.querySelector("#btn");

function generateGrid(size) {
  for (let row = 0; row < size; row++) {
    const newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    grid.appendChild(newRow);

    for (let i = 0; i < size; i++) {
      const square = document.createElement("div");
      square.setAttribute("class", "square");
      let opacity = 1;
      function generateRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, ${opacity})`;
        opacity -= 0.1;
      }
      square.addEventListener("mouseover", generateRandomColor);
      newRow.appendChild(square);
    }
  }
}

btn.addEventListener("click", () => {
  const size = +prompt("Enter a number (1<number<64)", "");
  if (size < 1 || size > 64) return alert("Should be between 1 and 64");
  if (size > 1 && size < 64) {
    grid.textContent = "";
    generateGrid(size);
  }
});
generateGrid(16);
