const Employee = require("../lib/Employee");
describe("Employee", () => {
  describe("Initialization", () => {
    test("Can initialize an employee object", () => {
      const e = new Employee();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Clark";
      const e = new Employee(name);
      expect(e.name).toBe(name);
    });
    test("Can set id attribute with constructor", () => {
      const id = 77;
      const e = new Employee("Nick", id);
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "tbeauchamp@2u.com";
      const e = new Employee("Nick", 77, email);
      expect(e.email).toBe(email);
    });
  });
