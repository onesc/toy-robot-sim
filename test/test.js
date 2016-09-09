var chai = require('chai');
var expect = require('chai').expect;
var robot = require('../robot.js');

describe('Robot ', function(){
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

  it('rotate left', function(){
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

  it('rotate left', function(){
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


  it('should not fall off edges', function(){

  });
});

// describe('Images', function() {
//   it('should list ALL blobs on /blobs GET', function(done) {
//     chai.request(server)
//       .get('/')
//       .end(function(err, res){
//         res.should.have.status(200);
//         done();
//       });
//   });
//   it('should list a SINGLE blob on /blob/<id> GET');
//   it('should add a SINGLE blob on /blobs POST');
//   it('should update a SINGLE blob on /blob/<id> PUT');
//   it('should delete a SINGLE blob on /blob/<id> DELETE');
// });
