const Engineer = require('../lib/Engineer');


describe("Engineer Class", () => {
    describe("Engineer Properties", () => {
        it("should have a name property with the data type of 'string'.", () => {
            const obj = new Engineer("Jim", 7, "email@email.com", "jim778");
            expect(obj.name).toEqual("Jim");
            expect(typeof obj.name).toEqual("string");
        });
        it("should have an id property with the data type of 'number'.", () => {
            const obj = new Engineer("Jim", 7, "email@email.com", "jim778");
            expect(obj.id).toEqual(7);
            expect(typeof obj.id).toEqual("number");
        });
        it("should have an email property with the data type of 'string'.", () => {
            const obj = new Engineer("Jim", 7, "email@email.com", "jim778");
            expect(obj.email).toEqual("email@email.com");
            expect(typeof obj.email).toEqual("string");
        });
    })
    describe("Engineer Methods", () => {
        it("should return the name property of the new Engineer object.", () => {
            const obj = new Engineer("Jim", 7, "email@email.com", "jim778");
            expect(obj.getName()).toEqual("Jim");
        });
        it("should return the id property of the new Engineer object.", () => {
            const obj = new Engineer("Jim", 7, "email@email.com", "jim778");
            expect(obj.getId()).toEqual(7);
        });
        it("should return the email property of the new Engineer object", () => {
            const obj = new Engineer("Jim", 7, "email@email.com", "jim778");
            expect(obj.getEmail()).toEqual("email@email.com");
        });
        it("should return the role of the new Engineer object.", () => {
            const obj = new Engineer("Jim", 7, "email@email.com", "jim778");
            expect(obj.getRole()).toEqual("Engineer");
        });
        it("should return the GitHub username of the new Engineer object.", () => {
            const obj = new Engineer("Jim", 7, "email@email.com", "jim778");
            expect(obj.getGithub()).toEqual("jim778");
        });
    })
}); 