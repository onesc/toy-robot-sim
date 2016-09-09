var chai = require('chai');
var expect = require('chai').expect;
var robot = require('../robot.js');

describe('Robot Placement', function(){
  it('do nothing if not yet placed', function(){
    robot.move();
    robot.left();
    robot.right();
    expect(robot.report()).to.be.an('undefined');
  });

    it('report its position if placed', function(){
      robot.place(3,3,"n");
      expect(robot.report()).to.be.an('object');
    });

    it('report its position correctly', function(){
      robot.place(3,3,"n");
      var report = robot.report();
      expect(report.x).to.equal(3);
      expect(report.y).to.equal(3);
      expect(report.dir).to.equal("n");
    });
  });

describe ('Robot Movement', function (){
  it('move north', function(){
    robot.place(3,3,"n");
    var report = robot.report();
    robot.move();
    var newreport = robot.report();
    expect(report.x).to.equal(newreport.x);
    expect(report.y + 1).to.equal(newreport.y);
  });

  it('move south', function(){
    robot.place(3,3,"s");
    var report = robot.report();
    robot.move();
    var newreport = robot.report();
    expect(report.x).to.equal(newreport.x);
    expect(report.y - 1).to.equal(newreport.y);
  });

  it('move east', function(){
    robot.place(3,3,"e");
    var report = robot.report();
    robot.move();
    var newreport = robot.report();
    expect(report.x + 1).to.equal(newreport.x);
    expect(report.y).to.equal(newreport.y);
  });

  it('move west', function(){
    robot.place(3,3,"w");
    var report = robot.report();
    robot.move();
    var newreport = robot.report();
    expect(report.x - 1).to.equal(newreport.x);
    expect(report.y).to.equal(newreport.y);
  });

  it('can not fall off northern edge', function(){
    robot.place(5,5,"n");
    var reporty = robot.report().y;
    robot.move();
    expect(robot.report().y).to.equal(reporty).and.to.not.equal(reporty + 1);
  });

  it('can not fall off southern edge', function(){
    robot.place(0,0,"s");
    var reporty = robot.report().y;
    robot.move();
    expect(robot.report().y).to.equal(reporty).and.to.not.equal(reporty - 1);
  });

  it('can not fall off eastern edge', function(){
    robot.place(5,5,"e");
    var reportx = robot.report().x;
    robot.move();
    expect(robot.report().x).to.equal(reportx).and.to.not.equal(reportx + 1);
  });

  it('can not fall off western edge', function(){
    robot.place(0,0,"w");
    var reportx = robot.report().x;
    robot.move();
    expect(robot.report().x).to.equal(reportx).and.to.not.equal(reportx - 1);
  });

});



describe('Robot Rotation', function(){
  it('rotates left', function(){
    robot.place(3,3,"n");
    robot.left();
    expect(robot.report().dir).to.equal("w");
    robot.left();
    expect(robot.report().dir).to.equal("s");
    robot.left();
    expect(robot.report().dir).to.equal("e");
    robot.left();
    expect(robot.report().dir).to.equal("n");
  });

  it('rotates right', function(){
    robot.place(3,3,"n");
    robot.right();
    expect(robot.report().dir).to.equal("e");
    robot.right();
    expect(robot.report().dir).to.equal("s");
    robot.right();
    expect(robot.report().dir).to.equal("w");
    robot.right();
    expect(robot.report().dir).to.equal("n");
  });
});
