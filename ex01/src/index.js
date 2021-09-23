var myPet = {
    species: "hallo",
    name: "Crni",
    legs: 4,
    friends: ["Ime1", "Ime2"]
}   
function myFuncton(myObj) {

 return myObj; 
}   
   console.log(myFuncton(myPet));
   module.exports = { myPet, myFuncton };