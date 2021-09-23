var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};   
function myFunction(newName, newValue) {
    lion[newName] = newValue; 
    return lion; 
}   

   console.log(myFunction("roar", "roar-roar"));
   module.exports = myFunction;