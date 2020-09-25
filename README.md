# S.O.L.I.D. 
S.O.L.I.D: The First 5 Principles of Object Oriented Design :shipit:

S.O.L.I.D is an acronym for the first five object-oriented design(OOD)** principles** by Robert C. Martin, popularly known as Uncle Bob.

These principles, when combined together, make it easy for a programmer to develop software that are easy to maintain and extend.
They also make it easy for developers to avoid code smells, easily refactor code, and are also a part of the agile or adaptive software development.


### S.O.L.I.D stands for:

- S - Single-responsiblity principle
- O - Open-closed principle
- L - Liskov substitution principle
- I - Interface segregation principle
- D - Dependency Inversion Principle


#### Single-responsibility Principle
```
A class should have one and only one reason to change, meaning that a class should have only one job.
```
```ts
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
```

#### Open-closed Principle
```
Objects or entities should be open for extension, but closed for modification.
```

#### Liskov substitution principle
```
 Every subclass/derived class should be substitutable for their base/parent class.
```

#### Interface segregation principle
```
A client should never be forced to implement an interface
that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.
```

#### Dependency Inversion principle
```
Entities must depend on abstractions not on concretions.
It states that the high level module must not depend on the low level module, but they should depend on abstractions.
```
