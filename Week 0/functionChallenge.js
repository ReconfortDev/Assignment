const calcAverage = (value1, value2, value3) => {
  return (value1 + value2 + value3) / 3;
};

const doubleAverage = (value) => {
  return value * 2;
};

// Test 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// Test 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= doubleAverage(avgKoalas)) {
    console.log("Dolphins winner");
  } else if (avgKoalas >= doubleAverage(avgDolphins)) {
    console.log("Koalas winner");
  } else {
    console.log("No winner");
  }
};

checkWinner(avgDolphins, avgKoalas);
checkWinner(avgDolphins2, avgKoalas2);
// checkWinner(300, 600);