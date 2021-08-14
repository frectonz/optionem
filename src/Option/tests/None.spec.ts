import { None, Option, Some } from "..";

describe("None", () => {
  it("has a isSome method", () => {
    const x = new None();

    expect(x.isSome()).toBe(false);
  });

  it("has a isNone method", () => {
    const x = new None();

    expect(x.isNone()).toBe(true);
  });

  it("has a contains method", () => {
    const x: Option<number> = new None();

    expect(x.contains(5)).toBe(false);
  });

  it("has a expect method", () => {
    const x: Option<number> = new None();

    expect(() => x.expect("No value Found")).toThrow("No value Found");
  });

  it("has a unwrap method", () => {
    const x = new None();

    expect(() => x.unwrap()).toThrow("Found a None in the Option.");
  });

  it("has an unwrapOr method", () => {
    const x: Option<number> = new None();

    expect(x.unwrapOr(5)).toBe(5);
  });

  it("has an unwrapOrElse method", () => {
    const x: Option<number> = new None();

    expect(x.unwrapOrElse(() => 5)).toBe(5);
  });

  it("has a map method", () => {
    const x: Option<string> = new None();
    const y = x.map((s) => s.length);

    expect(y).toStrictEqual(new None());
  });

  it("has a mapOr method", () => {
    const x: Option<string> = new None();
    const y = x.mapOr(100, (value) => value.length);

    expect(y).toBe(100);
  });

  it("has a mapOrElse method", () => {
    const x: Option<string> = new None();
    const y = x.mapOrElse(
      () => 100,
      (value) => value.length
    );

    expect(y).toBe(100);
  });

  it("has an and method", () => {
    const x = new None();
    const y: Option<string> = new Some("world");
    const z = x.and(y);

    const i = new None();
    const j: Option<string> = new None();
    const k = i.and(j);

    expect(z).toStrictEqual(new None());
    expect(k).toStrictEqual(new None());
  });

  it("has an andThen method", () => {
    const sq = (x: number) => new Some(x * x);

    const x: Option<number> = new None();
    const y = x.andThen(sq).andThen(sq);

    expect(y).toStrictEqual(new None());
  });

  it("has a filter method", () => {
    const x: Option<number> = new None();

    expect(x.filter(() => true)).toStrictEqual(new None());
  });

  it("has a or method", () => {
    const none = new None();
    const some = new Some(100);

    expect(none.or(some)).toStrictEqual(some);
    expect(none.or(none)).toStrictEqual(none);
  });

  it("has a orElse method", () => {
    const none: Option<number> = new None();

    expect(none.orElse(() => new None())).toStrictEqual(none);
    expect(none.orElse(() => new Some(100))).toStrictEqual(new Some(100));
  });

  it("has a xor method", () => {
    const none = new None();
    const some = new Some(100);

    expect(none.xor(some)).toStrictEqual(some);
    expect(none.xor(none)).toStrictEqual(none);
  });

  it("has a insert method", () => {
    const none = new None();
    const some = none.insert(10);

    expect(some).toStrictEqual(new Some(10));
  });

  it("has a match function", () => {
    const option: Option<number> = new None();

    const str: string = option.match({
      None() {
        return "None";
      },
      Some() {
        return "CAN'T_HAPPEN";
      },
    });

    expect(str).toBe("None");
  });
});
