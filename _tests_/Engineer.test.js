const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
    describe("Initialize Role", () => {
      test("Acquires a GitHub username", () => {
        const e = new Engineer();
        expect(typeof e).toBe("object");
      });
      test("Overwrites role as 'Engineer'", () => {
        const e = new Engineer();
        expect(typeof e).toBe("object");
      });
    });
// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`}