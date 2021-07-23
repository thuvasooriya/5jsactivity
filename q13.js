//function returning max and min in array
const points = [43, 100, 1, 52, 25, 13];

const maxValArray = function() {
    points.sort(function(a, b){return a - b});
    return "The Max Value is: " + points[points.length-1];
}

const minValArray = function() {
    points.sort(function(a, b){return a - b});
    return "The Minimum Value is: " + points[0];
}

// points[0] contains the lowest value
// points[points.length-1] contains the highest value 