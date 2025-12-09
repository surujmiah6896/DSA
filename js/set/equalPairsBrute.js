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

/**
 * this solve with hash map approach is more optimal
 * leetcode 2352. Equal Row and Column Pairs
 * https://leetcode.com/problems/equal-row-and-column-pairs/
 * @param {*} grid 
 * @returns
 */

function equalPairsHashMap(grid) {
    if(!grid || grid.length === 0) return 0;

    const n = grid.length;
  const  rowMap = new Map();
    let count = 0;
    
    for(let r=0; r < n; r++){
        const rowKey = grid[r].join(',');
        rowMap.set(rowKey, (rowMap.get(rowKey) || 0) + 1);
    }

    for(let c=0; c < n; c++){
        const colArr = [];
        for(let r=0; r < n; r++){
            colArr.push(grid[r][c]);
        }
        const colKey = colArr.join(',');
        if(rowMap.has(colKey)){
            count += rowMap.get(colKey);
        }
    }
    return count;
}

console.log(equalPairsHashMap(grid1));