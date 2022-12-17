var ss = require('simple-statistics');

export class Calculator {
    constructor() {
        this.array = [];
        this.mean = 0;
        this.variance = 0;
        this.standardDeviation = 0;
        this.geometricMean = 0;
        this.median = 0;
        this.mode = 0;
        this.range = 0;
        this.largestValue = 0;
        this.smallestValue = 0;
        this.sum = 0;
    };
    calculateValues() {
        this.calculateMean();
        this.calculateVariance();
        this.calculateStandardDeviation();
        this.calculateGeometricMean();
        this.calculateMedian();
        this.calculateMode();
        this.calculateRange();
        this.calculateLargestValue();
        this.calculateSmallestValue();
        this.calculateSum();
        // this.array.sort((a, b) => a - b);
    };
    calculateMean() {
        this.mean = ss.mean(this.array);
    };
    calculateVariance() {
        this.variance = ss.variance(this.array);
    };
    calculateStandardDeviation() {
        this.standardDeviation = ss.standardDeviation(this.array);
    };
    calculateGeometricMean() {
        this.geometricMean = ss.geometricMean(this.array);
    };
    calculateMedian() {
        this.median = ss.median(this.array);
    };
    calculateMode() {
        this.mode = ss.mode(this.array);
    }
    calculateRange() {
        {}
    }
    calculateLargestValue() {
        this.largestValue = ss.max(this.array);
    }
    calculateSmallestValue() {
        this.smallestValue = ss.min(this.array);
    }
    calculateSum() {
        this.sum = ss.sum(this.array);
    }
};
