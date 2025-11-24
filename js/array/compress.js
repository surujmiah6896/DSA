/**
 * @leetcode String Compression
 * @param {*} chars 
 * @returns 
 */
var compress = function (chars) {
  let writeIndex = 0;
  let readIndex = 0;

  while (readIndex < chars.length) {
    let currentChar = chars[readIndex];
    let count = 0;

    while (readIndex < chars.length && chars[readIndex] === currentChar) {
      readIndex++;
      count++;
    }

    chars[writeIndex] = currentChar;
    writeIndex++;

    if (count > 1) {
        const countStr = count.toString();
        for (let digit of countStr) {
            chars[writeIndex] = digit;
            writeIndex++;
        }
    }
  }

  return writeIndex;
};

//# sudocode
//step 1: init read and write index with 0
//step 2: while start read to chars.length
//step 3: get first or current chars
//step 4: current item matching with all elements via loops
//step 5: set currentChar with current position
//step 6: increment writeIndex
//step 7: if count > 1
//step 5: then set count with this char
//step 6: return writeIndex


const chars = ["a", "a", "b", "b", "b", "c"];
console.log(compress(chars));