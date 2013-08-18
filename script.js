var c = canvas.getContext('2d');

var i, j, u, v, x, y,
    m = 10, 
    n = 10,
    size = 15,
    t = 0;

function draw () {
  var sin = Math.sin;
  var cos = Math.cos;
  
  c.clearRect(0,0,canvas.width, canvas.height);
  for (i=0; i<m; i++){
    for (j=0; j<n; j++){
      u = i/(m-1);
      v = j/(n-1);
      x = u * canvas.width + sin (t*(j+m))*30;
      y = v * canvas.height * cos (t*i+n);
      
      size = (sin (u*50+t)+2)*3.5;
    
     c.beginPath();
     c.arc (x, y, size, 0, 6 * Math.PI);
     c.fill();
      if (size>6){
     c.fillStyle = 'blue';
      }
      else if (size<5, size>4) {
     c.fillStyle = 'purple';
      }
      else {
         c.fillStyle = 'red';
      }
     c.fill();
  
    }
  }
  t = t + 0.006;
  if (t>5){
    t= t - 0006;
  }
  m = m+ 0.01;
  n = n+ 0.001;
  requestAnimationFrame(draw);
}

draw();