// let name = "jamal";
// function displayInfo(){
//     console.log(name);
    
//     name = "suruj";
//     console.log(name);
//     return 0
// }

// console.log( 5++ );



function printChe() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let char = "A";
    let line = "";
    for (let j = 0; j < i; j++) {
      line += char;
      char = String.fromCharCode(char.charCodeAt(0) + 1);
    }
    console.log(line);
  }
}

printChe();