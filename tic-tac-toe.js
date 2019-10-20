//Load page before js
window.onload = () => {
  boardtable();
}

//Setting Grids on page + displaying squares

const boardtable = () => {

  let board = document.getElementById("board");
  // let gridSquare = document.getElementsByClassName("square");
  let blocks = board.getElementsByTagName("div");

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].className = "square";
  
  }
  
  
}
