import { None } from "./None";
import { OptionMatchFunction, Option } from "./Option";

export class Some<T> implements Option<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  isSome() {
    return true;
  }

  isNone() {
    return false;
  }

  contains(value: T): boolean {
    return this.value === value;
  }

  expect(): T {
    return this.value;
  }

  unwrap(): T {
    return this.value;
  }

  unwrapOr(): T {
    return this.value;
  }

  unwrapOrElse(): T {
    return this.value;
  }

  map<U>(fn: (value: T) => U): Option<U> {
    return new Some(fn(this.value));
  }

  mapOr<U>(_x: U, fn: (value: T) => U): U {
    return fn(this.value);
  }

  mapOrElse<U>(_defaultFn: () => U, fn: (value: T) => U): U {
    return fn(this.value);
  }

  and<U>(opt: Option<U>): Option<U> {
    return opt;
  }

  andThen<U>(fn: (value: T) => Option<U>): Option<U> {
    return fn(this.value);
  }

  filter(fn: (value: T) => boolean): Option<T> {
    if (fn(this.value)) {
      return new Some(this.value);
    } else {
      return new None();
    }
  }

  or(): Option<T> {
    return new Some(this.value);
  }

  orElse(): Option<T> {
    return this.or();
  }

  xor(opt: Option<T>): Option<T> {
    if (opt.isSome()) {
      return new None();
    }
    return new Some(this.value);
  }

  match<U>(matches: OptionMatchFunction<T, U>): U {
    return matches.Some(this.value);
  }
}
