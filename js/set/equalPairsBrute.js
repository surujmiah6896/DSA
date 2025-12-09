/**
 * leetcode 2352. Equal Row and Column Pairs
 * https://leetcode.com/problems/equal-row-and-column-pairs/
 * brute force approach
 * @param {*} grid 
 * @returns 
 */
function equalPairsBrute(grid) {
    if(!grid || grid.length === 0) return 0;

    const n = grid.length;
    let count = 0;

    for(let r=0; r < n; r++){
        for(let c=0; c < n; c++){
            let match = true;
            for(let k=0; k < n; k++){
                if(grid[r][k] !== grid[k][c]){
                    match = false;
                    break;
                }
            }
            if(match) count++;
        }
    }
    return count;
}

const grid1 = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];
console.log(equalPairsBrute(grid1));