import { sum } from "./js/math";
import { clone } from "lodash";
import "./css/index.css";

console.log(sum(100, 200));

const person = {
  name: "coderwhy",
  age: 18,
};
console.log("lodash", clone(person));
