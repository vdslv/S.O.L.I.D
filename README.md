# S.O.L.I.D. 
S.O.L.I.D: The First 5 Principles of Object Oriented Design :shipit:

S.O.L.I.D is an acronym for the first five object-oriented design(OOD)** principles** by Robert C. Martin, popularly known as Uncle Bob.

These principles, when combined together, make it easy for a programmer to develop software that are easy to maintain and extend.
They also make it easy for developers to avoid code smells, easily refactor code, and are also a part of the agile or adaptive software development.


## S.O.L.I.D stands for:

- S - Single-responsiblity principle
- O - Open-closed principle
- L - Liskov substitution principle
- I - Interface segregation principle
- D - Dependency Inversion Principle


### Single-responsibility Principle
```
A class should have one and only one reason to change, meaning that a class should have only one job.
```
<details><summary>Typescript Example</summary>
<p>
    
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
</p>
</details>
### Open-closed Principle
```
Objects or entities should be open for extension, but closed for modification.
```
```ts
interface ShapeInterface {
    area(): number
}

class Square implements ShapeInterface {
    constructor(public length: number) {
    }
    area() {
        return Math.pow(this.length,2)
    }
}

class Circle implements ShapeInterface {
    constructor(public radius: number) {
    }
    area() {
        return Math.PI * Math.pow(this.radius,2)
    }
}

function sum(arr: ShapeInterface[]) {
   let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement.area();

        // wrong, each class should have their own method to calculate area,
        // and be extended from interface
        //
        // if(arrElement instanceof Circle) {
        //     sum += Math.PI * Math.pow(arrElement.radius,2)
        // } else if (arrElement instanceof Square) {
        //     Math.pow(arrElement.length,2)
        // }
    }

    return sum;
}
```

### Liskov substitution principle
```
 Every subclass/derived class should be substitutable for their base/parent class.
```
```ts
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
```

### Interface segregation principle
```
A client should never be forced to implement an interface
that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.
```
```ts
// A client should never be forced to implement an interface that it doesn’t use or
// clients shouldn’t be forced to depend on methods they do not use.

interface ShapeInterface {
    area();

    // wrong, should be in new interface, we do not use method in every class
    // volume();
}

interface SolidShapeInterface {
    volume();
}

class Square implements ShapeInterface {
    area() {
        console.log('SQUARE AREA')
    }
}

class Cuboid implements ShapeInterface, SolidShapeInterface {
    area() {
        console.log('CUBOID AREA')
    }

    volume() {
        console.log('CUBOID VOLUME')
    }
}
```

### Dependency Inversion principle
```
Entities must depend on abstractions not on concretions.
It states that the high level module must not depend on the low level module,
but they should depend on abstractions.
```
```ts
// Entities must depend on abstractions not on concretions.
// It states that the high level module must not depend on the low level module,
// but they should depend on abstractions.

// Depend on Abstraction not on concretions

interface DBConnectionInterface {
    connect();
}

class MySQLConnection implements DBConnectionInterface {
    connect() {
        return 'Database connection';
    }
}

class MongoDBConnection implements DBConnectionInterface {
    connect() {
        return 'MONGO DB connection';
    }
}

class PasswordReminder {
    constructor(public dbConnection: DBConnectionInterface) {
    }
}

const pass1 = new PasswordReminder(new MySQLConnection());
const pass2 = new PasswordReminder(new MongoDBConnection());

console.log(pass1.dbConnection.connect());
console.log(pass2.dbConnection.connect());
```
