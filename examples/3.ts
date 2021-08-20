import { Ok, Err, Result } from "optionem";

enum MathError {
  DivisionByZero = "DivisionByZero",
  NegativeSquareRoot = "NegativeSquareRoot",
  NonPositiveLogarithm = "NonPositiveLogarithm",
}

type MathResult = Result<number, MathError>;

function div(x: number, y: number): MathResult {
  if (y === 0) {
    return new Err(MathError.DivisionByZero);
  } else {
    return new Ok(x / y);
  }
}

function sqrt(x: number): MathResult {
  if (x < 0.0) {
    return new Err(MathError.NegativeSquareRoot);
  } else {
    return new Ok(Math.sqrt(x));
  }
}

function log(x: number): MathResult {
  if (x <= 0.0) {
    return new Err(MathError.NonPositiveLogarithm);
  } else {
    return new Ok(Math.log(x));
  }
}

export default function main() {
  const x: number = Math.floor(Math.random() * 10);
  const y: number = Math.floor(Math.random() * 10);

  // div
  div(x, y).match({
    Err(err) {
      console.log(err);
    },
    Ok(value) {
      // log
      log(value).match({
        Err(err) {
          console.log(err);
        },
        Ok(value) {
          // sqrt
          sqrt(value).match({
            Err(err) {
              console.log(err);
            },
            Ok(value) {
              console.log(value);
            },
          });
        },
      });
    },
  });
}
