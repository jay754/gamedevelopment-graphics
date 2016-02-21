$(function() {
  var canvas = document.getElementById("c");
  var context = canvas.getContext("2d");
  var height = canvas.height;
  var width = canvas.width;
  var coor = [];
  var isPaused = false;

  var x =  0;
  var y = 15;
  var speed = 5;


  function drawArc(context,x,y){
    context.beginPath();
    context.arc(x,y,5,0,2*Math.PI);
    context.stroke();
  }

  function draw(e) {
    context.clearRect(0, 0, 500, 500);
    context.fillStyle = "#ff00ff";
    context.fillRect(x, y, 25, 25);
    // x += speed;
    // else if(x <= 0 || x >= 475){
    //
    // }
    if(e){
      if(e == 39){
        if(x >= 0 || x <= 475){
          x += speed;
        }
      }
      else if(e == 37){
        x -= speed;
      }
      else if(e == 38){
        y -= speed;
      }
      else if(e == 40){
        y += speed;
      }
      else{
        return;
      }
    }
  }

  var circleCoordinates = {};
  circleCoordinates.x = 50;
  circleCoordinates.y = 100;

  function intersects(circle, rectangle){
    var circleDistance = {};
    circleDistance.x = Math.abs(circle.x - rectangle.x);
    circleDistance.y = Math.abs(circle.y - rectangle.y);

    if(circleDistance.x > (rect.width/2+circle.r)){
      return false;
    }
    else if(circleDistance.y > (rect.height/2 + circle.r)){
      return false;
    }

    if(circleDistance.x <= (rect.width/2)){
      return true;
    }
    else if(circleDistance.y <= (rect.height/2)){
      return true;
    }

    var cornerDistanceX = Math.pow((circleDistance.x - rect.width/2), 2);
    var cornerDistanceY = Math.pow((circleDistance.y - rect.height/2), 2);

    var cornerDistance_sq = Math.pow((circleDistance.x - rect.width/2), 2);

    return (cornerDistance_sq <= Math.pow((circle.r, 2)));
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getCoordinates(){
    var destX = height + 5;
    var destY = width + 5;
    var randomX = getRandomInt(0,500);
    var randomY = getRandomInt(0,350);

    if(destX < x || destY < y ){
      getCoordinates();
    }else{
      return [randomX, randomY];
    }
  }

  function getPoints(){
    for (var i = 0; i < 5; i++) {
      var circle_x = getCoordinates()[0];
      var circle_y = getCoordinates()[1];
      coor.push([circle_x,circle_y]);
    }
  }

  function drawCircles(){
    for(var i=0;i<coor.length;i++){
      drawArc(context, coor[i][0], coor[i][1]);
    }
  }

  function pauseGame(){
    $("#pause").click(function(){
      console.log('you clicked pause');
      if(!isPaused){
        isPaused = true;
      }
      else{
        isPaused = false;
      }
      console.log(isPaused);
    });
  }

  // setInterval(function(){ test() }, 300);

  function main(){
    window.addEventListener("keydown",
      function(e){
        var rect = canvas.getBoundingClientRect();
        draw(e.keyCode);
        drawCircles();
        var CoordinatesX = x - rect.left;
        var CoordinatesY = y - rect.top;
        console.log(x, y);
      },
      false);

      getPoints();
      console.log(coor);
      pauseGame();
  }

  main();

});
