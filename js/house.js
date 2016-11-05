var canvas = document.getElementById("myHouse");
var ctx = canvas.getContext("2d");

drawCompleteHouse();

function drawCompleteHouse() {
    drawSky();
    drawGround();
    
    drawFront();
    
    drawRoof1();
    drawRoof2();
    
    drawSide();
    
    drawWindow1();
    drawLedge1();
    drawWindow2();
    drawLedge2();
    drawWindow3();
    drawLedge3();
    
    drawDoor();
    drawDoorKnob();
    
    drawChimney();
    drawChimneySide();
    drawChimneyTop();
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
    ctx.fillStyle = "#EDFEFF";
    ctx.fill();
}

function drawLedge1() {
    ctx.beginPath();
    ctx.rect(75, 350, 60, 5);
    ctx.fillStyle = "#472204";
    ctx.fill();
}

function drawLedge2() {
    ctx.beginPath();
    ctx.moveTo(235, 350);
    ctx.lineTo(235, 355);
    ctx.lineTo(295, 343);
    ctx.lineTo(295, 338);
    ctx.closePath()
    ctx.fillStyle = "#472204";
    ctx.fill();
}

function drawLedge3() {
    ctx.beginPath();
    ctx.moveTo(305, 335);
    ctx.lineTo(305, 340);
    ctx.lineTo(365, 328);
    ctx.lineTo(365, 323);
    ctx.closePath()
    ctx.fillStyle = "#472204";
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