//0 is X and 1 is O
 const state = ['X', 'O'];
 var check = 0;

//Setting Grids on page + displaying squares
 const boardtable = () => {
  var board = document.getElementById("board");
  var blocks = board.getElementsByTagName("div");
  var game = document.getElementById("game")
//Loop to add square
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].className = "square";
  }  
}

function XorO(e) {

  if (e.target.classList.contains("square")) {

      if (state[check] == 'X' && e.target.innerHTML == '') {
         e.target.classList.add("X");
         e.target.innerHTML = "X";
         check++;
      } else if (state[check] == 'O' && e.target.innerHTML == ''){
        e.target.classList.add("O");
        e.target.innerHTML = "O";
        check--;
      }
  }
     winner();
}
//Hover over squares
function hoverOver(e) {
  var blocks = board.getElementsByTagName("div");
  if (e.target.classList.contains("square")) { 

    for (let i = 0; i < blocks.length; i++) {
      blocks[i].classList.remove("hover");
    }
    e.target.classList.add("hover");
  }
}
//Hardcode to find the winner - Praises thats its a 3x3 grid
function winner() {
  var board = document.getElementById("board");
  var blocks = board.getElementsByTagName("div");
  let status = document.getElementById("status");
  
  //First row
  if (blocks[0].innerHTML == blocks[1].innerHTML && blocks[0].innerHTML == blocks[2].innerHTML) {

      if (blocks[0].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");

      } else if(blocks[0].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      }
      
  }
  //Second Row
  if (blocks[3].innerHTML == blocks[4].innerHTML && blocks[3].innerHTML == blocks[5].innerHTML) {
      if (blocks[3].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");

      } else if (blocks[3].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      }
  }
  //third Row 
if (blocks[6].innerHTML == blocks[7].innerHTML && blocks[6].innerHTML == blocks[8].innerHTML) {

      if (blocks[6].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");

      } else if (blocks[6].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");

      }
  }
  //First Coluumn
if (blocks[0].innerHTML == blocks[3].innerHTML && blocks[0].innerHTML == blocks[6].innerHTML) {

      if (blocks[0].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");

      } else if (blocks[0].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");

      }
  }
  //Second Column
if (blocks[1].innerHTML == blocks[4].innerHTML && blocks[1].innerHTML == blocks[7].innerHTML) {

      if (blocks[1].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");

      } else if (blocks[1].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");

      }
  }
  //Third Column
if (blocks[2].innerHTML == blocks[5].innerHTML && blocks[2].innerHTML == blocks[8].innerHTML) {

      if (blocks[2].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");

      } else if (blocks[2].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");

      }
  }
  //First Diagonal
if (blocks[0].innerHTML == blocks[4].innerHTML && blocks[0].innerHTML == blocks[8].innerHTML) {

      if (blocks[0].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");

      } else if (blocks[0].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");

      }
  }
  //Second Diagonal
if (blocks[2].innerHTML == blocks[4].innerHTML && blocks[2].innerHTML == blocks[6].innerHTML) {

      if (blocks[2].innerHTML == "X" ) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("you-won");

      } else if (blocks[2].innerHTML == "O"){
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("you-won");
      }
  }

}
//Reset the game
function newgame(e) {
  var board = document.getElementById("board");
  var blocks = board.getElementsByTagName("div");
  let status = document.getElementById("status");

  if(e.target.nodeName === 'BUTTON'){

    status.classList.remove("you-won");
    status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
   
    for (let i = 0; i < blocks.length; i++) {

      if(blocks[i].innerHTML == "X"){
        blocks[i].innerHTML = "";
        blocks[i].classList.remove("X");

      } else if(blocks[i].innerHTML == "O") {
        blocks[i].innerHTML = "";
        blocks[i].classList.remove("O");
      } 

    }
  }

}




//Load page before js
window.onload = () => {
  boardtable();
  board.addEventListener("mouseover", hoverOver);
  //Adding an X or O
  board.addEventListener("click", XorO);
  //button for new game
  game.addEventListener("click", newgame);
}