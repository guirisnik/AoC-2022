import { readFileSync } from "node:fs";
import { solution } from "./part2.mjs";

const input = readFileSync("input", { encoding: "utf-8" });
const total = solution(input);

console.log(total);
