# Toy Robot Simulator

A simulation of a robot on a 5 by 5 grid, it can interpret user commands to move around the table, change its direction and report back its location.

## Running the Simulation

Clone the repository and change in to its directory
```
git clone https://github.com/onesc/toy-robot-sim
cd toy-robot-sim
```

Write your commands in to robotcommands.txt
```
PLACE 0,0,N
MOVE
RIGHT
MOVE
LEFT
MOVE
REPORT
```

Run the node server, it will parse through the commands and log to the console
```
node index.js
```


## Commands

### PLACE X,Y,F
Initialises the robot, it must be performed before any other commands can be interpreted.

* X and Y values must be between 0 and 5
* F value must equal N, S, E or W. They represent North, South, East and West respectively

### MOVE
Increments the robots X or Y value in the direction it is facing

The Robot can not move beyond an X or Y coordinate that is below 0 or above 5, as this would push it off the table.

### LEFT
Rotates the robot to the left, e.g: If it were facing East, it would then be facing South

### RIGHT
Rotates the robot to the right, e.g: If it were facing East, it would then be facing North


## Testing
The tests for this application were written using the mocha testing framework and chai for assertions
To install mocha run
```
npm install –g mocha
```
Run either
```
mocha
```
or
```
npm test
```
To test the application


             
       (\____/)   Hello World
        (_oo_)  /
          (O)  /
        __||__    \)
     []/______\[] /
     / \______/ \/
    /    /__\
  

Nik Malev
