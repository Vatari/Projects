function luckyNumbers(min, max, count) {
  let original = max;
  min = Math.ceil(min);
  max = Math.floor(max);
  str = [];
  result = 0;
  let output = document.getElementById("output");

  for (let i = 1; i <= count; i++) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    str.push(result);
  }
  output.innerHTML = `Вашите числа са: ${str.join(' ')}`;
  /* if ((original = 35)) {
    output.innerHTML = `Числата днес за ТОТО 5/35 са: ${str}`;
  } else if ((original = 42)) {
    output.innerHTML = `Числата днес за ТОТО 6/42 са: ${str}`;
  } else if ((original = 49)) {
    output.innerHTML = `Числата днес за ТОТО 6/49 са: ${str}`;
  } */
}
