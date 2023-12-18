const numbers = [23, 56, 78, 11, 44, 89, 33, 67, 7, 92];
//comparing adjacent elements in the array to see weather they need swaped then they swap if needed
numbers.sort((a,b)=>a-b);//sorts numbers from lowest to highest(ascending)
console.log(numbers);

numbers.sort((a,b)=>b-a);//sorts numbers from highest to lowest(descending)
console.log(numbers);