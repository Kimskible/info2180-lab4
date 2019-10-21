//0 is X and 1 is O
 const state = ['X', 'O'];
 var check = 0;

//Load page before js
window.onload = () => {
  boardtable();

  //Adding an X or O
  board.addEventListener("click", (e) =>{
    if (e.target.nodeName === "DIV") {

      if (state[check] == 'X') {
         e.target.classList.add("X");
         e.target.innerHTML = "X";
         check++;
      } else {
        e.target.classList.add("O");
        e.target.innerHTML = "O";
        check--;
      }
    // console.log(e.target.nodeName);
    }
  })
}

//Setting Grids on page + displaying squares
const boardtable = () => {
  var board = document.getElementById("board");
  var blocks = board.getElementsByTagName("div");

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].className = "square";
  }  
}

