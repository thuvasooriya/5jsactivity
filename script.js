function viewAll() {
    document.getElementById("q1").innerHTML = squared(4);
    document.getElementById("q2a").innerHTML = addVal;
    document.getElementById("q2b").innerHTML = multiVal;
    document.getElementById("q2c").innerHTML = subVal;
    document.getElementById("q2d").innerHTML = divideVal;
    document.getElementById("q4").innerHTML = volVal;
    document.getElementById("q5").innerHTML = dispInfo;
    document.getElementById("q6").innerHTML = courseDetail();
    document.getElementById("q13").innerHTML = "Array: " + points;
    document.getElementById("q13a").innerHTML = maxValArray();
    document.getElementById("q13b").innerHTML = minValArray();
    document.getElementById("q14a").innerHTML = q14A();
    document.getElementById("q14b").innerHTML = q14B();
    document.getElementById("q14c").innerHTML = q14C();
    document.getElementById("q15").innerHTML = sortedArray();
    document.getElementById("q16").innerHTML = "Original Array: " + foods;
    document.getElementById("q16a").innerHTML = q16A();
    document.getElementById("q16b").innerHTML = q16B();
    document.getElementById("q16c").innerHTML = q16C();
    document.getElementById("q17").innerHTML = "The Original Array: " + fruits;
    document.getElementById("q17a").innerHTML = q17A();
    document.getElementById("q17b").innerHTML = q17B();
}