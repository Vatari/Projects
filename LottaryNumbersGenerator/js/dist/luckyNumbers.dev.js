"use strict";

function luckyNumbers(min, max, count) {
  var original = max;
  min = Math.ceil(min);
  max = Math.floor(max);
  str = [];
  result = 0;
  var output = document.getElementById("output");

  for (var i = 1; i <= count; i++) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    str.push(result);
  }

  output.innerHTML = "\u0412\u0430\u0448\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u0430 \u0437\u0430 \u0422\u041E\u0422\u041E ".concat(count, " / ").concat(max, " \u0441\u0430: ").concat(str.join(" - "), " ");
}