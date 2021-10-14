 window.onload = function (){
  var canvas = document.getElementById('canvas'),
     width=300,
     height=400,
     ctx=canvas.getContext('2d');
     
    canvas.width=width;
    canvas.height=height;
   
   function render(){ 
    ctx.clearRect(0,0,width, height);
     
    for (var i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random()*width,Math.random()*height);
      ctx.lineTo(Math.random()*width,Math.random()*height);
      ctx.stroke();
    }
   }
   
   requestAnimationFrame(render);
  }
