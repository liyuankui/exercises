
var map = function(args, func, ctx) {
  if (!args) return;
  if (args.length === 0) return;
  if (typeof func !== "function") return;

  var length=args.length;
  var ret = [];
  for (var i = 0; i<length; i++) {
    ret.push(func.call(ctx, args[i], i, args));
  }
  return ret;
};

module.exports = map;
