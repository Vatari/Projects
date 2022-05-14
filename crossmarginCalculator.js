function marginCalculator(stock, qty, buyPrice, sellPrice) {
  let fee = (qty * 0.1) / 100;
  totalQty = qty - fee;

  let limitBuy = totalQty * buyPrice;

  let limitSell = totalQty * sellPrice;

  let limitSellFee = (limitSell * 0.1) / 100;

  let total = limitSell - limitSellFee;

  let profit = total - limitBuy;
  console.log(profit);
}
marginCalculator("BAT", 400, 0.4016, 0.48);
