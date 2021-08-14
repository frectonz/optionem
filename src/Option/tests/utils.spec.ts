import { Option, Some, None, OptionUtils } from "..";

describe("Option Utils", () => {
  it("flattens a nested option", () => {
    const nested1: Option<Option<string>> = new Some(new Some("Hello"));
    const nested2: Option<Option<string>> = new None();
    const nested3: Option<Option<string>> = new Some(new None());

    expect(OptionUtils.flatten(nested1)).toStrictEqual(new Some("Hello"));
    expect(OptionUtils.flatten(nested2)).toStrictEqual(new None());
    expect(OptionUtils.flatten(nested3)).toStrictEqual(new None());
  });
});
