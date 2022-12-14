export class Calculator {
    constructor() {
        this.array = [];
        this.mean = 0;
        this.standardDeviation = 0;
        this.median = 0;
        this.mode = 0;
    };

    calculateMean() {
        this.mean = this.array.reduce((a, b) => a + b) / this.array.length;
    };

    calculateStandardDeviation() {
        this.standardDeviation = Math.sqrt(this.array.reduce((a, b) => a + b) / this.array.length);
    };

    calculateMedian() {
        this.median = this.array.sort((a, b) => a - b)[Math.floor(this.array.length / 2)];
    };
    
    calculateMode() {
        const modeMap = {};
        let maxCount = 0;
        let mode = 0;
    
        this.array.forEach((value) => {
        if (!modeMap[value]) {
            modeMap[value] = 1;
        } else {
            modeMap[value]++;
        }
    
        if (modeMap[value] > maxCount) {
            maxCount = modeMap[value];
            mode = value;
        }
        });
    
        this.mode = mode;
    }
};
