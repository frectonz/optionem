import { Some, None, Option } from "../../Option";
import { ResultUtils, Result, Err, Ok } from "..";

describe("Result Utils", () => {
  it("flattens a nested Result", () => {
    const nested1: Result<Result<string, string>, string> = new Ok(
      new Ok("Hello")
    );
    const nested2: Result<Result<string, string>, string> = new Err("error");
    const nested3: Result<Result<string, string>, string> = new Ok(
      new Ok("ok")
    );

    expect(ResultUtils.flatten(nested1)).toStrictEqual(new Ok("Hello"));
    expect(ResultUtils.flatten(nested2)).toStrictEqual(new Err("error"));
    expect(ResultUtils.flatten(nested3)).toStrictEqual(new Ok("ok"));
  });

  it("transposes", () => {
    const a: Result<Option<number>, number> = new Ok(new Some(10));
    const b: Result<Option<number>, number> = new Ok(new None());
    const c: Result<Option<number>, number> = new Err(10);

    expect(ResultUtils.transpose(a)).toStrictEqual(new Some(new Ok(10)));
    expect(ResultUtils.transpose(b)).toStrictEqual(new None());
    expect(ResultUtils.transpose(c)).toStrictEqual(new Some(new Err(10)));
  });
});
