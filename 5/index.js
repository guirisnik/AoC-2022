import { readFileSync } from "node:fs";

class Stack {
  #index = 0;
  #crates = [];

  constructor(index, crates) {
    this.#index = index;
    this.#crates = crates;
  }

  get topCrate() {
    return this.#crates[this.#crates.length - 1];
  }

  liftTopCrate() {
    return this.#crates.pop();
  }

  liftCrates(amount) {
    return this.#crates.splice(this.#crates.length - amount, amount);
  }

  dropCrates(crates = [""]) {
    this.#crates.push(...crates);
  }

  dropCrate(crate = "") {
    this.#crates.push(crate);
  }

  get index() {
    return this.#index;
  }
}

const input = readFileSync("input", { encoding: "utf-8" });

const [initialConfiguration, instructions] = input.split(/\r?\n\r?\n/g);

const stacks = Array.from({ length: 9 }, (v, k) => new Stack(k + 1, []));

initialConfiguration
  .split(/\r?\n/g)
  .reverse()
  .map((row) => {
    for (const crate of row.matchAll(/(?<crate>\[[A-Z]\])/g)) {
      stacks[crate.index / 4].dropCrate(crate[0]);
    }
  });

instructions
  .split(/\r?\n/g)
  .map(parseInstruction)
  .forEach(executeInstruction9001);

function parseInstruction(instruction) {
  const { amount, from, to } = instruction.match(
    /move (?<amount>\d+) from (?<from>\d) to (?<to>\d)/
  ).groups;

  return { amount: Number(amount), from: Number(from) - 1, to: Number(to) - 1 };
}

function executeInstruction({ amount = 0, from = 0, to = 0 }) {
  for (let i = amount; i > 0; i--)
    stacks[to].dropCrate(stacks[from].liftTopCrate());
}

function executeInstruction9001({ amount = 0, from = 0, to = 0 }) {
  stacks[to].dropCrates(stacks[from].liftCrates(amount));
}

console.log(stacks.map((stack) => stack.topCrate).join(""));
