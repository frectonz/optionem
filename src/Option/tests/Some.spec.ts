import { Some, Option, None } from "..";

describe("Some", () => {
  it("has a isSome method", () => {
    const x = new Some(10);

    expect(x.isSome()).toBe(true);
  });

  it("has a isNone method", () => {
    const x = new Some(10);

    expect(x.isNone()).toBe(false);
  });

  it("has a contains method", () => {
    const x = new Some(10);

    expect(x.contains(5)).toBe(false);
    expect(x.contains(10)).toBe(true);
  });

  it("has a expect method", () => {
    const x = new Some(10);

    expect(x.expect()).toBe(10);
  });

  it("has an unwrap method", () => {
    const x = new Some(10);

    expect(x.unwrap()).toBe(10);
  });

  it("has an unwrapOr method", () => {
    const x: Option<number> = new Some(10);

    expect(x.unwrapOr(5)).toBe(10);
  });

  it("has an unwrapOrElse method", () => {
    const x: Option<number> = new Some(10);

    expect(x.unwrapOrElse(() => 5)).toBe(10);
  });

  it("has a map method", () => {
    const x = new Some("hello");
    const y = x.map((s) => s.length);

    expect(y).toStrictEqual(new Some(5));
  });

  it("has a mapOr method", () => {
    const x: Option<string> = new Some("hello");
    const y = x.mapOr(100, (value) => value.length);

    expect(y).toBe(5);
  });

  it("has a mapOrElse method", () => {
    const x: Option<string> = new Some("hello");
    const y = x.mapOrElse(
      () => 100,
      (value) => value.length
    );

    expect(y).toBe(5);
  });

  it("has an and method", () => {
    const x = new Some("hello");
    const y: Option<string> = new Some("world");
    const z = x.and(y);

    const i = new Some("hello");
    const j: Option<string> = new None();
    const k = i.and(j);

    expect(z).toStrictEqual(new Some("world"));
    expect(k).toStrictEqual(new None());
  });

  it("has an andThen method", () => {
    const sq = (x: number) => new Some(x * x);
    const nope = (_x: number): Option<number> => new None();

    const x = new Some(2);
    const y = x.andThen(sq).andThen(sq);
    const z = x.andThen(nope).andThen(sq);

    expect(y).toStrictEqual(new Some(16));
    expect(z).toStrictEqual(new None());
  });

  it("has a filter method", () => {
    const isEven = (x: number) => x % 2 === 0;

    const x = new Some(4);
    const y = new Some(3);

    expect(y.filter(isEven)).toStrictEqual(new None());
    expect(x.filter(isEven)).toStrictEqual(new Some(4));
  });

  it("has a or method", () => {
    const some: Option<number> = new Some(100);
    const none: Option<number> = new None();

    expect(some.or(none)).toStrictEqual(some);
    expect(some.or(new Some(50))).toStrictEqual(some);
  });

  it("has a orElse method", () => {
    const some: Option<number> = new Some(100);

    expect(some.orElse(() => new None())).toStrictEqual(some);
    expect(some.orElse(() => new Some(50))).toStrictEqual(some);
  });

  it("has a xor method", () => {
    const some: Option<number> = new Some(100);
    const none: Option<number> = new None();

    expect(some.xor(none)).toStrictEqual(some);
    expect(some.xor(new Some(50))).toStrictEqual(none);
  });

  it("has a insert method", () => {
    const some = new Some(10);
    some.insert(100);

    expect(some).toStrictEqual(new Some(100));
  });

  it("has a match function", () => {
    const option: Option<number> = new Some(10);

    const str: string = option.match({
      None() {
        return "None";
      },
      Some(val) {
        if (val === 10) {
          return "ten";
        } else {
          return "unknown";
        }
      },
    });

    expect(str).toBe("ten");
  });
});
