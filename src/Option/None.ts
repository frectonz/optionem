import { OptionMatchFunction, Option } from "./Option";

export class None<T> implements Option<T> {
  isSome() {
    return false;
  }

  isNone() {
    return true;
  }

  contains(): boolean {
    return false;
  }

  expect(msg: string): T {
    throw new Error(msg);
  }

  unwrap(): T {
    return this.expect("Found a None in the Option.");
  }

  unwrapOr(x: T): T {
    return x;
  }

  unwrapOrElse(fn: () => T): T {
    return fn();
  }

  map<U>(): Option<U> {
    return new None();
  }

  mapOr<U>(x: U): U {
    return x;
  }

  mapOrElse<U>(defaultFn: () => U): U {
    return defaultFn();
  }

  and<U>(): Option<U> {
    return new None();
  }

  andThen<U>(): Option<U> {
    return new None();
  }

  filter(): Option<T> {
    return new None();
  }

  or(opt: Option<T>): Option<T> {
    if (opt.isNone()) {
      return new None();
    }
    return opt;
  }

  orElse(fn: () => Option<T>): Option<T> {
    return this.or(fn());
  }

  xor(opt: Option<T>): Option<T> {
    return this.or(opt);
  }

  match<U>(matches: OptionMatchFunction<T, U>): U {
    return matches.None();
  }
}
