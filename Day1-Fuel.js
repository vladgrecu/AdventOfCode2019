const data =
  "105311 117290 97762 124678 132753 114635 114137 96208 82957 148510 75509 120845 80279 112588 136983 91546 55087 98239 58629 59526 121740 133887 96246 53621 88458 144101 67449 114870 75125 126117 118155 108888 128347 121556 65380 106487 149660 89018 118897 91556 147829 123137 130352 51301 102756 83357 97466 78364 82291 83367 72243 107128 87975 93719 114888 71559 57757 145975 74254 102427 117302 118842 105979 134735 123676 83647 101511 117834 70884 88288 55444 71415 143464 142131 51118 109435 87841 107406 71379 124659 79427 110357 114485 141168 62923 113921 106154 67468 132601 76112 84953 124290 55476 88965 107153 148407 62584 112851 71564 145569";
const puzzleInput = Array.from(data.split(" "));

const firstProblem = puzzleInput.reduce((total, module) => {
  let fuelNeeded = Math.floor(module / 3) - 2;
  return fuelNeeded + total;
}, 0);

const secondProblem = puzzleInput.reduce((total, module) => {
  let fuelNeeded = Math.floor(module / 3) - 2;
  let fuelForFuel = 0;
  while (fuelNeeded > 0) {
    fuelForFuel += fuelNeeded;
    fuelNeeded = Math.floor(fuelNeeded / 3) - 2;
  }
  return fuelForFuel + total;
}, 0);

console.log("First: ", firstProblem);
console.log("Second: ", secondProblem);
