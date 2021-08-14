import { None } from "./None";
import { Option } from "./Option";

export function flatten<T>(opt: Option<Option<T>>): Option<T> {
  return opt.unwrapOr(new None());
}
