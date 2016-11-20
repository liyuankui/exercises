var throttle = function(func, interval) {
  var then = Number.MIN_SAFE_INTEGER;
  var runFuture = null;
  var run = function() {
    var args = arguments; // args

    var now = Date.now();
    var elapsed = now - then;
    if(elapsed > interval) { // tricky part, not >=
      then = now;
      func.apply(this, args);
    } else {
      var wait = interval - elapsed;
      runFuture && clearTimeout(runFuture);
      runFuture = setTimeout(function(){ // ctx
        run.apply(this, args);
      }, wait);
    };
  };
  return run;
};

module.exports = throttle;
