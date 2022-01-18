import { Ok } from "./Ok";
import { Err } from "./Err";
import { Result } from "./Result";
import { None, Option, Some } from "../Option";

export function flatten<T, E>(res: Result<Result<T, E>, E>): Result<T, E> {
  return res.unwrapOrElse((err) => new Err(err));
}

export function transpose<T, E>(
  res: Result<Option<T>, E>
): Option<Result<T, E>> {
  return res.mapOrElse(
    (err) => {
      return new Some(new Err(err));
    },
    (value) => {
      return value.match({
        None(): Option<Result<T, E>> {
          return new None();
        },
        Some(val): Option<Result<T, E>> {
          return new Some(new Ok(val));
        },
      });
    }
  );
}
