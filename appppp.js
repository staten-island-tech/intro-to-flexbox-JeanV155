const bowl1 = 10;
const bowl2 = 8;
const bowl3 = 5;

let mamaBowl;

if ((bowl1 > bowl2 && bowl1 < bowl3) || (bowl1 < bowl2 && bowl1 > bowl3)) {
  mamaBowl = bowl1;
} else if ((bowl2 > bowl1 && bowl2 < bowl3) || (bowl2 < bowl1 && bowl2 > bowl3)) {
  mamaBowl = bowl2;
} else {
  mamaBowl = bowl3;
}

console.log("Mama Bear's bowl weighs:", mamaBowl);
