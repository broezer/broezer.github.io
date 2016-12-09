var colors = {
  'grey': '#000000',
  'blue': '#3da0a8',
  'background': '#FFF'
};

var background = new Canvas(colors.background);

function Canvas(background) {
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  this.width = window.innerWidth;
  this.height = window.innerHeight;
  this.canvas.width  = this.width;
  this.canvas.height = this.height;

  if (background) {
    this.canvas.style.backgroundColor = background;
  }


}

Canvas.prototype.squareNoise = function() {
  var squareCount = Math.floor(Math.random() * 40) + 1
  this.ctx.save();
  this.ctx.fillStyle = colors.grey;
  for (let i = 0; i < squareCount; i++) {
    var squareSizeY = Math.floor(Math.random() * 20) + 0.5;
    var squareSizeX = Math.floor(Math.random() * 50) + 0.5;
    var x = Math.random() * this.canvas.width;
    var y = Math.random() * this.canvas.height;
    this.ctx.globalAlpha = Math.random()
    this.ctx.fillRect(x, y, squareSizeX, squareSizeY)
  }
}

setInterval(function() {
  background.ctx.clearRect(0, 0, background.canvas.width, background.canvas.height)
  background.squareNoise();

},100)
