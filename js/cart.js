 let qty = 0; // start quantity
  const qtyEl = document.getElementById("qty");
  const totalEl = document.getElementById("cart-value");

  function increaseQty(price) {
    qty++;
    qtyEl.textContent = qty;
    totalEl.textContent = price * qty;
  }

  function decreaseQty(price) {
    if (qty > 0) {
      qty--;
      qtyEl.textContent = qty;
      totalEl.textContent = price * qty;
    }
  }