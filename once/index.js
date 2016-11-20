var once = function(func) {
  this.called = false;
  this.result;
  return function() {
    if(!called) {
      called = true;
      result = func.apply(this, arguments);
    }
    return result;
  }
};

module.exports = once;
