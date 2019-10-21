//0 is X and 1 is O
state = [];

//Load page before js
window.onload = () => {
  boardtable();

}

//Setting Grids on page + displaying squares
const boardtable = () => {
  var board = document.getElementById("board");
  var blocks = board.getElementsByTagName("div");

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].className = "square";
  }  
}

