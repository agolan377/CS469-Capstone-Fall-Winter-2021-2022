class FizzBuzz
{
  generateNumberString(limit: number) {
    let output: string[];
    for (let i = 1; i <= limit; i++) {
        output.push(this.Replace(i));
    }
    return output;
  }

  Replace(limit: number): string {
    if (limit%3 === 0 && limit%5 === 0) return "FizzBuzz";
    if (limit%3) return "Fizz";
    if (limit%5) return "Buzz";
    else return limit.toString();
  }
}

const limit = 100;
const fizzBuzz = new FizzBuzz();
const result = fizzBuzz.generateNumberString(limit);
console.log(result.join(", "));