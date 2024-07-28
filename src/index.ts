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

  for (const values of splittedString.split(regex)) {
    const num = parseInt(values);
    if (isNaN(num)) {
      throw new TypeError("Alphanumeric values are not allowed");
    }
    sum += num;
  }

  return sum;
}
