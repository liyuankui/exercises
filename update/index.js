var update = function (state, commands) {
  if(typeof String.prototype.startsWith != 'function'){
    String.prototype.startsWith = function(str){
      if(str == null) return false;
      var i = str.length;
      if(this.length < i) return false;
      for(--i; (i >= 0) && (this[i] === str[i]); --i) continue;
      return i < 0;
    }
  }

  var isAction = function(str) {
    return str.startsWith('$');
  };

  var keysAction = function(commands) {
    return ! Object.keys.call(null, commands).every(function(cmd){
      return !isAction(cmd);
    });
  };

  var hasAction = function(commands, key) {
    return keysAction(commands[key]);
  };

  var newstate = state;
  for(var cmd in commands) {
    if(!commands.hasOwnProperty(cmd)) continue;
    if(hasAction(commands, cmd)) {
      for (var action in commands[cmd]) {
        if(!commands[cmd].hasOwnProperty(action)) continue;
        if(isAction(action)) {
          switch(action) {
            case '$set':
              newstate[cmd]=commands[cmd][action];
          }
        }
      }
    } else {
      state[cmd] || (state[cmd] = {});
      update(state[cmd], commands[cmd]);
    }
  }
  return newstate;
};

module.exports = update;
