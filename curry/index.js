
var curry = function(func, arglist) {
  if (!arglist) {
    var arglist = [];
  }

  var curried = function() {
    var newargs = Array.prototype.slice.call(arguments);
    // this is spartaaaa!!!
    this.arglist = arglist.concat(newargs);
    if (this.arglist.length >= func.length) {
      var ret = func.apply(undefined, this.arglist);
      return ret;
    } else {
      return curry(func, this.arglist.slice());
    }
  };
  return curried;
};

module.exports = curry;
