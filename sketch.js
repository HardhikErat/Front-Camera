var video;

function setup() {
    createCanvas(640, 480);
    background("white");
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
}

function draw() {
    image(video, 0, 0);
}
