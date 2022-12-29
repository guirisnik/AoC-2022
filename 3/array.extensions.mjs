Array.prototype.intersection = function (arr) {
  const uniqueArr = new Set(arr);
  const uniqueThis = new Set(this);

  let result = [];

  for (const uArr of uniqueArr) {
    if (uniqueThis.has(uArr)) result.push(uArr);
  }

  return result;
};
