const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
        test("Acquires a GitHub username", () => {
        const e = new Engineer(engineerGitHub);
        expect(typeof e).toBe(engineerGitHub);
      });
      test("Overwrites role as 'Engineer'", () => {
        const e = new Engineer(role);
        expect(typeof e).toBe("Engineer");
      });
    })