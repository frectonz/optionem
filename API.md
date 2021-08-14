# Option API

### `option.isSome(): boolean`

Returns `true` if the `option` variant is `Some`.

### `option.isNone(): boolean`

Returns `true` if the `option` variant is `None`.

### `option.contains(value: T): boolean`

Returns `true` if the value inside the option is the value passed to the function.

### `option.expect(msg: string): T`

If the variant is

- `None`
  throws an error with the message `msg`
- `Some`
  returns the value contained inside the `Some`.

### `option.unwrap(msg: string): T`

If the variant is

- `None`
  throws an error with the message `Found a None in the Option.`
- `Some`
  returns the value contained inside the `Some`.

### `option.unwrapOr(x: T): T`

If the variant is

- `None`
  returns the default value `x`
- `Some`
  returns the value contained inside the `Some`.

### `option.unwrapOrElse(fn: () => T): T`

If the variant is

- `None`
  returns the default value by calling the function `fn()`
- `Some`
  returns the value contained inside the `Some`.

### `option.map<U>(fn: (value: T) => U): Option<U>`

If the variant is

- `None`
  returns a `None`.
- `Some`
  returns a `Some` with the value inside being the value returned from `fn()`.

### `option.mapOr<U>(x: U, fn: (value: T) => U): U`

If the variant is

- `None`
  returns `x`.
- `Some`
  returns the value returned from `fn(value)`.

### `option.mapOrElse<U>(defaultFn: () => U, fn: (value: T) => U): U`

If the variant is

- `None`
  returns the value returned from `defaultFn()`.
- `Some`
  returns the value returned from `fn(value)`.

### `option.and<U>(opt: Option<U>): Option<U>`

If the variant is

- `None`
  returns `None`.
- `Some`
  returns `opt`.

### `option.andThen<U>(fn: (value: T) => Option<U>): Option<U>`

If the variant is

- `None`
  returns `None`.
- `Some`
  returns the `Option<U>` returned from `fn(value)`.

### `option.filter(fn: (value: T) => boolean): Option<T>`

If the variant is

- `None`
  returns `None`.
- `Some`
  returns a value depending on the boolean returned from `fn(value)` if it is true it returns a `Some` otherwise it returns `None`.

### `option.or(opt: Option<T>): Option<T>`

If the variant is

- `None`
  returns `None` if `opt` is none otherwise it returns `opt`.
- `Some`
  returns `Some`

### `option.orElse(fn: () => Option<T>): Option<T>`

same as `option.or` but the `opt` value is the value returned from the function `fn()`.

### `option.xor(opt: Option<T>): Option<T>`

If the variant is

- `None`
  returns `None` if `opt` is none otherwise it returns `opt`.
- `Some`
  returns `None` if `opt` is some otherwise it returns `Some`.

### `option.insert(value: T): Option<T>`

If the variant is

- `None`
  returns the parameter `value` wrapped with a `Some` .
- `Some`
  sets the value to the value from the parameter and returns it self.

### `match<U>(funcs: MatchFunction<T, U>): U`

```typescript
export interface MatchFunction<T, U> {
  None: () => U;
  Some: (value: T) => U;
}
```

If the variant is

- `None`
  it calls `funcs.None()`
- `Some`
  it calls `funcs.Some(value);`
