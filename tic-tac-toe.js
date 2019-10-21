//0 is X and 1 is O
 const state = ['X', 'O'];
 var check = 0;

//Setting Grids on page + displaying squares
 const boardtable = () => {
  var board = document.getElementById("board");
  var blocks = board.getElementsByTagName("div");
//Loop to add square
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].className = "square";
  }  
}


function XorO(e) {
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
  
}

function hoverOver(e) {
  var blocks = board.getElementsByTagName("div");

  if (e.target.classList.contains("square")) { 

    for (let i = 0; i < blocks.length; i++) {
      blocks[i].classList.remove("hover");
    }
    e.target.classList.add("hover");
  }
}


//Load page before js
window.onload = () => {
  boardtable();
  board.addEventListener("mouseover", hoverOver);
  //Adding an X or O
  board.addEventListener("click", XorO);
}


