// 来源阿里的一道面试题

function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
  this.declare = this.declare.bind(this);
};

LateBloomer.prototype.bloom = function () {
  window.setTimeout(this.declare, 1000);
};

LateBloomer.prototype.declare = function () {
  console.log(this.petalCount);
};


var flower = new LateBloomer();

flower.bloom();

