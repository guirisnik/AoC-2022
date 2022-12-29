function toMatchPoints(opponentsWeapon, myWeapon) {
  switch (opponentsWeapon) {
    case "rock":
      switch (myWeapon) {
        case "rock":
          return 4;
        case "paper":
          return 8;
        case "scissors":
          return 3;
      }
    case "paper":
      switch (myWeapon) {
        case "rock":
          return 1;
        case "paper":
          return 5;
        case "scissors":
          return 9;
      }
    case "scissors":
      switch (myWeapon) {
        case "rock":
          return 7;
        case "paper":
          return 2;
        case "scissors":
          return 6;
      }
  }
}

String.prototype.toRockPaperScissors = function () {
  if (["A", "X"].includes(this)) return "rock";
  if (["B", "Y"].includes(this)) return "paper";
  if (["C", "Z"].includes(this)) return "scissors";

  throw new Error(`Invalid input ${this}`);
};

function mapToRockPaperScissors(match = "") {
  return match
    .split(" ")
    .map((encodedWeapon) => encodedWeapon.toRockPaperScissors());
}

function solution(input) {
  return input
    .split("\n")
    .map(mapToRockPaperScissors)
    .map((match) => toMatchPoints(...match))
    .reduce((acc, points) => (acc += points));
}

export { solution };
