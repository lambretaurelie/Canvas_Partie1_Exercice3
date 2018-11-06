var c = document.getElementById( "cars" );
var ctx = c.getContext("2d");
// Fond
ctx.fillStyle = "#00B251";
ctx.fillRect(150,150,300,50);


// carré
ctx.fillStyle = "#00B251";
ctx.fillRect(200,100,200,50);

// rond1
ctx.beginPath();
ctx.arc(200,240,40,0,Math.PI*2,true);
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
// rond2
ctx.beginPath();
ctx.arc(400,240,40,0,Math.PI*2,true);
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
