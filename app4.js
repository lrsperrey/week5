// 1 - 10 for loop 
for (var input =1; input <=10; input++){
    console.log(input)
};

//While loop
var a = true;
while (true) {
    console.log(true);
};if (true){
    break;
}

//For loop 99 and below
for (var x = 100-1; x >=1; x--) {
    console.log(x + "bottles of beer on the wall.  Take one down pass it around");}

// True
const bools = ['true', 'true', 'false', 'true', 'false', 'true', 'true', 'true']; 
const filteredBools =[];
const id = 'False';

for(let i = 0; i < bools.length; i++){
  if(bools[i] !==id){filteredBools.push(bools[i]);
                    }
}

//apples
var str = 'apples';
 
while(str.includes('p')) {
str = str.replace('p', '');
}

while(str.includes('l')) {
str = str.replace('l', '');
}

while(str.includes('s')) {
str = str.replace('s', '');
}console.log(str);
