var value = function(arg) {
  while(arg instanceof Function) {
    arg = arg.call();
  }
  return arg;
};

module.exports = value;
