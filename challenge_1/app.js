// Model
class Board {
  constructor() {
    this.state = {};
  }

  init() {
    this.state = {
      currentPlayer: 'x',
      currentBoard: [
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
      ]
    }
  }

  mark(row, column) {
    this.state.currentBoard[row][column] = this.state.currentPlayer;
    if (this.state.currentPlayer === 'x') {
      this.state.currentPlayer = 'o';
    } else {
      this.state.currentPlayer = 'x';
    }
    console.log(this.state);
  }

  // Check for match
  checkStatus() {

  }
}

// View
// Update DOM with current board


// Controller
var board;
window.onload = () => {
  board = new Board();
  board.init();
  // update with view
}

var boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((box) => {
  box.addEventListener('click', (e) => {
    var location = e.srcElement.id.split(/row|column/);
    board.mark(location[1] - 1, location[2] - 1);
  });
});





// var placeMarker = (location) => {
//   document.getElementById(location)
//     .innerHTML = '<p style="text-align: center; font-size: 25px">' + currentPlayer + '</p>';


// };