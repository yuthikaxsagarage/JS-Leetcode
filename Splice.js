const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

months.splice(1, 2, "aaa"); // splice(start-index, howmany, replace element)
console.log(months);
//expected out ut [ 'Jan', 'aaa', 'March', 'April', 'May' ]
// splice only replaces one element even if it can remove many

//The splice() method changes the contents of an array by removing or replacing 
//existing elements and / or adding new elements in place


// splice(start-index, howmany, replace element)