// Food Array
var food = ['okra', 'carrots', 'kale', 'spinach', 'onion', 'apples', 'bananas', 'grapes', 'oranges']
console.log(food);
console.log(food [0]);//okra
console.log(food [1]);//carrots
console.log(food [2]);//kale
console.log(food [3]);//spinach
console.log(food [4]);//onion
console.log(food [5]);//apples
console.log(food [6]);//bananas
console.log(food [7]);//grapes
console.log(food [8]);//oranges
//remove one element end of array
food[8]="undefined";
console.log(food);
//add strawberries
food[8]="strawberries";
console.log(food);
//remove element from the front of array
food[0]="undefined";
console.log(food);
//add broccoli
food[0]="broccoli"
console.log(food);
var veggies = food.slice (0,5);
console.log(veggies);
var fruit = food.slice(5,9);
console.log(fruit);
food.splice(4,1);
console.log(food);
food.splice(2,2,"brussels sprouts");
console.log(food);
//[notation]
var text = ["Lorem,ipsum dolor sit amet consectetur adipisicing elit."];
console.log(text);
console.log(text[0]);
//chores
