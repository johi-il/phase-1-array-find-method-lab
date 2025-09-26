function superbowlWin(record) {
  // find() returns the first object where result === "W"
  const winRecord = record.find((game) => game.result === "W");

  // If a win is found, return its year; otherwise return undefined
  return winRecord ? winRecord.year : undefined;
}

const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
];

console.log(superbowlWin(record)); 




// code your solution here
