import { Calculator } from "../../components/Calculator";

describe("class Calculator", () => {
    describe("Mean", () => {
        let calculator = new Calculator();
        test("int from array of + integers", () => {
            calculator.array = [1, 2, 3, 4, 5];
            calculator.calculateMean();
            expect(calculator.mean).toBe(3);
        });
        test("int from array of +- integers", () => {
            calculator.array = [1, 2, -3, 4, 5];
            calculator.calculateMean();
            expect(calculator.mean).toBe(1.8);
        });
        test("int from array of +- integers", () => {
            calculator.array = [-1, -2, -3, -4, -5];
            calculator.calculateMean();
            expect(calculator.mean).toBe(-3);
        });
        test("float from array of + integers", () => {
            calculator.array = [1, 2, 3, 4, 5, 6];
            calculator.calculateMean();
            expect(calculator.mean).toBe(3.5);
        });
        test("float from array of + floats", () => {
            calculator.array = [1.1, 2.2, 3.3, 4.4, 5.5];
            calculator.calculateMean();
            expect(calculator.mean).toBe(3.3);
        });
        test("float from array of +- floats", () => {
            calculator.array = [-1.1, 2.2, -3.3, 4.4, -5.5, 6.6];
            calculator.calculateMean();
            expect(calculator.mean).toBe(0.55);
        });
    });
});