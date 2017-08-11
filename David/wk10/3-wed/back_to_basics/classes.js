function createPoint(x,y){
    return { x: x, y: y}
}

createPoint(3,4);
createPoint(2,2);


//constructor functions

function Point() {
    this.x = 3;
    this.y = 4;
}

var newPoint = new Point();

class Point {

    constructor(){
        this.x = 3;
        this.y = 4;
    }

}

var newSecondPoint = new Point(2,3);