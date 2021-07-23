var fruits1 = ["Apple","Banana"];
const q14A = function() {
    fruits1.splice(1, 0, "Lemon", "Kiwi", "Orange", "Berries", "Pineapple");
    return "i. The fruit on index 3 is: " + fruits1[3]
}
const q14B = function() {
    return "ii. The length of the Array is: " + fruits1.length;
}
const q14C = function() {
    return "iii. The reverse order is: " + fruits1.reverse();
}