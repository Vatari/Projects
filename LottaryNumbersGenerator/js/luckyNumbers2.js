function luckyNumbers(min, max, count) {
  if ((max = 35)) {
    document.getElementById(
      "output"
      ).innerHTML = `Числата днес за ТОТО 5/35 са: ${generate(min, max, count)}`;
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
        function generate (min, max, count) {
          min = Math.ceil(min);
          max = Math.floor(max);
          str = [];
          result = 0;
          
          for (let i = 1; i <= count; i++) {
            result = Math.floor(Math.random() * (max - min + 1)) + min;
            str.push(result);
            return str;
          }
        }
        console.log(generate(1,32,5));
}
