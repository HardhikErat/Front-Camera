var video;

function setup() {
    createCanvas(displayWidth, displayHeight);
    background("white");
    video = createCapture(VIDEO);
    video.size(displayWidth, displayHeight);
    video.hide();
}

function draw() {
    image(video, 0, 0);
}
