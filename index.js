let view = {
  displayMessage: function (msg) {
    let messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    let cell = document.getElementById('location');
    cell.setAttribute('class', 'hit');
  },
  
  displayMiss: function (location) {
    let cell = document.getElementById('location');
    cell.setAttribute('class', 'miss');
  },
};

view.displayMessage('00');
view.displayMiss('34');
view.displayMessage('55');
view.displayMiss('12');
view.displayMessage('25');
view.displayMiss('26');

view.displayMessage('Tap tap, is this thing on?');
