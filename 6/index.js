import { readFileSync } from "node:fs";

const input = readFileSync("input", { encoding: "utf-8" });

let i = 0;
const START_OF_PACKET_SIZE = 4;
for (
  ;
  new Set(input.slice(i, i + START_OF_PACKET_SIZE)).size < START_OF_PACKET_SIZE;
  i++
);

let j = 0;
const START_OF_MESSAGE_SIZE = 14;
for (
  ;
  new Set(input.slice(j, j + START_OF_MESSAGE_SIZE)).size <
  START_OF_MESSAGE_SIZE;
  j++
);

console.log(i + START_OF_PACKET_SIZE, input.slice(i, i + START_OF_PACKET_SIZE));
console.log(
  j + START_OF_MESSAGE_SIZE,
  input.slice(j, j + START_OF_MESSAGE_SIZE)
);
