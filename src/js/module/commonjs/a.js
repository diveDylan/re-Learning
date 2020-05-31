count = 1;
module.exports.count = count;
module.exports.Hello = function() {
  var name;
  this.setName = function(newName) {
    name = newName;
  }
  this.sayHello = function() {
    console.log("hello Mr." + name);
  }
  this.getId = function() {
    return count++
  }
}

