var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTX = parseInt(inputs[2]); // Thor's starting X position
const initialTY = parseInt(inputs[3]); // Thor's starting Y position
//because we define them as const in the beginning reassign them.
var thorX = initialTX;
var thorY = initialTY;
// game loop
while (true) {
  //handles straight line
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
  if (thorX < lightX && thorY === lightY) {
    console.log('E');
  }
  //handles up he just walks in a straight line.
  if (thorY > lightY) {
    console.log('N');
  }

  //easy angle
  if (thorX > lightX) {
    console.log('W');
    thorX--;
  }
  if (thorX == lightX && thorY < lightY) {
    console.log('S');
  }

  //optimal angle
  if (thorY < lightY && thorX < lightX) {
    console.log('SE');
    thorY++;
    printErr(thorX);
  }
}
