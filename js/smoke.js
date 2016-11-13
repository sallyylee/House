window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	

	var W = window.innerWidth, H = window.innerHeight;
	canvas.width = 500;
	canvas.height = 500;
	
	var particles = [];
	var mouse = {};
	
	var particle_count = 100;
	for(var i = 0; i < particle_count; i++)
	{
		particles.push(new particle());
	}
	function particle()
	{
		//speed, angle and spread
		this.speed = {x: -2 + Math.random() * 5, y: -14 + Math.random() * 15};
		
        //location
		this.location = {x: canvas.width/2, y: canvas.height/2};
        
		//range of radius
		this.radius = 10 + Math.random() * 20;
        
		//range of the life
		this.life = 20+Math.random()*10;
		this.remaining_life = this.life;
        
		//color of smoke
		this.r = 60;
		this.g = 60;
		this.b = 60;
	}
	
	function draw()
	{
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, W, H);
		
		for(var i = 0; i < particles.length; i++)
		{
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
			p.location.y += p.speed.y;
			
			//make particle when another one dies
			if(p.remaining_life < 0 || p.radius < 0)
			{
				particles[i] = new particle();
			}
		}
	}
	
	setInterval(draw, 33);
}