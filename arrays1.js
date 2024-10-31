groceries = ["vegetables","fruits","Canned foods","Sauces","Various groceries","Spice"];

// Print the second element from the array `groceries`
console.log(groceries[1]);

// Print how many elements are in the array (i.e length of the array)
console.log(groceries.length);

// Print the last element in the array
console.log(groceries.slice(-1)) 

// Remove the last element from the array and print it
groceries.pop();
console.log(groceries);

// Add two new and different elements to the end of the array
groceries.push("Oils","Vinegars");
console.log(groceries);

// Create a new array named `firstThreeItems` and it’s elements are the first three elements from the `groceries` array.
deleteRange = groceries.length - 4;
firstThreeItems = groceries.splice(0,deleteRange);
console.log(firstThreeItems);