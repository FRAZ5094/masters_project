import { add, countToNumber } from "../build/debug.js";

const n = Math.pow(10, 9);

console.time("WebAssembly");

countToNumber(n);

console.timeEnd("WebAssembly");

function countToNumberJS(maxNumber : number) : void {
  let n : number = 0;

  while (n<maxNumber) {
    n++;
  }

}

console.time("Javascript");

countToNumberJS(n);

console.timeEnd("Javascript");
