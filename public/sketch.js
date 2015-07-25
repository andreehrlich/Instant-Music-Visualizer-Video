var capture;
var song;

function preload() {
  song = loadSound('songs/missingyou.mp3');
}

function setup() {
  createCanvas(1600, 900);
  capture = createCapture(VIDEO);
  capture.size(1600, 900);
  capture.hide();
  song.play();
}

function draw() {
  background(255);
  image(capture, 0, 0, 1600, 900);
  filter('INVERT');
}


function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
  } else {
    song.play();
  }
}