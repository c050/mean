import { Calculator } from "../../components/Calculator";

describe("class Calculator", () => {
    const max_decimals = 12;
    let calculator = new Calculator();
    calculator.max_decimals = max_decimals;
    const intTestArray = [1, 2, -3, 4, 5];
    const floatTestArray = [-1.1, 2.2, -3.3, 4.4, -5.5, 6.6];
    describe("Delete NaNs", () => {
        test("Delete NaNs", () => {
            calculator.array = [1, 2, 3, 4, 5, NaN, 6];
            calculator.calculateValues();
            expect(calculator.array).toEqual([1, 2, 3, 4, 5, 6]);
        });
    });
    describe("Mean", () => {
        test("int from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateMean();
            expect(calculator.mean).toBe(1.8);
        });
        test("float from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateMean();
            expect(calculator.mean).toBe(0.55);
        });
    });
    describe("Population Variance", () => {
        test("float from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateVariance();
            console.log(calculator.array);
            expect(calculator.variance).toBe(7.76);
        });
        test("float from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateVariance();
            expect(calculator.variance).toBe(18.049166666667);
        });
    }); 
    describe("Population Standard Deviation", () => {
        test("float from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateStandardDeviation();
            expect(calculator.standardDeviation).toBe(2.785677655437);
        });
        test("float from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateStandardDeviation();
            expect(calculator.standardDeviation).toBe(4.248431082961);
        });
    });
    describe("Sample Variance", () => {
        test("float from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateSampleVariance();
            expect(calculator.sampleVariance).toBe(9.7);
        });
        test("float from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateSampleVariance();
            expect(calculator.sampleVariance).toBe(21.659);
        });
    });
    describe("Sample Standard Deviation", () => {
        test("float from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateSampleStandardDeviation();
            expect(calculator.sampleStandardDeviation).toBe(3.114482300479);
        });
        test("float from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateSampleStandardDeviation();
            expect(calculator.sampleStandardDeviation).toBe(4.653923076287);
        });
    });
    describe("Median", () => {
        test("float from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateMedian();
            expect(calculator.median).toBe(2);
        });
        test("float from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateMedian();
            expect(calculator.median).toBe(0.55);
        });
    });
    describe("Mode", () => {
        test("int from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateMode();
            expect(calculator.mode).toBe(-3);
        });
        test("float from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateMode();
            expect(calculator.mode).toBe(-5.5);
        });
    });
    describe("Range", () => {
        test("int from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateRange();
            expect(calculator.range).toBe(8);
        });
        test("float from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateRange();
            expect(calculator.range).toBe(12.1);
        });
    });
    describe("Largest Value", () => {
        test("int from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateLargestValue();
            expect(calculator.largestValue).toBe(5);
        });
        test("float from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateLargestValue();
            expect(calculator.largestValue).toBe(6.6);
        });
    });
    describe("Smallest Value", () => {
        test("int from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateSmallestValue();
            expect(calculator.smallestValue).toBe(-3);
        });
        test("float from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateSmallestValue();
            expect(calculator.smallestValue).toBe(-5.5);
        });
    });
    describe("Sum", () => {
        test("int from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateSum();
            expect(calculator.sum).toBe(9);
        });
        test("float from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateSum();
            expect(calculator.sum).toBe(3.3);
        });
    });
    describe("Geometric Mean", () => {
        test("NaN from array of +- integers", () => {
            calculator.array = intTestArray;
            calculator.calculateGeometricMean();
            expect(calculator.geometricMean).toBe(NaN);
        });
        test("NaN from array of +- floats", () => {
            calculator.array = floatTestArray;
            calculator.calculateGeometricMean();
            expect(calculator.geometricMean).toBe(NaN);
        });
        test("float from array of positive integers", () => {
            calculator.array = [1,2,3,4,5];
            calculator.calculateGeometricMean();
            expect(calculator.geometricMean).toBe(2.605171084697);
        });
        test("float from array of positive floats", () => {
            calculator.array = [1.1,2.2,3.3,4.4,5.5];
            calculator.calculateGeometricMean();
            expect(calculator.geometricMean).toBe(2.865688193167);
        });
    });
});
