import { readFileSync } from "node:fs";

const input = readFileSync("input", { encoding: "utf-8" });

const sectionAssignementPairs = input.split(/\r?\n/g);

const fullyContainedPairs = sectionAssignementPairs.filter(
  filterFullyContainedPairs
);

const overlappingPairs = sectionAssignementPairs.filter(filterOverlappingPairs);

function filterFullyContainedPairs(pair) {
  const { 0: first, 1: second } = pair
    .split(",")
    .map((sections) => sections.split("-").map(Number));

  const isBFullyContainedInA = (A, B) => A[0] <= B[0] && A[1] >= B[1];

  return (
    isBFullyContainedInA(first, second) || isBFullyContainedInA(second, first)
  );
}

function filterOverlappingPairs(pair) {
  const { 0: first, 1: second } = pair
    .split(",")
    .map((sections) => sections.split("-").map(Number));

  const hasOverlap = (A, B) => A[1] >= B[0];

  return first[0] < second[0]
    ? hasOverlap(first, second)
    : hasOverlap(second, first);
}

console.log("stop");
