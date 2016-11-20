
var flatten = function (arr) {
  return arr.reduce(function(arrt, ele){
    if(ele instanceof Array) {
      arrt = arrt.concat(flatten(ele))
    }else {
      arrt.push(ele);
    }
    return arrt;
  }, []);
};

module.exports = flatten;
