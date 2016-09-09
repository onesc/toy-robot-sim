var robotinterpreter = function(robot, command){
  if (command.substr(0,5) === "PLACE"){
    robot.place(parseInt(command.charAt(6)), parseInt(command.charAt(8)), command.charAt(10).toLowerCase());
  }
  if (command === "LEFT") robot.left();
  if (command === "RIGHT") robot.right();
  if (command === "MOVE") robot.move();
  if (command === "REPORT") {
    var report = robot.report();
    if (report.dir === "n") report.dir = "North";
    if (report.dir === "s") report.dir = "South";
    if (report.dir === "e") report.dir = "East";
    if (report.dir === "w") report.dir = "West";
    console.log("X: " + report.x + ", Y: " + report.y + ", Facing " + report.dir);
  }
};

module.exports = robotinterpreter;
