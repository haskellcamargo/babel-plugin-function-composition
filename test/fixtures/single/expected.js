const add = a => b => a + b;
const mul = a => b => a * b;

const add2 = add(2);
const mul5 = mul(5);

const add2ThenMul5 = (...args) => mul5(add2(...args));
