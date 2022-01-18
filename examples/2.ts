import { None, Option, Some } from "optionem";

interface IOptionMap<K, V> {
  get(key: K): Option<V>;
  set(key: K, value: V): void;
}

class OptionMap<K, V> implements IOptionMap<K, V> {
  private store: Map<K, V>;
  constructor() {
    this.store = new Map<K, V>();
  }

  get(key: K): Option<V> {
    const value = this.store.get(key);

    if (value !== undefined) {
      return new Some(value);
    } else {
      return new None();
    }
  }

  set(key: K, value: V): void {
    this.store.set(key, value);
  }
}

export default function main() {
  const map = new OptionMap<string, number>();

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
