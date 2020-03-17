
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (matrix == undefined) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0){
            for (let j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j]);
            }
        }
        else {
            for (let j = matrix[i].length -1; j >= 0; j--) {
                arr.push(matrix[i][j]);
            }
        }
    }
  return arr;
}

function towelSort (matrix) {
    return [];
  }

console.log(towelSort([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
   ]));
