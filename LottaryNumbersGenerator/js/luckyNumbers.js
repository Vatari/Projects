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
  output.innerHTML = `Вашите числа за ТОТО ${count} / ${max} са: ${str.join(
    " , "
  )} `;
}
