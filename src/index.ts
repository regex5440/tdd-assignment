export default function add(inputString: any): number {
  if (typeof inputString !== "string" || inputString.length === 0) return 0;
  const customSeparator = inputString.match(/^\/\/(.)\n/);
  let separator = ",\n";
  let splittedString = inputString;

  if (customSeparator) {
    separator += `\\${customSeparator[1]}`;
    splittedString = inputString.split("\n")[1];
  }

  const regex = new RegExp(`[${separator}]+`);
  let sum = 0;
  let negativeNumbers = [];
  for (const values of splittedString.split(regex)) {
    const num = parseInt(values);
    if (num < 0) {
      negativeNumbers.push(num);
    }
    if (negativeNumbers.length > 0 || num > 1000) {
      continue;
    }
    if (isNaN(num)) {
      throw new TypeError("Alphanumeric values are not allowed");
    }
    sum += num;
  }
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
  }

  return sum;
}
