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

  // Mark selected square in state
  mark() {

  }

  // Check for match
  checkStatus() {

  }
}

// View
// Update DOM with current board


// Controller
window.onload = () => {
  var board = new Board();
  board.init();
  // update with view
}

//On box click
  // Mark on board
  // Update view on corresponding location
