# Option API

## 1. `option.isSome(): boolean`

Returns `true` if the `option` variant is `Some`.

## 2. `option.isNone(): boolean`

Returns `true` if the `option` variant is `None`.

## 3. `option.contains(value: T): boolean`

Returns `true` if the value inside the option is the value passed to the function.

## 4. `option.expect(msg: string): T`

If the variant is

- `None`
  throws an error with the message `msg`
- `Some`
  returns the value contained inside the `Some`.

## 5.`option.unwrap(msg: string): T`

If the variant is

- `None`
  throws an error with the message `Found a None in the Option.`
- `Some`
  returns the value contained inside the `Some`.

## 6. `option.unwrapOr(x: T): T`

If the variant is

- `None`
  returns the default value `x`
- `Some`
  returns the value contained inside the `Some`.

## 7. `option.unwrapOrElse(fn: () => T): T`

If the variant is

- `None`
  returns the default value by calling the function `fn()`
- `Some`
  returns the value contained inside the `Some`.

## 8. `option.map<U>(fn: (value: T) => U): Option<U>`

If the variant is

- `None`
  returns a `None`.
- `Some`
  returns a `Some` with the value inside being the value returned from `fn()`.

## 9. `option.mapOr<U>(x: U, fn: (value: T) => U): U`

If the variant is

- `None`
  returns `x`.
- `Some`
  returns the value returned from `fn(value)`.

## 10. `option.mapOrElse<U>(defaultFn: () => U, fn: (value: T) => U): U`

If the variant is

- `None`
  returns the value returned from `defaultFn()`.
- `Some`
  returns the value returned from `fn(value)`.

## 11. `option.and<U>(opt: Option<U>): Option<U>`

If the variant is

- `None`
  returns `None`.
- `Some`
  returns `opt`.

## 12. `option.andThen<U>(fn: (value: T) => Option<U>): Option<U>`

If the variant is

- `None`
  returns `None`.
- `Some`
  returns the `Option<U>` returned from `fn(value)`.

## 13. `option.filter(fn: (value: T) => boolean): Option<T>`

If the variant is

- `None`
  returns `None`.
- `Some`
  returns a value depending on the boolean returned from `fn(value)` if it is true it returns a `Some` otherwise it returns `None`.

## 14. `option.or(opt: Option<T>): Option<T>`

If the variant is

- `None`
  returns `None` if `opt` is none otherwise it returns `opt`.
- `Some`
  returns `Some`

## 15. `option.orElse(fn: () => Option<T>): Option<T>`

same as `option.or` but the `opt` value is the value returned from the function `fn()`.

## 16. `option.xor(opt: Option<T>): Option<T>`

If the variant is

- `None`
  returns `None` if `opt` is none otherwise it returns `opt`.
- `Some`
  returns `None` if `opt` is some otherwise it returns `Some`.

## 17. `match<U>(funcs: OptionMatchFunction<T, U>): U`

```typescript
export interface OptionMatchFunction<T, U> {
  None: () => U;
  Some: (value: T) => U;
}
```

If the variant is

- `None`
  it calls `funcs.None()`
- `Some`
  it calls `funcs.Some(value);`
