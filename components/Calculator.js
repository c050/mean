var ss = require('simple-statistics');

export class Calculator {
    constructor() {
        this.array = [];
        this.mean = 0;
        this.variance = 0;
        this.sampleVariance = 0;
        this.standardDeviation = 0;
        this.sampleStandardDeviation = 0;
        this.geometricMean = 0;
        this.median = 0;
        this.mode = 0;
        this.range = 0;
        this.largestValue = 0;
        this.smallestValue = 0;
        this.sum = 0;
        this.max_decimals = 12;
    };
    calculateValues() {
        // Delete all NaN values from array
        this.array = this.array.filter(function (el) {
            return !isNaN(el);
        });
        if (this.array.length == 0) {
            return;
        }
        else {
            this.calculateMean();
            this.calculateVariance();
            this.calculateSampleVariance();
            this.calculateStandardDeviation();
            this.calculateSampleStandardDeviation();
            this.calculateGeometricMean();
            this.calculateMedian();
            this.calculateMode();
            this.calculateRange();
            this.calculateLargestValue();
            this.calculateSmallestValue();
            this.calculateSum();
        }
    };
    calculateMean() {
        this.mean = parseFloat(ss.mean(this.array).toFixed(this.max_decimals));
    };
    calculateVariance() {
        this.variance = parseFloat(ss.variance(this.array).toFixed(this.max_decimals));
    };
    calculateSampleVariance() {
        this.sampleVariance = parseFloat(ss.sampleVariance(this.array).toFixed(this.max_decimals));
    };
    calculateStandardDeviation() {
        this.standardDeviation = parseFloat(ss.standardDeviation(this.array).toFixed(this.max_decimals));
    };
    calculateSampleStandardDeviation() {
        this.sampleStandardDeviation = parseFloat(ss.sampleStandardDeviation(this.array).toFixed(this.max_decimals));
    };
    calculateGeometricMean() {
        if (this.array.some(function (el) {
            return el < 0;
        })) {
            this.geometricMean = NaN;
        }
        else {
            this.geometricMean = parseFloat(ss.geometricMean(this.array).toFixed(this.max_decimals));
        }
    };
    calculateMedian() {
        this.median = ss.median(this.array);
    };
    calculateMode() {
        this.mode = ss.mode(this.array);
    }
    calculateRange() {
        this.range = ss.max(this.array) - ss.min(this.array);
    }
    calculateLargestValue() {
        this.largestValue = ss.max(this.array);
    }
    calculateSmallestValue() {
        this.smallestValue = ss.min(this.array);
    }
    calculateSum() {
        this.sum = parseFloat(ss.sum(this.array).toFixed(this.max_decimals));
    }
};
