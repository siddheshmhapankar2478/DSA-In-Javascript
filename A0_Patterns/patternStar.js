const pattern1 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= n; col++) {
      rowData += "*";
    }
    console.log(rowData);
  }
};

const pattern2 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData += "*";
    }
    console.log(rowData);
  }
};

const pattern3 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= n - row + 1; col++) {
      rowData += "*";
    }
    console.log(rowData);
  }
};

const pattern4 = (n) => {
  let stars = 1;
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let space = 1; space <= n - row; space++) {
      rowData += " ";
    }
    for (let col = 1; col <= stars; col++) {
      rowData += "*";
    }
    stars += 2;
    console.log(rowData);
  }
};

const pattern5 = (n) => {
  let stars = 2 * n - 1;
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let space = 1; space <= row - 1; space++) {
      rowData += " ";
    }
    for (let col = 1; col <= stars; col++) {
      rowData += "*";
    }
    stars -= 2;
    console.log(rowData);
  }
};
const pattern6 = (n) => {
  pattern4(n);
  pattern5(n);
};

const pattern7 = (n) => {
  pattern2(n);
  pattern3(n - 1);
};

const pattern8part1 = (n, hideFirst) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= n - row + 1; col++) {
      rowData += "*";
    }
    for (let space = 1; space <= 2 * (row - 1); space++) {
      rowData += " ";
    }
    for (let col = 1; col <= n - row + 1; col++) {
      rowData += "*";
    }
    if (!hideFirst || (hideFirst && row > 1)) {
      console.log(rowData);
    }
  }
};

const pattern8part2 = (n) => {
  for (let row = 1; row <= n; row++) {
    let rowData = "";
    for (let col = 1; col <= row; col++) {
      rowData += "*";
    }
    for (let space = 1; space <= 2 * (n - row); space++) {
      rowData += " ";
    }
    for (let col = 1; col <= row; col++) {
      rowData += "*";
    }
    console.log(rowData);
  }
};
const pattern8 = (n) => {
  pattern8part1(n);
  pattern8part2(n);
};

const pattern9 = (n) => {
  pattern8part2(n);
  pattern8part1(n, true);
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
console.log("-----PAttern7 start-----");
pattern7(n);
console.log("-----PAttern7 end-----");
console.log("-----PAttern8 start-----");
pattern8(n);
console.log("-----PAttern8 end-----");
console.log("-----PAttern9 start-----");
pattern9(n);
console.log("-----PAttern9 end-----");
