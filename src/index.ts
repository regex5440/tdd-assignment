export default function add(inputString: any): number {
  if (typeof inputString !== "string" || inputString.length === 0) return 0;

  const sum = inputString.split(",").reduce((acc, curr) => {
    acc += parseInt(curr);
    return acc;
  }, 0);

  return sum;
}
