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
            this.calculateStandardDeviation();
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
        this.range = ss.max(this.array) - ss.min(this.array);
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
