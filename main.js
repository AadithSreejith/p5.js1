function preload() {
}
function setup() {
canvas=createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();

tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
fill('red');
stroke('red');
circle(50, 50, 60);
circle(590, 50, 60);
circle(50, 440, 60);
circle(590, 440, 60);
fill('blue');
stroke('blue');
rect(40, 40, 20, 400)
rect(580, 40, 20, 400)
rect(40, 40, 20, 400)
rect(40, 440, 560, 20)
rect(40, 40, 560, 20)
}
function take_snapshot() {
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value
}