# Optionem

A library for people with options and results.

## Install

```sh
npm install optionem
yarn add optionem
```

### Library Name

**Optionem** = **Option in Latin**

## Example

```typescript
import { Option, None, Some } from "optionem";

function divide(numerator: number, denominator: number): Option<number> {
  if (denominator === 0) {
    return new None();
  } else {
    return new Some(numerator / denominator);
  }
}

const result = divide(
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10)
);

result.match({
  Some(x) {
    console.log("Result ", x);
  },
  None() {
    console.log("Can not divide by", 0);
  },
});
```

The api of this library is made to resemble the one in rust.

This library can only be used with typescript because `Option<T>` is an interface.

This library can be used for

- Network Requests
- Database Gateways
- etc

This can be used in places where in normal circumstances you would use `null` or `undefined`. Null is bad enough but in javascript we also have `undefined`. It is time to eliminate `null` and `undefined` checks from your codebase.

## Option

An option has two variants that implement the `Option<T>` interface

- Some
- None

# API

[Check out the API](/API.md)
