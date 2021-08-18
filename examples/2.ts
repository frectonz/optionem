import { None, Option, Some } from "optionem";

interface OptionMap<K, V> {
  get(key: K): Option<V>;
  set(key: K, value: V): void;
}

class OptionObjMap<K, V> implements OptionMap<K, V> {
  private store: object;
  constructor() {
    this.store = {};
  }

  get(key: K): Option<V> {
    const value = this.store[String(key)];

    if (value !== undefined) {
      return new Some(value);
    } else {
      return new None();
    }
  }

  set(key: K, value: V): void {
    this.store[String(key)] = value;
  }
}

export default function main() {
  const map = new OptionObjMap<string, number>();

  map.set("key1", 10);

  map.get("key1").match({
    Some(val) {
      console.log("key1", val);
    },
    None() {
      console.log("key1: None");
    },
  });

  map.get("key2").match({
    Some(val) {
      console.log("key2", val);
    },
    None() {
      console.log("key2: None");
    },
  });
}
