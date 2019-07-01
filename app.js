let nRows;
do {
  nRows = prompt('Insert the number of rows the supermarket have. Please enter an integer number:');
} while (isNaN(nRows) || nRows === 0);
