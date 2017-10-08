  // Code your solution in this file!
function calculateVertical(start, end){
  return Math.abs(end - start) * 264;
};

function distanceFromHqInBlocks(start){
  return Math.abs(calculateVertical(start, 42)) / 264;
};

function  distanceFromHqInFeet(start){
  return Math.abs(calculateVertical(start, 42));
};


function distanceTravelledInFeet(start, end){
  return calculateVertical(start, end);
};

function calculatesFarePrice(start, destination){
  const distance = calculateVertical(start, destination)
  return distance > 2500 ? "cannot travel that far" : distance > 2000 ? 25 : distance <= 400 ? 0 : (distance / 50.0)

};
