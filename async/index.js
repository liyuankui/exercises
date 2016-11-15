var async = {};

async.sequence = function(funcs) {
  var len = funcs.length;
  return function(cb) {
    var seq = 0;
    var continuum = function(err, data) {
      if (seq == len) {
        return cb(err, data);
      }
      funcs[seq++].call(null, continuum, data);
    };
    funcs[seq].call(null, continuum);
  };
};

async.parallel = function(funcs) {
  var len = funcs.length;
  return function(cb) {
    var results = [];
    var count = 0;
    var gathering = function(err, data) {
      results[this.index] = data;
      count++;
      if(count == len) {
        cb(err, results);
      }
    };

    funcs.forEach(function (func, i){
      func.call(this, gathering.bind({index:i}));
    });
  };
};

async.race = function(funcs) {
  return function(cb) {
    var called=false;
    var gathering = function(err, data) {
      if (!called) {
        called = true;
        cb(err, data);
      }
    };

    funcs.forEach(function (func, i){
      func.call(this, gathering.bind({index:i}));
    });
  };

};

module.exports = async;
