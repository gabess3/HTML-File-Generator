const Intern = require('../lib/Intern');

describe("Intern Class", () => {
    describe("Intern Properties", () => {
        it("should have a name property with the data type of 'string'.", () => {
            const obj = new Intern("Jim", 7, "email@email.com", "Yale");
            expect(obj.name).toEqual("Jim");
            expect(typeof obj.name).toEqual("string");
        });
        it("should have an id property with the data type of 'number'.", () => {
            const obj = new Intern("Jim", 7, "email@email.com", "Yale");
            expect(obj.id).toEqual(7);
            expect(typeof obj.id).toEqual("number");
        });
        it("should have an email property with the data type of 'string'.", () => {
            const obj = new Intern("Jim", 7, "email@email.com", "Yale");
            expect(obj.email).toEqual("email@email.com");
            expect(typeof obj.email).toEqual("string");
        });
    })
    describe("Intern Methods", () => {
        it("should return the name property of the new Intern object.", () => {
            const obj = new Intern("Jim", 7, "email@email.com", "Yale");
            expect(obj.getName()).toEqual("Jim");
        });
        it("should return the id property of the new Intern object.", () => {
            const obj = new Intern("Jim", 7, "email@email.com", "Yale");
            expect(obj.getId()).toEqual(7);
        });
        it("should return the email property of the new Intern object", () => {
            const obj = new Intern("Jim", 7, "email@email.com", "Yale");
            expect(obj.getEmail()).toEqual("email@email.com");
        });
        it("should return the role of the new Intern object.", () => {
            const obj = new Intern("Jim", 7, "email@email.com", "Yale");
            expect(obj.getRole()).toEqual("Intern");
        });
        it("should return the GitHub username of the new Intern object.", () => {
            const obj = new Intern("Jim", 7, "email@email.com", "Yale");
            expect(obj.getSchool()).toEqual("Yale");
        });
    })
}); 