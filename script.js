// Predefined static variables
const principal = 100000;       // Principal amount (P)
const rate = 0.05;              // Annual interest rate as a decimal (r, e.g., 5% = 0.05)
const timesCompounded = 1;      // Compounded times per year (n, e.g., 1 for annually)
const time = 3;                 // Time in years (t)

// Formula: A = P * (1 + r/n)^(n*t)
const amount = principal * Math.pow(1 + rate / timesCompounded, timesCompounded * time);

// Compound Interest (CI) = Total Amount - Principal
const compoundInterest = amount - principal;

// Display the result
console.log(`The compound interest after ${time} years is: ${compoundInterest.toFixed(2)}`);