function formatForRegex(char: string) {
  return /\w+/i.test(char) ? char : "\\" + char;
}

export default function add(inputString: any): number {
  if (typeof inputString !== "string" || inputString.length === 0) return 0;

  const delimiterString = inputString.match(/^\/\/(.+)\n/);
  const customSeparatorList: string[] = [];
  if (delimiterString) {
    const matchedString = delimiterString[1];
    let i = 0;
    while (i < matchedString.length) {
      const char = matchedString[i];

      if (!/\[/.test(char)) {
        customSeparatorList.push(formatForRegex(char));
        break;
      } else {
        let j = i + 1;
        let customSeparator = "";

        while (!/\]/.test(matchedString[j]) && j < matchedString.length) {
          customSeparator += formatForRegex(matchedString[j]);
          j++;
        }
        if (j === matchedString.length) {
          throw new SyntaxError(
            "Invalid delimiter format. Supported format: //[**]\n1**2"
          );
        }

        if (customSeparator.length > 0) {
          customSeparatorList.push(customSeparator);
          i = j + 1;
          continue;
        }
      }
      i++;
    }
  }

  let splittedString = inputString;
  let customSeparatorString = "";

  if (customSeparatorList.length > 0) {
    splittedString = inputString.split("\n")[1];
    customSeparatorString = "|" + customSeparatorList.join("|");
  }

  const regex = new RegExp(`[,\n]+${customSeparatorString}`);

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
