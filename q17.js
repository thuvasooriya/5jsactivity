var fruits = ["Apple"];
const q17A = function() {
    fruits.splice(0, 0, "Pineapple", "Lemon");
    return "Adding two elements before: " + fruits;
}
const q17B = function() {
    fruits.splice(3, 0, "Orange", "Peach");
    return "Adding two elements after: " + fruits;
}
