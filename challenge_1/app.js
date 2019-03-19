// MODEL
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
    if (this.state.currentBoard[row][column]) {
      document.getElementById('messages').innerHTML = 'That spot is already taken!';
      return;
    }
    document.getElementById('messages').innerHTML = '';
    this.state.currentBoard[row][column] = this.state.currentPlayer;
    if (this.state.currentPlayer === 'x') {
      this.state.currentPlayer = 'o';
    } else {
      this.state.currentPlayer = 'x';
    }
  }

  // Check for match
  checkStatus() {

  }
}

// VIEW
var updateView = () => {
  var boxArr = document.getElementById('board').children;
  for (var i = 0; i < boxArr.length; i++) {
    var row = boxArr[i].children;
    for (var r = 0; r < row.length; r++) {
      var input = board.state.currentBoard[i][r] || '_';
      row[r].innerHTML = '[' + input + ']';
    }    
  }
};

// CONTROLLER
var board;
var boxes = document.getElementsByClassName('box');

window.onload = () => {
  board = new Board();
  board.init();
  updateView();
}

Array.from(boxes).forEach((box) => {
  box.addEventListener('click', (e) => {
    var location = e.srcElement.id.split(/row|column/);
    board.mark(location[1] - 1, location[2] - 1);
    updateView();
  });
});

var resetBoard = () => {
  board.init();
  updateView();
}