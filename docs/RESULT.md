# `Result<T, E>`

## 1. `result.isOk(): boolean`

Returns `true` if the `result` variant is `Ok`, otherwise it returns a `false`.

## 2. `result.isErr(): boolean`

Returns `true` if the `result` variant is `Err`, otherwise it returns a `false`.

## 3. `result.contains(value: T): boolean`

Returns `true` if the value inside the `result` is the value passed to the function, otherwise it returns a `false`.

## 4. `result.containsErr(error: E): boolean`

Returns `true` if the error inside the `result` is the error passed to the function, otherwise it returns a `false`.

## 5. `result.ok(): Option<T>`

Returns `Some<T>` if the `result` is an `Ok`, otherwise it returns a `None`.

## 6. `result.err(): Option<E>`

Returns `Some<E>` if the `result` is an `Ok`, otherwise it returns a `None`.

## 7. `result.map<U>(fn: (value: T) => U): Result<U, E>`

If the variant is

- `Ok`
  returns an `Ok` with the value returned from `fn`.
- `Err`
  returns the `Err` with the error from the `result`.

## 8. `result.mapOr<U>(value: U, fn: (value: T) => U): U`

If the variant is

- `Ok`
  returns the value returned from `fn`.
- `Err`
  returns the `value`.

## 9. `result.mapOrElse<U>(errFn: (err: E) => U, okFn: (value: T) => U): U`

If the variant is

- `Ok`
  returns the value returned from `okFn`.
- `Err`
  returns the value returned from `errFn`.

## 10. `result.and<U>(res: Result<U, E>): Result<U, E>`

If the variant is

- `Ok`
  returns `res`.
- `Err`
  returns an `Err` containing the error from `result`.

## 11. `result.andThen<U>(fn: (value: T) => Result<U, E>): Result<U, E>`

If the variant is

- `Ok`
  returns the result returned from calling `fn`.
- `Err`
  returns an `Err` containing the error from `result`.

## 12. `result.or<F>(res: Result<T, F>): Result<T, F>`

If the variant is

- `Ok`
  returns an `Ok` containing the value from `result`.
- `Err`
  returns `res`.

## 13. `result.orElse<F>(fn: (err: E) => Result<T, F>): Result<T, F>`

If the variant is

- `Ok`
  returns an `Ok` containing the value from `result`.
- `Err`
  returns the result returned from calling `fn`.

## 14. `result.unwrapOr(value: T): T`

If the variant is

- `Ok`
  returns the value contained in the `Ok`.
- `Err`
  returns `value`.

## 15. `result.unwrapOrElse(fn: (err: E) => T): T`

If the variant is

- `Ok`
  returns the value contained in the `Ok`.
- `Err`
  returns the value returned from calling `fn` with the error.

## 16. `result.unwrap(): T`

If the variant is

- `Ok`
  returns the value contained in the `Ok`.
- `Err`
  throws an error.

## 17. `result.unwrapErr(): E`

If the variant is

- `Ok`
  throws an error.
- `Err`
  returns the error contained in the `Err`.

## 18. `result.expect(msg: string): T`

If the variant is

- `Ok`
  returns the value contained in the `Ok`.
- `Err`
  throws an error with message `msg`.

## 19. `result.expectErr(msg: string): E`

If the variant is

- `Ok`
  throws an error with message `msg`.
- `Err`
  returns the error contained in the `Err`.
