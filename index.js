// Code your solution in this file!
function distanceFromHqInBlocks(dest) {
  if (42 > dest) {
    return 42 - dest;
  } else {
    return dest - 42;
  }
}

const distanceFromHqInFeet = (dest) => {
  return distanceFromHqInBlocks(dest) * 264;
};

function distanceTravelledInFeet(start, dest) {
  if (start > dest) {
    return (start - dest) * 264;
  } else if (start < dest) {
    return (dest - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, destination) < 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
  } else if (
    distanceTravelledInFeet(start, destination) > 2000 &&
    distanceTravelledInFeet(start, destination) < 2500
  ) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
