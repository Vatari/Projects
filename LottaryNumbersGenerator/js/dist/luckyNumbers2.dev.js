"use strict";

function luckyNumbers(min, max, count) {
  if (max = 35) {
    document.getElementById("output").innerHTML = "\u0427\u0438\u0441\u043B\u0430\u0442\u0430 \u0434\u043D\u0435\u0441 \u0437\u0430 \u0422\u041E\u0422\u041E 5/35 \u0441\u0430: ".concat(generate(min, max, count));
  }

  if (max = 42) {
    document.getElementById("output").innerHTML = "\u0427\u0438\u0441\u043B\u0430\u0442\u0430 \u0434\u043D\u0435\u0441 \u0437\u0430 \u0422\u041E\u0422\u041E 6/42 \u0441\u0430: ".concat(str);
  }

  if (max = 49) {
    document.getElementById("output").innerHTML = "\u0427\u0438\u0441\u043B\u0430\u0442\u0430 \u0434\u043D\u0435\u0441 \u0437\u0430 \u0422\u041E\u0422\u041E 6/49 \u0441\u0430: ".concat(str);
  }

  function generate(min, max, count) {
    min = Math.ceil(min);
    max = Math.floor(max);
    str = [];
    result = 0;

    for (var i = 1; i <= count; i++) {
      result = Math.floor(Math.random() * (max - min + 1)) + min;
      str.push(result);
      return str;
    }
  }

  console.log(generate(1, 32, 5));
}