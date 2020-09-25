// every subclass/derived class should be substitutable for their base/parent class.

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

class VolumeCalculator extends AreaCalculator {
    constructor(public shapes: any[]) {
        super(shapes);
    }

    sum() {
        // logic to calculate volumes and return array
        // wrong, can not return array as the output of parent and child should be same
        // return [1,2,3]

        return 25
    }
}

const areas = new AreaCalculator([new Circle(5), new Rectangle(7)]);
const volumes = new VolumeCalculator([new Circle(5), new Rectangle(7)])

const output = new SumCalculatorOutputter(areas);
const output2 = new SumCalculatorOutputter(volumes);

output.outputStr();
output2.outPutJSON();