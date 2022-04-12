function luckyNumbers(min, max, count) {
  str = [];
  result = 0;
  let output = document.getElementById("output");

  for (let i = 1; i <= count; i++) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    str.push(result);
  }
  output.innerHTML = `Вашите числа за ТОТО ${count} / ${max} са: 
  ${str.join(" , ")} `;
}
