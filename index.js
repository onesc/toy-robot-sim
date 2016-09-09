var fs = require('fs');
var robot = require('./robot.js');
var interpreter = require('./robotinterpreter');
var commands = fs.readFileSync('robotcommands.txt').toString().split("\n");
var fs = require('fs');
commands.forEach(function(c){
  interpreter(robot, c);
});
