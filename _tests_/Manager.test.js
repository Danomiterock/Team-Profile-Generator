const Manager = require("../lib/Manager");
describe("Manager", () => {
        test("Acquires Manager's office number.", () => {
        const e = new Manager(managerPhone);
        expect(typeof e).toBe(managerPhone);
      });
      test("Overwrites role as 'Manager'", () => {
        const e = new Manager(role);
        expect(typeof e).toBe("Manager");
      });
    })
