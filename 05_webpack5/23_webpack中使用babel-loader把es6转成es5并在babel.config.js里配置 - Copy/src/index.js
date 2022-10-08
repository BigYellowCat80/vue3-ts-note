import { sum } from "./js/math";
const { formatNumber } = require("./js/formatNumber");

console.log(sum(100, 200));
console.log(formatNumber(18.88));

import "./js/element";

const message = "hello world";
const names = ["cat", "dog", "monkey"];
names.forEach((item) => console.log(item));
