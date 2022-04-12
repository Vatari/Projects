function luckyNumbers(min, max, count) {
  let original = +max;
  min = Math.ceil(min);
  max = Math.floor(max);
  str = [];
  result = 0;

  for (let i = 1; i <= count; i++) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    str.push(result);
  }

  if ((max = 35)) {
    document.getElementById(
      "output"
    ).innerHTML = `Числата днес за ТОТО 5/35 са: ${str}`;
  }
  if ((max = 42)) {
    document.getElementById(
      "output"
    ).innerHTML = `Числата днес за ТОТО 6/42 са: ${str}`;
  }
  if ((max = 49)) {
    document.getElementById(
      "output"
    ).innerHTML = `Числата днес за ТОТО 6/49 са: ${str}`;
  }
}
