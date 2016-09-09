var robot = require('./robot.js');
var interpreter = require('./robotinterpreter');

interpreter(robot, "PLACE 1,4,N");
interpreter(robot, "MOVE");
interpreter(robot, "LEFT");
interpreter(robot, "MOVE");
interpreter(robot, "REPORT");
