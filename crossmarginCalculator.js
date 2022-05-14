function marginCalculator(stock, qty, buyPrice, sellPrice) {
  let fee = (qty * 0.1) / 100;
  totalQty = qty - fee;

  let limitBuy = totalQty * buyPrice;

  let limitSell = totalQty * sellPrice;

  let limitSellFee = (limitSell * 0.1) / 100;

  let total = limitSell - limitSellFee;

  let profit = total - limitBuy;
  console.log(`Sold ${qty.toFixed(2)} -> ${stock} at 0.1% fee`);
  console.log(`${fee.toFixed(2)} ${stock} -> deducted at 0.1% fee`);
  console.log(`${limitSellFee.toFixed(6)} $$$ -> deducted at 0.1%`);
  console.log(`Profit -> ${profit.toFixed(6)} $$$`);
}
marginCalculator("BAT", 390, 0.4011, 0.4050);
