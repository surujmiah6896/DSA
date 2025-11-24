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
