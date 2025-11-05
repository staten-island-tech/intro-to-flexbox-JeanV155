const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 }
]; 

function CalculateSubtotal(cart) {
  let subtotal = 0;

  cart.forEach(element => {
    if (element.price < 5) {
      element.price *= 0.95;
    }
    subtotal += element.price * element.quantity;
    if (subtotal > 100)
        subtotal *= 0.90
  });
  return subtotal;
}
const total = CalculateSubtotal(cart);
console.log(`Subtotal: $${total.toFixed(2)}`);
