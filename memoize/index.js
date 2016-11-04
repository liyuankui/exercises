
var memoize = function(func){
  var mem = {};
  var memoized = function() {
    var args = Array.prototype.slice.call(arguments);
    var key = args.toString();
    if (!mem[key]) {
      mem[key] = func.apply(null, arguments);
    }
    return mem[key];
  };
  return memoized;
};

module.exports = memoize;


