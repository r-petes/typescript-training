let sportsOne: string[] = ["Golf", "Cricket", "Tennis"];

// for (let i=0; i < sportsOne.length; i++) {
//     console.log(sportsOne[i]);
// }
sportsOne.push("Soccer");

for (let tempSport of sportsOne) {
    console.log(tempSport);
}