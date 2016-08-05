var can, ctx;
can = document.getElementById("can");
ctx = can.getContext("2d");
ctx.font = "normal 36px Impact";
ctx.fillStyle = "orange";
ctx.strokeStyle = "green";
ctx.lineWidth = 5;

ctx.translate(50, 50);// left offset, top offset
ctx.strokeText("Tata",0,0,100);
ctx.fillText("Tata",0,0,100);
