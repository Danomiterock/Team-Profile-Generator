const Intern = require("../lib/Intern");
describe("Intern", () => {
        test("Acquires Intern's school name.", () => {
        const e = new Intern(schoolName);
        expect(typeof e).toBe(schoolName);
      });
      test("Overwrites role as 'Intern'", () => {
        const e = new Intern(role);
        expect(typeof e).toBe("Intern");
      });
    })
