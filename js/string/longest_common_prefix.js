
// function longestCommonPrefix(strs){
//     if(!strs || strs.length ===0) return "";

//     let prefix = "";
//     const firstStr = strs[0];

//     for(let i = 0; i < firstStr.length; i++){
//         const char = firstStr[i];

//         for(let j = 0; j < strs.length; j++){
//             if(i >= strs[j].length || strs[j][i] !== char){
//                 return prefix;
//             }
//         }
//         prefix +=char;
//     }
//     return prefix;
// }

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  return strs.reduce((prefix, current) => {
    while (current.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
    return prefix;
  }, strs[0]);
}


strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));