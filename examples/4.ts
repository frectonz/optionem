import { Result, Err, Ok } from "optionem";

export default function main() {
  function divide(
    numerator: number,
    denominator: number
  ): Result<number, string> {
    if (denominator === 0) {
      return new Err("divide by zero error");
    } else {
      return new Ok(numerator / denominator);
    }
  }

  const result = divide(
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  );

  result.match({
    Ok(x) {
      console.log("Result ", x);
    },
    Err(err) {
      console.log("ERROR", err);
    },
  });
}
