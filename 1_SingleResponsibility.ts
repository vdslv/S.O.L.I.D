// A class should have one and only one reason to change,
// meaning that a class should have only one job.

class Circle {
    constructor(public radius: number) {
    }
}

class Rectangle {
    constructor(public length: number) {
    }
}

class AreaCalculator {
    constructor(public shapes: any[]) {
    }
    sum() {
        // logic to sum the areas
        return 9;
    }

    // wrong, should be in separate class
    // output() {
    //     return `Sum of the areas of provided shaper: ${this.sum()}`
    // }
}

class SumCalculatorOutputter {
    constructor(public areas: AreaCalculator) {
    }

    outputStr() {
        console.log(`Sum of the areas: ${this.areas.sum()}`)
    }

    outPutJSON() {
        console.log(JSON.stringify(`Sum of the areas JSON: ${this.areas.sum()}`))
    }
}

const areas = new AreaCalculator([new Circle(5), new Rectangle(7)]);
const output = new SumCalculatorOutputter(areas);
