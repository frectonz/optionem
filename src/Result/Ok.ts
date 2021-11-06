import { Some, Option, None } from "../Option";
import { Result, ResultMatchFunction } from "./Result";

export class Ok<T, E> implements Result<T, E> {
  private value: T;
  constructor(value: T) {
    this.value = value;
  }

  isOk() {
    return true;
  }

  isErr() {
    return false;
  }

  contains(value: T): boolean {
    return this.value === value;
  }

  containsErr(): boolean {
    return false;
  }

  ok(): Option<T> {
    return new Some(this.value);
  }

  err(): Option<E> {
    return new None();
  }

  map<U>(fn: (value: T) => U): Result<U, E> {
    return new Ok(fn(this.value));
  }

  mapOr<U>(_value: U, fn: (value: T) => U): U {
    return fn(this.value);
  }

  mapOrElse<U>(_errFn: (err: E) => U, okFn: (value: T) => U): U {
    return okFn(this.value);
  }

  mapErr<U>(): Result<T, U> {
    return new Ok(this.value);
  }

  and<U>(res: Result<U, E>): Result<U, E> {
    return res;
  }

  andThen<U>(fn: (value: T) => Result<U, E>): Result<U, E> {
    return fn(this.value);
  }

  or<F>(): Result<T, F> {
    return new Ok(this.value);
  }

  orElse<F>(): Result<T, F> {
    return new Ok(this.value);
  }

  unwrapOr(): T {
    return this.value;
  }

  unwrapOrElse(): T {
    return this.value;
  }

  unwrap(): T {
    return this.value;
  }

  unwrapErr(): E {
    return this.expectErr("Found a Ok in the Result");
  }

  expect(): T {
    return this.value;
  }

  expectErr(msg: string): E {
    throw new Error(msg);
  }

  match<U>(funcs: ResultMatchFunction<T, E, U>): U {
    return funcs.Ok(this.value);
  }
}
