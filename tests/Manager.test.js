const Manager = require('../lib/Manager');


describe("Manager Class", () => {
    describe("Manager Properties", () => {
        it("should have a name property with the data type of 'string'.", () => {
            const obj = new Manager("Jim", 7, "email@email.com", 2145557878);
            expect(obj.name).toEqual("Jim");
            expect(typeof obj.name).toEqual("string");
        });
        it("should have an id property with the data type of 'number'.", () => {
            const obj = new Manager("Jim", 7, "email@email.com", 2145557878);
            expect(obj.id).toEqual(7);
            expect(typeof obj.id).toEqual("number");
        });
        it("should have an email property with the data type of 'string'.", () => {
            const obj = new Manager("Jim", 7, "email@email.com", 2145557878);
            expect(obj.email).toEqual("email@email.com");
            expect(typeof obj.email).toEqual("string");
        });
        it("should have an office number property with the data type of 'number'.", () => {
            const obj = new Manager("Jim", 7, "email@email.com", 2145557878);
            expect(obj.officeNumber).toEqual(2145557878);
            expect(typeof obj.officeNumber).toEqual("number");
        });
    })
    describe("Manager Methods", () => {
        it("should return the name property of the new Manager object.", () => {
            const obj = new Manager("Jim", 7, "email@email.com", 2145557878);
            expect(obj.getName()).toEqual("Jim");
        });
        it("should return the id property of the new Manager object.", () => {
            const obj = new Manager("Jim", 7, "email@email.com", 2145557878);
            expect(obj.getId()).toEqual(7);
        });
        it("should return the email property of the new Manager object", () => {
            const obj = new Manager("Jim", 7, "email@email.com", 2145557878);
            expect(obj.getEmail()).toEqual("email@email.com");
        });
        it("should return the role of the new Manager object.", () => {
            const obj = new Manager("Jim", 7, "email@email.com", 2145557878);
            expect(obj.getRole()).toEqual("Manager");
        });
    })
}); 