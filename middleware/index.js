var Middleware = function () {
  this.funclist = [];
  this.called = 0;
  this.goFunc=null;
};

Middleware.prototype.goWrapper = function() {
  this.called++;
  if(this.called == this.funclist.length) {
    this.goFunc.call(this);
  }
};

Middleware.prototype.use = function (func) {
  this.funclist.push(func);
};


Middleware.prototype.go = function (func) {
  this.goFunc = func;
  this.funclist.forEach(function(f){
    f.call(this, this.goWrapper.bind(this));
  }.bind(this));
};

module.exports = Middleware;
