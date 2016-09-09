var fs = require('fs');
var commands = fs.readFileSync('robotcommands.txt').toString().split("\n");
var robot = require('./scripts/robot.js');
var interpreter = require('./scripts/robotinterpreter');

commands.forEach(function(c){
  interpreter(robot, c);
});
