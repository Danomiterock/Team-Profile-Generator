const Employee = require("../lib/Employee");
describe("Employee", () => {
  describe("Initialization", () => {
    test("Can initialize an employee object", () => {
      const e = new Employee();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Jethro";
      const e = new Employee(name);
      expect(e.name).toBe(name);
    });
    test("Can set id attribute with constructor", () => {
      const id = E6;
      const e = new Employee("Sebastian", id);
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "newguy@madeup.com";
      const e = new Employee("Sebastian", E6, email);
      expect(e.email).toBe(email);
    });
  });
});
