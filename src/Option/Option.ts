import { flatten } from "./utils";

export interface Option<T> {
  isSome(): boolean;
  isNone(): boolean;
  contains(value: T): boolean;

  expect(msg: string): T;

  unwrap(): T;
  unwrapOr(x: T): T;
  unwrapOrElse(fn: () => T): T;

  map<U>(fn: (value: T) => U): Option<U>;
  mapOr<U>(x: U, fn: (value: T) => U): U;
  mapOrElse<U>(defaultFn: () => U, fn: (value: T) => U): U;

  and<U>(opt: Option<U>): Option<U>;
  andThen<U>(fn: (value: T) => Option<U>): Option<U>;

  filter(fn: (value: T) => boolean): Option<T>;

  or(opt: Option<T>): Option<T>;
  orElse(fn: () => Option<T>): Option<T>;

  xor(opt: Option<T>): Option<T>;

  match<U>(funcs: OptionMatchFunction<T, U>): U;
}

export interface OptionMatchFunction<T, U> {
  None: () => U;
  Some: (value: T) => U;
}

export const OptionUtils = {
  flatten,
};
