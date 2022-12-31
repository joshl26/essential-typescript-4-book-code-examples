import { sum } from "./calc";

test("chech result value", () => {
  let result = sum(10, 20, 30);
  expect(result).toBe(80);
});
