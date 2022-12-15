import { Calculator } from "../../components/Calculator";

describe("class Calculator", () => {
    describe("Mean", () => {
        test("Mean (int) of an array of integers [1,2,3,4,5] -> 3", () => {
            let calculator = new Calculator();
            calculator.array = [1, 2, 3, 4, 5];
            calculator.calculateMean();
            expect(calculator.mean).toBe(3);
        });
        test("Mean (float) of an array of integers [1,2,3,4,5,6] -> 3.5", () => {
            let calculator = new Calculator();
            calculator.array = [1, 2, 3, 4, 5, 6];
            calculator.calculateMean();
            expect(calculator.mean).toBe(3.5);
        });
        test("Mean (float) of an array of floats [1.1, 2.2, 3.3, 4.4, 5.5] -> 3.3", () => {
            let calculator = new Calculator();
            calculator.array = [1.1, 2.2, 3.3, 4.4, 5.5];
            calculator.calculateMean();
            expect(calculator.mean).toBe(3.3);
        });
    });
});