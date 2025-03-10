function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Triángulo superior relleno de negro
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();

        // Triángulo inferior
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();

        // Círculo azul
        ctx.beginPath();
        ctx.arc(250, 80, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "#3070d4";
        ctx.fill();
        ctx.stroke();
    }
    
}