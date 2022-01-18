import { Option } from "../Option";
import { flatten, transpose } from "./utils";

export interface Result<T, E> {
  isOk(): boolean;
  isErr(): boolean;

  contains(value: T): boolean;
  containsErr(error: E): boolean;

  ok(): Option<T>;
  err(): Option<E>;

  map<U>(fn: (value: T) => U): Result<U, E>;
  mapOr<U>(value: U, fn: (value: T) => U): U;
  mapErr<U>(fn: (error: E) => U): Result<T, U>;
  mapOrElse<U>(errFn: (err: E) => U, okFn: (value: T) => U): U;

  and<U>(res: Result<U, E>): Result<U, E>;
  andThen<U>(fn: (value: T) => Result<U, E>): Result<U, E>;

  or<F>(res: Result<T, F>): Result<T, F>;
  orElse<F>(fn: (err: E) => Result<T, F>): Result<T, F>;

  unwrapOr(value: T): T;
  unwrapOrElse(fn: (err: E) => T): T;

  unwrap(): T;
  unwrapErr(): E;

  expect(msg: string): T;
  expectErr(msg: string): E;

  match<U>(funcs: ResultMatchFunction<T, E, U>): U;
}

export interface ResultMatchFunction<T, E, U> {
  Ok: (value: T) => U;
  Err: (error: E) => U;
}

export const ResultUtils = {
  flatten,
  transpose,
};
