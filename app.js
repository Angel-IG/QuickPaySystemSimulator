let nRows;
document.body.onload = () => {
  nRows = parseInt(prompt('Insert the number of rows the supermarket have. Please enter an integer number:'));
  while (isNaN(nRows) || parseInt(nRows) <= 0) {
    nRows = parseInt(prompt('Invalid input. Please enter an integer number. This number will be the number of rows of the supermarket:'));
  }
  document.getElementById('paragraphs').innerHTML += '<p>This supermarket have ' + nRows + ' rows.</p>';
};
