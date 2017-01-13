$(function(){

  function Rect(x, y, width, height){
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }

  var canvas = document.getElementById("c");
  var body = document.getElementsByTagName("body");
  var context = canvas.getContext("2d");
  var height = canvas.height;
  var width = canvas.width;
  var score = 0;
  var strikes = 0;
  var rect;

  function draw(){
    var x = Math.floor(Math.random() * 450) + 1
    var y = Math.floor(Math.random() * 450) + 1

    rect = new Rect(x, y, 50, 50)
    context.clearRect(0,0,width,height);
    context.fillStyle = "#ff00ff";
    context.fillRect(rect.x, rect.y, rect.w, rect.h);
  }

  function collides(rect, x, y){
    var isCollision = false;

    var left = rect.x;
    var right = rect.x + rect.w;
    var top = rect.y;
    var bottom = rect.y + rect.h

    if (right >= x && left <= x && bottom >= y && top <= y) {
      isCollision = true;
    }

    return isCollision;
  }

  function updateScore(){
    score += 5;
  }

  function updateStrikes(){
    strikes += 1;
  }

  function gameState(){
    return;
  }

  function main(){
    canvas.addEventListener("click",
      function(e){
        var x = e.clientX - canvas.getBoundingClientRect().left;
        var y = e.clientY - canvas.getBoundingClientRect().top;
        if(collides(rect, x, y)){
          draw();
          updateScore();
          $("#score").html(score);
          console.log(score);
        }else{
          console.log("not clicked");
          console.log(rect.x, rect.y);
          updateStrikes();
          console.log(strikes);
        }
      },
    false);
  }

  main();

  $("#start").click(function(){
    draw();
  })

  window.addEventListener("onload",
    function(e){
      var timeLoad = new Date();
      $("#c").click(function(){
        var timeClick = new Date();
        var totalTime = timeLoad - timeClick;
        console.log(totalTime);
      })
    }, false);

});
