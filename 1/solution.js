import { readFileSync } from "fs";

String.prototype.toNumber = function () {
  return Number(this);
};

function sum(...nums) {
  let result = 0;
  for (const num of nums)
    result += typeof num == "string" ? num.toNumber() : num;

  return result;
}

function sortDescending(a, b) {
  return b - a;
}

const input = readFileSync("input", { encoding: "utf-8" });

const sumOfCals = input
  .split("\n\n")
  .map((cals) => sum(...cals.split("\n")))
  .sort(sortDescending);

const [first, second, third, ..._rest] = sumOfCals;

console.log(sum(first, second, third));
