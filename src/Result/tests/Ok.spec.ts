import { Ok, Result, Err } from "..";
import { None, Some } from "../../Option";

describe("Ok", () => {
  it("has an isOk method", () => {
    const ok: Result<number, string> = new Ok(10);

    expect(ok.isOk()).toBe(true);
  });

  it("has an isErr method", () => {
    const ok: Result<number, string> = new Ok(10);

    expect(ok.isErr()).toBe(false);
  });

  it("has a contains method", () => {
    const ok: Result<number, string> = new Ok(10);

    expect(ok.contains(10)).toBe(true);
  });

  it("has a containsErr method", () => {
    const ok: Result<number, string> = new Ok(10);

    expect(ok.containsErr("error")).toBe(false);
  });

  it("has an ok method", () => {
    const ok: Result<number, string> = new Ok(2);

    expect(ok.ok()).toStrictEqual(new Some(2));
  });

  it("has an err method", () => {
    const ok: Result<number, string> = new Ok(2);

    expect(ok.err()).toStrictEqual(new None());
  });

  it("has a map method", () => {
    const ok: Result<number, string> = new Ok(10);

    expect(ok.map((x) => String(x))).toStrictEqual(new Ok("10"));
  });

  it("has a mapOr method", () => {
    const ok: Result<string, string> = new Ok("foo");

    expect(ok.mapOr(10, (x) => x.length)).toBe(3);
  });

  it("has a mapOrElse method", () => {
    const ok: Result<string, string> = new Ok("foo");

    expect(
      ok.mapOrElse(
        (err) => err.length,
        (value) => value.length
      )
    ).toBe(3);
  });

  it("has a mapErr method", () => {
    const ok: Result<string, string> = new Ok("foo");

    expect(ok.mapErr((x) => x.length)).toStrictEqual(new Ok("foo"));
  });

  it("has an and method", () => {
    const ok: Result<string, string> = new Ok("foo");
    const err: Result<string, string> = new Err("boo");

    expect(ok.and(ok)).toStrictEqual(ok);
    expect(ok.and(err)).toStrictEqual(err);
  });

  it("has an andThen method", () => {
    const ok: Result<string, string> = new Ok("foo");

    expect(ok.andThen((value) => new Ok(value.length))).toStrictEqual(
      new Ok(3)
    );
    expect(ok.andThen(() => new Err("err"))).toStrictEqual(new Err("err"));
  });

  it("has an or method", () => {
    const ok: Result<string, string> = new Ok("foo");
    const err: Result<string, string> = new Err("boo");

    expect(ok.or(err)).toStrictEqual(ok);
    expect(ok.or(new Ok("foo"))).toStrictEqual(ok);
  });

  it("has an orElse method", () => {
    const ok: Result<number, number> = new Ok(2);

    expect(ok.orElse((err) => new Ok(err * err))).toStrictEqual(ok);
  });

  it("has an unwrapOr method", () => {
    const ok: Result<number, number> = new Ok(2);

    expect(ok.unwrapOr(10)).toBe(2);
  });

  it("has an unwrapOrElse method", () => {
    const ok: Result<number, number> = new Ok(2);

    expect(ok.unwrapOrElse((err) => err * 2)).toBe(2);
  });

  it("has an unwrap method", () => {
    const ok: Result<number, number> = new Ok(2);

    expect(ok.unwrap()).toBe(2);
  });

  it("has an unwrapErr method", () => {
    const ok: Result<number, number> = new Ok(2);

    expect(() => ok.unwrapErr()).toThrow("Found a Ok in the Result");
  });

  it("has an expect method", () => {
    const ok: Result<number, number> = new Ok(2);

    expect(ok.expect("error")).toBe(2);
  });

  it("has an expectErr method", () => {
    const ok: Result<number, number> = new Ok(2);

    expect(() => ok.expectErr("error")).toThrow("error");
  });

  it("has a match method", () => {
    const ok: Result<number, number> = new Ok(2);

    const x: string = ok.match({
      Ok() {
        return "ok";
      },
      Err() {
        return "err";
      },
    });

    expect(x).toBe("ok");
  });
});
