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