//Start coding here
function calculateTax(income) {
  let taxPercentAge;
  let taxAmount;

  if (income > 50000) {
    taxPercentAge = 0.3;
    taxAmount = income * taxPercentAge;
    return taxAmount;

  } else {
  
  taxPercentAge = 0.2;
  taxAmount = income * taxPercentAge;
  return taxAmount;

};
};

const result1 = calculateTax(60000);
console.log("Tax to be paid: $" + result1);

const result2 = calculateTax(30000);
console.log("Tax to be paid: $" + result2);