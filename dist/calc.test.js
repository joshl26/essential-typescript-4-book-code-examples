"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
test("chech result value", () => {
    let result = calc_1.sum(10, 20, 30);
    expect(result).toBe(80);
});
//# sourceMappingURL=calc.test.js.map