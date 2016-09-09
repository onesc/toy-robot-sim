var robotinterpreter = function(robot, command){
  if (command.substr(0,5) === "PLACE"){
    robot.place(parseInt(command.charAt(6)), parseInt(command.charAt(8)), command.charAt(10).toLowerCase());
  }
  if (command === "LEFT") robot.left();
  if (command === "RIGHT") robot.right();
  if (command === "MOVE") robot.move();
  if (command === "REPORT") robot.report();
};

module.exports = robotinterpreter;
