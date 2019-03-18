var currentPlayer = 'x'; // Player 'x' goes first

var placeMarker = (location) => {
  document.getElementById(location)
    .innerHTML = '<p style="text-align: center; font-size: 25px">' + currentPlayer + '</p>';
    
  if (currentPlayer === 'x') {
    currentPlayer = 'o';
  } else {
    currentPlayer = 'x';
  }
};