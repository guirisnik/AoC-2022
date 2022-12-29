function toMatchPoints(opponentsWeapon, matchResult) {
  switch (opponentsWeapon) {
    case "A":
      switch (matchResult) {
        case "X":
          return 3;
        case "Y":
          return 4;
        case "Z":
          return 8;
      }
    case "B":
      switch (matchResult) {
        case "X":
          return 1;
        case "Y":
          return 5;
        case "Z":
          return 9;
      }
    case "C":
      switch (matchResult) {
        case "X":
          return 2;
        case "Y":
          return 6;
        case "Z":
          return 7;
      }
  }
}

function solution(input) {
  return input
    .split("\n")
    .map((match) => toMatchPoints(...match.split(" ")))
    .reduce((acc, points) => (acc += points));
}

export { solution };
