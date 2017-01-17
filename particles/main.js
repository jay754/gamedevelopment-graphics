// took the colors from https://codepen.io/rachsmith/post/hack-physics-and-javascript-1

http://codepen.io/jay754/pen/rjWZoK

$(function(){
  var canvas = document.getElementById("c");
  var context = canvas.getContext("2d");
  var height = canvas.height;
  var width = canvas.width;
  var colors = ['#029DAF', '#E5D599', '#FFC219', '#F07C19', '#E32551'];
  var particles = [];

  function part(x,y,vx,vy,degree,color){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.degree = degree;
    this.color = color;
  }

  function create(){
    for(var i=0;i<1000;i++){
      var x = 250;
      var y = 250;
      var vx = -2+Math.random()*4;
      var vy = Math.random()*-3;
      var degree = 20;
      var color = colors[Math.floor(Math.random() * 5) + 1]
      var p = new part(x, y, vx, vy, degree, color);

      particles.push(p);
    }
  }

  function update(){
    context.clearRect(0,0,width,height);
    for(var p=0;p<particles.length;p++){
      particles[p].x += particles[p].vx;
      particles[p].y += particles[p].vy;
      particles[p].degree += 5;

      context.fillStyle = particles[p].color;
      context.rotate(particles[p].degree*Math.PI/180);
      context.fillRect(particles[p].x,particles[p].y,5,5);
    }

    // requestAnimationFrame(update);
  }

  create();
  console.log(particles);
  // update();
  setInterval(update, 5);
});
