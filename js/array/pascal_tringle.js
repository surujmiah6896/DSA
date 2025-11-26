/**
 * leet-code 118
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
        if(numRows === 0)return [];

        const tringle = [[1]];

        for(let i = 1; i < numRows; i++){
            const prevRow = tringle[i - 1];
            const newRow = [1];

            for(let j = 1; j<i; j++){
                newRow.push(prevRow[j-1] + prevRow[j]);
            }

            newRow.push(1);
            tringle.push(newRow);
        }
        return tringle;
};


console.log(generate(5));