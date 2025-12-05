let circulos = [];
let cuadrados = [];

function setup() {
    let canvas = createCanvas(windowWidth, 400);
    canvas.parent('canvas-container');
    
    for (let i = 0; i < 8; i++) {
        circulos.push({
            x: random(width),
            y: random(height),
            tam: random(30, 80),
            velX: random(-1, 1),
            velY: random(-1, 1),
            color: color(random(100, 255), random(100, 255), random(200, 255), 150)
        });
    }
    
    for (let i = 0; i < 6; i++) {
        cuadrados.push({
            x: random(width),
            y: random(height),
            tam: random(40, 70),
            velX: random(-0.8, 0.8),
            velY: random(-0.8, 0.8),
            rotacion: random(TWO_PI),
            velRot: random(-0.02, 0.02),
            color: color(random(150, 255), random(100, 200), random(180, 255), 120)
        });
    }
}

function draw() {
    background(245, 245, 250);

    for (let i = 0; i < circulos.length; i++) {
        let c = circulos[i];
        
        fill(c.color);
        noStroke();
        circle(c.x, c.y, c.tam);
        
        c.x += c.velX;
        c.y += c.velY;
        
        if (c.x > width || c.x < 0) c.velX *= -1;
        if (c.y > height || c.y < 0) c.velY *= -1;
    }
    
    for (let i = 0; i < cuadrados.length; i++) {
        let s = cuadrados[i];
        
        push();
        translate(s.x, s.y);
        rotate(s.rotacion);
        fill(s.color);
        noStroke();
        rectMode(CENTER);
        rect(0, 0, s.tam, s.tam);
        pop();
        
        s.x += s.velX;
        s.y += s.velY;
        s.rotacion += s.velRot;
        
        if (s.x > width || s.x < 0) s.velX *= -1;
        if (s.y > height || s.y < 0) s.velY *= -1;
    }
    
    let tamañoTitulo = width < 600 ? 32 : 48;
    let tamañoSubtitulo = width < 600 ? 16 : 20;
    
    fill(102, 126, 234);
    textAlign(CENTER, CENTER);
    textSize(tamañoTitulo);
    textStyle(BOLD);
    text('Movimiento Constante', width/2, height/2);
    
    textSize(tamañoSubtitulo);
    textStyle(NORMAL);
    fill(118, 75, 162);
    text('La inovacion en movimiento', width/2, height/2 + 50);
}

function windowResized() {
    resizeCanvas(windowWidth, 400);
}
