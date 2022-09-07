let canvas = document.getElementById("hi");
let ctx = canvas.getContext("2d");
let fps = 60;
let start = Date.now();
let t = 0;
let lag = 0;
let mouse;
let cullx = canvas.width;
let cully = canvas.height;
ctx.lineWidth = 10;

window.addEventListener("resize", resizeCanvas, false);
resizeCanvas();

function resizeCanvas() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}

function ImagesTouching(thing1, thing2) {
    if (
        thing1.x >= thing2.x + thing2.MyImg.width ||
        thing1.x + thing1.MyImg.width <= thing2.x
    )
        return false;
    if (
        thing1.y >= thing2.y + thing2.MyImg.height ||
        thing1.y + thing1.MyImg.height <= thing2.y
    )
        return false;

    return true;
}

function drawImage(image, x, y, scale, rotation) {
    ctx.save();
    ctx.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
    ctx.rotate(rotation);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);
    ctx.restore();
}

function Sprite(srcimg) {
    this.x = 0;
    this.y = 0;
    this.img = new Image();
    this.img.src = srcimg;
    this.width = 10;
    this.height = 10;
    this.size = 10;
    this.timeExisted = 0;
    this.rotation = 1;

    this.extradata = {};

    this.draw = () => {
        drawImage(this.img, this.x, this.y, this.size, this.rotation);
    };

    this.moveSteps = (steps) => {
        this.x += steps * Math.cos(this.rotation);
        this.y += steps * Math.sin(this.rotation);
    };

    setInterval(() => {
        this.timeExisted++;
    }, 1000);
}

canvas.addEventListener("mousemove", function (e) {
    mouse = {
        x: e.pageX - canvas.offsetLeft,
        y: e.pageY - canvas.offsetTop,
    };
});

function gameloop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var current = Date.now(),
        elapsed = current - start;
    start = current;
    lag += elapsed;
    var delta = 0.0 + elapsed;

    // CODE GOES HERE!!
    // CODE GOES HERE!!
    // CODE GOES HERE!!
    // CODE GOES HERE!!
    // CODE GOES HERE!!
    // CODE GOES HERE!!

    t += 0.001 * delta * 50;
    console.log(0.001 * delta);
}

setInterval(gameloop, 1000 / fps);
