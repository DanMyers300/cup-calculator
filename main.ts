// Calculate the volume of an irregular cone 
// 1/3 * π(R1^2 +R1 * R2 + R2^2) h

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const obtainValues = async () => {
  let rl = readline.createInterface({ input, output });

  let R1 = await rl.question("Enter Radius 1: ");
  let R2 = await rl.question("Enter Radius 2: ");
  let H = await rl.question("Enter Height  : ");

  rl.close();
  return [R1, R2, H];
};

const calculate = (values: number[]) => {
  let [R1, R2, H] = values;
  return (1 / 3) * Math.PI * (R1 ** 2 + R1 * R2 + R2 ** 2) * H;
};

const main = async () => {
  let values = await obtainValues();
  return calculate(values);
};

console.log(await main());
