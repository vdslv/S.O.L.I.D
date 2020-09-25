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
