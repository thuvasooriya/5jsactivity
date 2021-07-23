let course = {
    courseName: "BIT",
    courseFee: "Rs 150 000",
    startDate: "12.06.2018",
    center: "Our Office",
}

const courseDetail = function() {
    return "Course Name: " + course.courseName + " Course" + 
    "<br>" + "Fee: " + course.courseFee +
    "<br>" + "Start Date: " + course.startDate +
    "<br>" + "Center: " + course.center;
}