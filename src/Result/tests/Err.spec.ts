import { Err, Ok, Result } from "..";
import { None, Some } from "../../Option";

describe("Err", () => {
  it("has an isOk method", () => {
    const err: Result<number, string> = new Err("error");

    expect(err.isOk()).toBe(false);
  });

  it("has an isErr method", () => {
    const err: Result<number, string> = new Err("error");

    expect(err.isErr()).toBe(true);
  });

  it("has a contains method", () => {
    const err: Result<number, string> = new Err("error");

    expect(err.contains(10)).toBe(false);
  });

  it("has a containsErr method", () => {
    const err: Result<number, string> = new Err("error");

    expect(err.containsErr("error")).toBe(true);
  });

  it("has an ok method", () => {
    const err: Result<number, string> = new Err("error");

    expect(err.ok()).toStrictEqual(new None());
  });

  it("has an err method", () => {
    const err: Result<number, string> = new Err("error");

    expect(err.err()).toStrictEqual(new Some("error"));
  });

  it("has a map method", () => {
    const err: Result<number, string> = new Err("error");

    expect(err.map((x) => String(x))).toStrictEqual(new Err("error"));
  });

  it("has a mapOr method", () => {
    const err: Result<string, string> = new Err("error");

    expect(err.mapOr(10, (x) => x.length)).toBe(10);
  });

  it("has a mapOrElse method", () => {
    const err: Result<string, string> = new Err("error");

    expect(
      err.mapOrElse(
        (err) => err.length,
        (value) => value.length
      )
    ).toBe(5);
  });

  it("has a mapErr method", () => {
    const err: Result<string, string> = new Err("foo");

    expect(err.mapErr((x) => x.length)).toStrictEqual(new Err(3));
  });

  it("has an and method", () => {
    const ok: Result<string, string> = new Ok("foo");
    const err: Result<string, string> = new Err("boo");

    expect(err.and(ok)).toStrictEqual(err);
    expect(err.and(err)).toStrictEqual(err);
  });

  it("has an andThen method", () => {
    const err: Result<string, string> = new Err("foo");

    expect(err.andThen((value) => new Ok(value.length))).toStrictEqual(
      new Err("foo")
    );
    expect(err.andThen(() => new Err("err"))).toStrictEqual(new Err("foo"));
  });

  it("has an or method", () => {
    const ok: Result<string, string> = new Ok("foo");
    const err: Result<string, string> = new Err("boo");

    expect(err.or(ok)).toStrictEqual(ok);
    expect(err.or(new Err("moo"))).toStrictEqual(new Err("moo"));
  });

  it("has an orElse method", () => {
    const err: Result<number, number> = new Err(2);

    expect(err.orElse((err) => new Err(err * err))).toStrictEqual(new Err(4));
  });

  it("has an unwrapOr method", () => {
    const err: Result<number, number> = new Err(2);

    expect(err.unwrapOr(10)).toBe(10);
  });

  it("has an unwrapOrElse method", () => {
    const err: Result<number, number> = new Err(2);

    expect(err.unwrapOrElse((err) => err * 2)).toBe(4);
  });

  it("has an unwrap method", () => {
    const err: Result<number, number> = new Err(2);

    expect(() => err.unwrap()).toThrow("Found an Err in the Result");
  });

  it("has an unwrapErr method", () => {
    const err: Result<number, number> = new Err(2);

    expect(err.unwrapErr()).toBe(2);
  });

  it("has an expect method", () => {
    const err: Result<number, number> = new Err(2);

    expect(() => err.expect("error")).toThrow("error");
  });

  it("has an expectErr method", () => {
    const err: Result<number, number> = new Err(2);

    expect(err.expectErr("error")).toBe(2);
  });

  it("has a match method", () => {
    const err: Result<number, number> = new Err(2);

    const x: string = err.match({
      Ok() {
        return "ok";
      },
      Err() {
        return "err";
      },
    });

    expect(x).toBe("err");
  });
});
