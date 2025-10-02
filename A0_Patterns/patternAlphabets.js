const pattern1 = (n) => {
  for (let row = 1; row <= n; row++) {
    let character = 65;
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData += String.fromCharCode(character);
      character++;
    }
    console.log(rowData);
  }
};
const pattern2 = (n) => {
  for (let row = 1; row <= n; row++) {
    let character = 65;
    let rowData = "";
    for (let col = 1; col <= n - row + 1; col++) {
      rowData = rowData + String.fromCharCode(character);
      character++;
    }
    console.log(rowData);
  }
};
const pattern3 = (n) => {
  let character = 65;
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData = rowData + String.fromCharCode(character);
    }
    console.log(rowData);
    character++;
  }
};

const pattern4 = (n) => {
  let character = 65;
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let space = 1; space <= n - row; space++) {
      rowData = rowData + " ";
    }
    let character = 65;
    for (let col = 1; col <= row; col++) {
      rowData = rowData + String.fromCharCode(character);
      character++;
    }
    character = 65 + row - 2;
    for (let col = row - 1; col >= 1; col--) {
      rowData = rowData + String.fromCharCode(character);
      character--;
    }
    console.log(rowData);
    character++;
  }
};
const pattern5 = (n) => {
  let character = 65;

  for (let row = 1; row <= n; row++) {
    let character = 65 + n - row;
    let rowData = "";

    for (let col = 1; col <= row; col++) {
      rowData += String.fromCharCode(character);
      character++;
    }
    console.log(rowData);
  }
};
const n = 5;
console.log("-----PAttern1 start-----");
pattern1(n);
console.log("-----PAttern1 end-----");
console.log("-----PAttern2 start-----");
pattern2(n);
console.log("-----PAttern2 end-----");
console.log("-----PAttern3 start-----");
pattern3(n);
console.log("-----PAttern3 end-----");
console.log("-----PAttern4 start-----");
pattern4(n);
console.log("-----PAttern4 end-----");
console.log("-----PAttern5 start-----");
pattern5(n);
console.log("-----PAttern5 end-----");
