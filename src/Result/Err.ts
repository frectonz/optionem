import { None, Option, Some } from "../Option";
import { ResultMatchFunction, Result } from "./Result";

export class Err<T, E> implements Result<T, E> {
  private error: E;
  constructor(error: E) {
    this.error = error;
  }

  isOk() {
    return false;
  }

  isErr() {
    return true;
  }

  contains(_value: T): boolean {
    return false;
  }

  containsErr(error: E): boolean {
    return this.error === error;
  }

  ok(): Option<T> {
    return new None();
  }

  err(): Option<E> {
    return new Some(this.error);
  }

  map<U>(_fn: (value: T) => U): Result<U, E> {
    return new Err(this.error);
  }

  mapOr<U>(value: U, _fn: (value: T) => U): U {
    return value;
  }

  mapOrElse<U>(errFn: (err: E) => U, _okFn: (value: T) => U): U {
    return errFn(this.error);
  }

  mapErr<U>(fn: (error: E) => U): Result<T, U> {
    return new Err(fn(this.error));
  }

  and<U>(_err: Result<U, E>): Result<U, E> {
    return new Err(this.error);
  }

  andThen<U>(_fn: (value: T) => Result<U, E>): Result<U, E> {
    return new Err(this.error);
  }

  or<F>(res: Result<T, F>): Result<T, F> {
    return res;
  }

  orElse<F>(fn: (err: E) => Result<T, F>): Result<T, F> {
    return fn(this.error);
  }

  unwrapOr(value: T): T {
    return value;
  }

  unwrapOrElse(fn: (err: E) => T): T {
    return fn(this.error);
  }

  unwrap(): T {
    return this.expect("Found an Err in the Result");
  }

  unwrapErr(): E {
    return this.error;
  }

  expect(msg: string): T {
    throw new Error(msg);
  }

  expectErr(_msg: string): E {
    return this.error;
  }

  match<U>(funcs: ResultMatchFunction<T, E, U>): U {
    return funcs.Err(this.error);
  }
}
