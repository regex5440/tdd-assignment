export default function add(inputString: any): number {
  if (typeof inputString !== "string" || inputString.length === 0) return 0;

  let sum = 0;
  for (const values of inputString.split(/[,\n\s]+/)) {
    const num = parseInt(values);
    if (isNaN(num)) {
      throw new TypeError("Alphanumeric values are not allowed");
    }
    sum += num;
  }

  return sum;
}
