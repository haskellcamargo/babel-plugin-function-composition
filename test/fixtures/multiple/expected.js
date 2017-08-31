const add2 = a => a + 2;
const mul3 = b => b * 3;
const div4 = c => c / 4;

const flux = (...args) => div4(((...args) => mul3(add2(...args)))(...args));
