window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
    
    var slider = document.getElementById("slider");

    var sliderVar = 0; //variable to be controlled

    var dispDiv = document.getElementById("dispDiv");

    //Slider
    slider.addEventListener("change", function() { 
      sliderVar = slider.value;  
    })
    setInterval(function() {
      sliderVar = slider.value;
    }, 100)
	
	var W = window.innerWidth, H = window.innerHeight;
	canvas.width = 500;
	canvas.height = 500;
	
	var particles = [];
	
	var particle_count = 75;
	for(var i = 0; i < particle_count; i++) {
		particles.push(new particle());
	}
    
	function particle() {
		//speed, angle and spread
		this.speed = {x: -2 + Math.random() * 5, y: -14 + Math.random() * 15};
		
        //location
		this.location = {x: 270, y: 120};
        
		//range of radius
		this.radius = 7 + Math.random() * 15;
        
		//range of the life
		this.life = 20+Math.random()*10;
		this.remaining_life = this.life;
        
		//color of smoke
		this.r = 60;
		this.g = 60;
		this.b = 60;
	}
	
	function draw() {
        
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "white";
        ctx.fillRect(0, 0, W, H);
        drawSky();
        
		
		for(var i = 0; i < particles.length; i++) {
			var p = particles[i];
			ctx.beginPath();
            
            //change opacity of particles as they die
			p.opacity = Math.round(p.remaining_life/p.life*100)/100
            
			//Gradient
			var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
			gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
			ctx.fillStyle = gradient;
			ctx.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
			ctx.fill();
			
			//move particles.
			p.remaining_life--;
			p.radius--;
			p.location.x += p.speed.x;
			p.location.y += p.speed.y - sliderVar/5;
			
			//make particle when another one dies
			if(p.remaining_life < 0 || p.radius < 0) {
				particles[i] = new particle();
            
			}
		}
        drawCompleteHouse();
	}
	
	setInterval(draw, 30);



function drawCompleteHouse() {

    drawGround();
    
    drawFront();
    
    drawRoof1();
    drawRoof2();
    
    drawSide();
    
    drawWindow1();
    drawWindow2();
    drawWindow3();
    
    drawDoor();
    drawDoorKnob();
    drawWalkWay();
    
    drawChimney();
    drawChimneySide();
    drawChimneyTop();
    
    drawFlowerPot();
    drawFlower1();
    drawFlower2();
    drawFlower3();
}

function drawSky() {
    ctx.beginPath();
    ctx.rect(0, 0, 500, 350);
    ctx.fillStyle = "#C1F4F8";
    ctx.fill();
}

function drawGround() {
    ctx.beginPath();
    ctx.rect(0, 300, 500, 150);
    ctx.fillStyle = "#3B8A3A";
    ctx.fill();
}

function drawFront() {
    ctx.beginPath();
    ctx.rect(70, 280, 140, 110);
    ctx.fillStyle = "#A61E4C";
    ctx.fill();
}

function drawRoof1() { 
    ctx.beginPath();
    ctx.moveTo(45, 280);
    ctx.lineTo(235, 280);
    ctx.lineTo(137, 180);
    ctx.closePath();
    ctx.fillStyle = "#936D33";
    ctx.fill();
}

function drawRoof2() {
    ctx.beginPath();
    ctx.moveTo(137, 180);
    ctx.lineTo(235, 280);
    ctx.lineTo(405, 250);
    ctx.lineTo(300, 160);
    ctx.closePath();
    ctx.fillStyle = "#88642D";
    ctx.fill();
}

function drawSide() {
    ctx.beginPath();
    ctx.moveTo(210, 280);
    ctx.lineTo(210, 390);
    ctx.lineTo(385, 350);
    ctx.lineTo(385, 253);
    ctx.lineTo(235, 280);
    ctx.closePath()
    ctx.fillStyle = "#7C1537";
    ctx.fill();
}

function drawWindow1() {
    ctx.beginPath();
    ctx.rect(80, 300, 50, 50);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#EDFEFF";
    ctx.fill();
}

function drawWindow2() {
    ctx.beginPath();
    ctx.moveTo(240, 300);
    ctx.lineTo(240, 350);
    ctx.lineTo(290, 340);
    ctx.lineTo(290, 290);
    ctx.closePath()
    ctx.stroke();
    ctx.fillStyle = "#EDFEFF";
    ctx.fill();
}

function drawWindow3() {
    ctx.beginPath();
    ctx.moveTo(310, 285);
    ctx.lineTo(310, 335);
    ctx.lineTo(360, 325);
    ctx.lineTo(360, 275);
    ctx.closePath()
    ctx.stroke();
    ctx.fillStyle = "#EDFEFF";
    ctx.fill();
}

function drawDoor() {
    ctx.beginPath();
    ctx.rect(145, 300, 55, 90);
    ctx.fillStyle = "#392413";
    ctx.fill();
}

function drawDoorKnob() {
    var x = 155;
    var y = 350;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fillStyle = "#EEE130";
    ctx.fill(); 
}

function drawChimney() { 
    ctx.beginPath();
    ctx.rect(252, 125, 33, 60);
    ctx.fillStyle = "#682112";
    ctx.fill();
}

function drawChimneySide() {
    ctx.beginPath();
    ctx.moveTo(285, 125);
    ctx.lineTo(285, 185);
    ctx.lineTo(295, 180);
    ctx.lineTo(295, 120);
    ctx.closePath()
    ctx.fillStyle = "#541B0E";
    ctx.fill();
}

function drawChimneyTop() {
    ctx.beginPath();
    ctx.moveTo(252, 125);
    ctx.lineTo(285, 125);
    ctx.lineTo(295, 120);
    ctx.lineTo(260, 120);
    ctx.closePath()
    ctx.fillStyle = "#220C08";
    ctx.fill();
}

function drawWalkWay() {
    ctx.beginPath();
    ctx.moveTo(145, 390);
    ctx.lineTo(50, 450);
    ctx.lineTo(105, 450);
    ctx.lineTo(200, 390);
    ctx.closePath();
    ctx.fillStyle = "#616B67";
    ctx.fill();
}

function drawFlowerPot() {
    ctx.beginPath();
    ctx.moveTo(75, 380);
    ctx.lineTo(80, 390);
    ctx.lineTo(130, 390);
    ctx.lineTo(135, 380);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#6B310B";
    ctx.fill();
}

function drawFlower1() {
    var a = 81;
    var b = 362;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(a, b, radius, startAngle, endAngle);
    ctx.fillStyle = "#10B4AD";
    ctx.fill();
    
    var c = 85;
    var d = 359;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(c, d, radius, startAngle, endAngle);
    ctx.fillStyle = "#10B4AD";
    ctx.fill(); 
    
    var e = 89;
    var f = 362;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(e, f, radius, startAngle, endAngle);
    ctx.fillStyle = "#10B4AD";
    ctx.fill(); 
    
    var g = 87;
    var h = 367;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(g, h, radius, startAngle, endAngle);
    ctx.fillStyle = "#10B4AD";
    ctx.fill(); 
    
    var i = 83;
    var j = 367;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(i, j, radius, startAngle, endAngle);
    ctx.fillStyle = "#10B4AD";
    ctx.fill(); 
    
    var k = 85;
    var l = 363;
    var radius = 2;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(k, l, radius, startAngle, endAngle);
    ctx.fillStyle = "#ECEC33";
    ctx.fill(); 
    
    ctx.beginPath();
    ctx.moveTo(85, 370);
    ctx.lineTo(85, 380);
    ctx.closePath();
    ctx.strokeStyle = "#23681B";
    ctx.stroke();
}

function drawFlower2() {
    var a = 101;
    var b = 362;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(a, b, radius, startAngle, endAngle);
    ctx.fillStyle = "#F18A1B";
    ctx.fill();
    
    var c = 105;
    var d = 359;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(c, d, radius, startAngle, endAngle);
    ctx.fillStyle = "#F18A1B";
    ctx.fill(); 
    
    var e = 109;
    var f = 362;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(e, f, radius, startAngle, endAngle);
    ctx.fillStyle = "#F18A1B";
    ctx.fill(); 
    
    var g = 107;
    var h = 367;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(g, h, radius, startAngle, endAngle);
    ctx.fillStyle = "#F18A1B";
    ctx.fill(); 
    
    var i = 103;
    var j = 367;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(i, j, radius, startAngle, endAngle);
    ctx.fillStyle = "#F18A1B";
    ctx.fill(); 
    
    var k = 105;
    var l = 363;
    var radius = 2;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(k, l, radius, startAngle, endAngle);
    ctx.fillStyle = "#ECEC33";
    ctx.fill(); 
    
    ctx.beginPath();
    ctx.moveTo(105, 370);
    ctx.lineTo(105, 380);
    ctx.closePath();
    ctx.strokeStyle = "#23681B";
    ctx.stroke();
} 

function drawFlower3() {
    var a = 121;
    var b = 362;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(a, b, radius, startAngle, endAngle);
    ctx.fillStyle = "#CE9CE8";
    ctx.fill();
    
    var c = 125;
    var d = 359;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(c, d, radius, startAngle, endAngle);
    ctx.fillStyle = "#CE9CE8";
    ctx.fill(); 
    
    var e = 129;
    var f = 362;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(e, f, radius, startAngle, endAngle);
    ctx.fillStyle = "#CE9CE8";
    ctx.fill(); 
    
    var g = 127;
    var h = 367;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(g, h, radius, startAngle, endAngle);
    ctx.fillStyle = "#CE9CE8";
    ctx.fill(); 
    
    var i = 123;
    var j = 367;
    var radius = 3;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(i, j, radius, startAngle, endAngle);
    ctx.fillStyle = "#CE9CE8";
    ctx.fill(); 
    
    var k = 125;
    var l = 363;
    var radius = 2;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(k, l, radius, startAngle, endAngle);
    ctx.fillStyle = "#ECEC33";
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(125, 370);
    ctx.lineTo(125, 380);
    ctx.closePath();
    ctx.strokeStyle = "#23681B";
    ctx.stroke();
}
}
