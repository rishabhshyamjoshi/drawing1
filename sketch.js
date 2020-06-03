var database;
var drawing = [];
var currentPath = [];

function setup() {
    database = firebase.database();
    canvas = createCanvas(500, 500);
    canvas.mousePressed(startPath);
    //canvas.mouseReleased(endPath)
 
}

function startPath(){
    currentPath = [];
    drawing.push(currentPath);

}
//function endPath(){
   
//}
function draw() {
    background("gray");
    if (mouseIsPressed) {
        var point = {
            x: mouseX,
            y: mouseY
          
        }
       // fill(0);
        console.log(point);
        currentPath.push(point);
        strokeWeight(9);
        stroke("white");
      
        for (var i = 0; i < drawing.length; i++) {
            var path = drawing[i];
            beginShape();
            for (var j = 0; j < path.length; j++) {
            vertex(path[j].x,path[j].y);

        }
        endShape();
    }
     
    }

}
