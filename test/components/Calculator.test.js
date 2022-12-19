import { Calculator } from "../../components/Calculator";

describe("class Calculator", () => {
    describe("Delete NaNs", () => {
        let calculator = new Calculator();
        test("Delete NaNs", () => {
            calculator.array = [1, 2, 3, 4, 5, NaN, 6];
            calculator.calculateValues();
            expect(calculator.array).toEqual([1, 2, 3, 4, 5, 6]);
        });
    });
    describe("Mean", () => {
        let calculator = new Calculator();
        test("int from array of +- integers", () => {
            calculator.array = [1, 2, -3, 4, 5];
            calculator.calculateMean();
            expect(calculator.mean).toBe(1.8);
        });
        test("float from array of +- floats", () => {
            calculator.array = [-1.1, 2.2, -3.3, 4.4, -5.5, 6.6];
            calculator.calculateMean();
            expect(calculator.mean).toBe(0.55);
        });
    });
    describe("Median", () => {
        let calculator = new Calculator();
        test("int from array of +- integers", () => {
            calculator.array = [1, 2, -3, 4, 5];
            calculator.calculateMedian();
            expect(calculator.median).toBe(2);
        });
        test("float from array of +- floats", () => {
            calculator.array = [-1.1, 2.2, -3.3, 4.4, -5.5, 6.6];
            calculator.calculateMedian();
            expect(calculator.median).toBe(0.55);
        });
    });
    describe("Mode", () => {
        let calculator = new Calculator();
        test("int from array of +- integers", () => {
            calculator.array = [1, 2, -3, 4, 5];
            calculator.calculateMode();
            expect(calculator.mode).toBe(-3);
        });
        test("float from array of +- floats", () => {
            calculator.array = [-1.1, 2.2, -3.3, 4.4, -5.5, 6.6];
            calculator.calculateMode();
            expect(calculator.mode).toBe(-5.5);
        });
    });
});