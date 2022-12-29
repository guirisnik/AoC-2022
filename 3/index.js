import "./array.extensions.mjs";
import { readFileSync } from "node:fs";

const ITEMS = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const input = readFileSync("input", { encoding: "utf-8" });

const part1 = input
  .split("\n")
  .map((sackContent) => [
    sackContent.slice(0, sackContent.length / 2),
    sackContent.slice(sackContent.length / 2),
  ])
  .map(([firstCompartment, secondCompartment]) =>
    Array.from(firstCompartment).find((item) =>
      secondCompartment.includes(item)
    )
  )
  .map(toPriority)
  .reduce(sumAll);

const part2 = input
  .match(/\w+\r?\n\w+\r?\n\w+/g)
  .map(splitRucksackGroup)
  .map(findBadge)
  .map(toPriority)
  .reduce(sumAll);

function sumAll(acc, priority) {
  return (acc += priority);
}

function toPriority(item) {
  return Array.from(ITEMS).findIndex((value) => value === item);
}

function splitRucksackGroup(rucksackGroup = "") {
  return rucksackGroup.split(/\r?\n/g);
}

function findBadge(rucksackGroup = ["", "", ""]) {
  const rucksacksAsArrays = rucksackGroup.map((rucksack) =>
    Array.from(rucksack)
  );

  const [uniqueBadge] = rucksacksAsArrays[0]
    .intersection(rucksacksAsArrays[1])
    .intersection(rucksacksAsArrays[2]);

  return uniqueBadge;
}

console.log(part1);
console.log(part2);
