const Employee = require('../lib/Employee')

describe("Employee Class", () => {
    describe("Employee Properties", () => {
        it("should have a name property with the data type of 'string'.", () => {
            const obj = new Employee("Jim", 7, "email@email.com");
            expect(obj.name).toEqual("Jim");
            expect(typeof obj.name).toEqual("string");
        });
        it("should have an id property with the data type of 'number'.", () => {
            const obj = new Employee("Jim", 7, "email@email.com");
            expect(obj.id).toEqual(7);
            expect(typeof obj.id).toEqual("number");
        });
        it("should have an email property with the data type of 'string'.", () => {
            const obj = new Employee("Jim", 7, "email@email.com");
            expect(obj.email).toEqual("email@email.com");
            expect(typeof obj.email).toEqual("string");
        });
    })
    describe("Employee Methods", () => {
        it("should return the name property of the new Employee object.", () => {
            const obj = new Employee("Jim", 7, "email@email.com");
            expect(obj.getName()).toEqual("Jim");
        });
        it("should return the id property of the new Employee object.", () => {
            const obj = new Employee("Jim", 7, "email@email.com");
            expect(obj.getId()).toEqual(7);
        });
        it("should return the email property of the new Employee object", () => {
            const obj = new Employee("Jim", 7, "email@email.com");
            expect(obj.getEmail()).toEqual("email@email.com");
        });
        it("should return the role of the new Employee object.", () => {
            const obj = new Employee("Jim", 7, "email@email.com");
            expect(obj.getRole()).toEqual("Employee");
        });
    })
}); 
