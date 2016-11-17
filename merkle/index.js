
var merkle = function(list, hasher) {
  if(list === null || list === [] || ! list instanceof Array) {
    return [];
  }
  var len = list.length;
  while (len % 2 ===1) {
    list.push(list[len-1]);
    len++;
  }

};

var getVerification = function(ele) {


};
module.exports = merkle;
