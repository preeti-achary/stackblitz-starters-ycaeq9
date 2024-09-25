let express = require('express');
let cors = require('cors');

let app = express();
app.use(cors());
const port = 3000;

app.get("/cart-total", (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);

  let totalCartPrice = newItemPrice + cartTotal;
  res.send(totalCartPrice.toString());
})

app.get("/membership-discount", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember === "true";

  let totalCartValue = cartTotal + isMember;
  res.send(totalCartValue.toString());
})

app.get("/calculate-tax", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let taxRate = 0.08;

  let taxAmount = cartTotal * taxRate;
  res.send(taxAmount.toString());
});

app.get('/estimate-delivery', (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);

  let deliveryDays;

  if (shippingMethod === 'Standard') {
      deliveryDays = Math.ceil(Distance / 50);
  } else if (shippingMethod === 'Express') {
      deliveryDays = Math.ceil(Distance / 100);
  } else {
      
  }

  res.send(deliveryDays);
});



app.get("/shipping-cost", (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
   
  let shippingCost = weight * distance * 0.1;
  res.send(shippingCost.toString());
});

app.get("/loyalty-points", (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);

  let loyaltyPoints = purchaseAmount * 2;
  res.send(loyaltyPoints.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
