var capture;
var song;
var height = 1600;
var width = 800;
var myDiv;

function preload() {
  song = loadSound('songs/missingyou.mp3');
}

function setup() {
  createCanvas(800, 500);
  capture = createCapture(VIDEO);
  capture.size((800, 500);
  capture.hide();
  song.play();
  amplitude = new p5.Amplitude();
  myDiv = createDiv();
  myDiv.size([800], [500]);

  myDiv.style("top", "0");
  myDiv.style("position", "fixed");
  myDiv.style("z-index", "1000");
  myDiv.style("opacity", "0.5");
  console.log("Added properties");

}

function draw() {
  var level = amplitude.getLevel();
  //console.log(level)
  background(255);
  var red = ceil(.5*(100 + 1000*level));
  var blue = ceil(.5*(10 * (1/level)));
  var green = ceil(.5*(100 / level));
  var rgbString = "rgb("+red+", " + green + ", " + blue+")";
  console.log(rgbString);
  myDiv.style("background-color", rgbString);
  image(capture, 0, 0, 800, 500);
  //filter('INVERT');
}


function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
  } else {
    song.play();
  }
}