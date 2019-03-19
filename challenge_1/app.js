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
    document.getElementById('messages').innerHTML = `It's player ${this.state.currentPlayer}'s turn!`;
    this.state.currentBoard[row][column] = this.state.currentPlayer;
    this.checkStatus(row, column);
    if (this.state.currentPlayer === 'x') {
      this.state.currentPlayer = 'o';
    } else {
      this.state.currentPlayer = 'x';
    }  
  }

  // Check for match
  checkStatus(row, column) {
    console.log('Checkity!');
    this.checkRow(row);
    this.checkCol(column);
    this.checkMajDiag(row,column);
    this.checkMinDiag(row,column);
  }

  winMessage() {
    document.getElementById('messages').innerHTML = `Player ${this.state.currentPlayer} has won!`;
  };
  checkRow(row) {
    var row = this.state.currentBoard[row];
    for (var c = 0; c < row.length; c++) {
      if (row[c] !== this.state.currentPlayer) {       
        return; 
      }
      winMessage();
    }
  }
  checkCol(column) {
    var board = this.state.currentBoard;
    for (var r = 0; r < board.length; r++) {
      if (board[r][column] !== this.state.currentPlayer) {
        return;
      }
      winMessage();
    }
  }
  checkMajDiag(row, column) { // Top left to bottom right
    var startingRow;
    var startingColumn;
    var board = this.state.currentBoard;

    if (row < column) {
      startingRow = 0;
      startingColumn = column - row;
    } else {
      startingRow = row - column;
      startingColumn = 0;
    }

    for (var r = startingRow; r < board.length; i++) {
      if (board[r][startingColumn] !== this.state.currentPlayer) {
          return;
      }
      startingColumn++;
    }

    winMessage();
  }
  checkMinDiag(row, column) { // Bottom left to top right

  }
}

// VIEW
var updateView = () => {
  document.getElementById('messages').innerHTML = `It's player ${board.state.currentPlayer}'s turn!`;
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