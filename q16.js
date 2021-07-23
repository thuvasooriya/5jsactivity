var foods = ["rice", "pizza", "sandwich", "rolls"];
const q16A = function() {
    foods.pop();
    return "Removing last element: " + foods;
}
const q16B = function() {
    foods.splice(3, 0, "cake");
    return "Adding new element: " + foods;
}
const q16C = function() {
    foods.splice(0, 1,);
    return "Removing first element: " + foods;
}