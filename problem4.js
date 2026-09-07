function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  //  first 2 km
  if (distance > 2) {
    const extraDistance = distance - 2;
    fare = fare + extraDistance * 15;
  }

  // Waiting charge
  fare = fare + waitingMinutes * 2;

  // Night charge
  if (isNight) {
    fare = fare * 1.2;
  }

  return fare;
}

// console.log(getCngFare(2));
// console.log(getCngFare(1));

// console.log(getCngFare(5, false, 10));
