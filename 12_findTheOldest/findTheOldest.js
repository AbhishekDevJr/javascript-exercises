const findTheOldest = function(peopleObjArray) {
    let ageArray = peopleObjArray.map((person) => {
        if(person.yearOfDeath === undefined){
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            return (currentYear - person.yearOfBirth);
        }else{
            return (person.yearOfDeath - person.yearOfBirth);
        }
        
    })
    console.table(ageArray);
    //let oldestAge = Math.max(ageArray);
    let oldestAge = 0;
    for(let i=0; i<ageArray.length; i++){
        if(oldestAge < ageArray[i]){
            oldestAge = ageArray[i];
        }else{
            continue;
        }
    }
    //console.log(oldestAge);
    let resultObj = ageArray.indexOf(oldestAge);
    //console.table('index--> ' + resultObj);
    let finalObj = peopleObjArray[resultObj];
    return finalObj;
};
//  let result = findTheOldest(people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1066,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]);
//   console.table('result--> ' + result);
// Do not edit below this line
module.exports = findTheOldest;
