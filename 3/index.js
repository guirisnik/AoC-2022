import { readFileSync } from "node:fs";

const ITEMS = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const input = readFileSync("input", { encoding: "utf-8" });

// const total = input
//   .split("\n")
//   .map((sackContent) => [
//     sackContent.slice(0, sackContent.length / 2),
//     sackContent.slice(sackContent.length / 2),
//   ])
//   .map(([firstCompartment, secondCompartment]) =>
//     Array.from(firstCompartment).find((item) =>
//       secondCompartment.includes(item)
//     )
//   )
//   .map((item) => Array.from(ITEMS).findIndex((value) => value === item))
//   .reduce((acc, priority) => (acc += priority));

// console.log(total);

input.match(/\w+\n\w+\n\w+/g)