const pattern1 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData += col;
    }
    console.log(rowData);
  }
};

const pattern2 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData += row;
    }
    console.log(rowData);
  }
};

const pattern3 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= n - row + 1; col++) {
      rowData += col;
    }
    console.log(rowData);
  }
};

const pattern4 = (n) => {
  for (let row = 1; row <= n; row++) {
    let num = row % 2;
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData += num % 2;
      num++;
    }
    console.log(rowData);
  }
};
const pattern5 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData += col;
    }
    for (let space = 1; space <= 2 * (n - row); space++) {
      rowData += " ";
    }
    for (let col = row; col >= 1; col--) {
      rowData += col;
    }
    console.log(rowData);
  }
};

const pattern6 = (n) => {
  let num = 1;
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData = rowData + num + " ";
      num++;
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
console.log("-----PAttern6 start-----");
pattern6(n);
console.log("-----PAttern6 end-----");
