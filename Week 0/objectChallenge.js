"use strict";

const john = {
  firtName: "John",
  lastName: "Smith",
  mass: 60,
  height: 1.92,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const mark = {
  firtName: "Mark",
  lastName: "Miller",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.firtName} ${
      john.lastName
    }'s BMI ${john.calcBMI()} is highest that ${mark.firtName} ${
      mark.lastName
    }'s BMI ${mark.calcBMI()}`
  );
} else {
  console.log(
    `${mark.firtName} ${
      mark.lastName
    }'s BMI ${mark.calcBMI()} is highest that ${john.firtName} ${
      john.lastName
    }'s BMI ${john.calcBMI()}`
  );
}
