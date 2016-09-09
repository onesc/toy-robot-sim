var robot = (function() {
  var pos = {x: null, y: null};
  var directions = ["n", "e", "s", "w"];
  var activeDirection = null;
  var placed = false;

  var rotate = function(angle){
      var newIndex = directions.indexOf(activeDirection) + angle;
      if (newIndex === 4) newIndex = 0;
      if (newIndex === -1) newIndex = 3;
      activeDirection = directions[newIndex];
  };

  return {
    place: function(x, y, dir){
      if((x < 5 && x > 0) && (y <= 5 && y >= 0) && (dir === "n" || "s" || "e" || "w")){
        pos.x = x;
        pos.y = y;
        activeDirection = directions[directions.indexOf(dir)];
        placed = true;
      }
    },

    move: function(){
      if (placed) {
        if (activeDirection === "n" && pos.y < 5) pos.y += 1;
        if (activeDirection === "s" && pos.y > 0) pos.y -= 1;
        if (activeDirection === "e" && pos.x < 5) pos.x += 1;
        if (activeDirection === "w" && pos.x > 0) pos.x -= 1;
      }
    },
    left: function(){
      if (placed) rotate(-1);
    },
    right: function(){
      if (placed) rotate(1);
    },
    report: function(){
    if (placed) {
        return {x: pos.x, y: pos.y, dir: activeDirection};
      }
    }
  };
})();

module.exports = robot;
