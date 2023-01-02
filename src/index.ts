function calculateTax(amount) {
  return amount * 1.2;
}

function calculateTax2(amount, discount) {
  return amount * 1.2 - discount;
}

function calculateTax3(
  amount: number,
  discount: number = 0,
  ...extraFees: number[]
) {
  return (
    amount * 1.2 - discount + extraFees.reduce((total, val) => total + val, 0)
  );
}

let taxValue = calculateTax3(100, 0);
console.log(`2 args: ${taxValue}`);
let taxValue1 = calculateTax3(100);
console.log(`1 arg: ${taxValue}`);
let taxValue2 = calculateTax3(100, 10, 20);
console.log(`3 args: ${taxValue}`);
let taxValue3 = calculateTax3(100, 10, 20, 1, 30, 7);
console.log(`6 args: ${taxValue}`);
