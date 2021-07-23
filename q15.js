// var num = [4, 1, 8, 3, 9, 12];
const sortedArray = function() {
    var num = [4, 1, 8, 3, 9, 12];
    return "Sorted Array: " + num.sort(function(a, b){return a - b});
}