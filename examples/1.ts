import { Option, None, Some } from "optionem";

export default function main() {
  function divide(numerator: number, denominator: number): Option<number> {
    if (denominator === 0) {
      return new None();
    } else {
      return new Some(numerator / denominator);
    }
  }

  const result = divide(
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  );

  result.match({
    Some(x) {
      console.log("Result ", x);
    },
    None() {
      console.log("Can not divide by", 0);
    },
  });
}
