var debounce = function(func, interval){
  var timeout ;
  return function() {
    var args = arguments;
    var ctx = this;
    var later = function(){
      timeout = null;
      func.apply(ctx, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, interval);
  };
};

module.exports = debounce;
