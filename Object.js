let userDetails = {
    firstName: "Nilesh",
    lastName: "yadav",
    courseList: [],
    /* TODO: functions in object */
    addCourse: function (courseName){  // we can't use arrow function inside object
        this.courseList.push(courseName)
    },
    userCourseCount: function (){
        return this.courseList.length
    },



}

userDetails.addCourse('reactJs')
userDetails.addCourse('MERN')
console.log("Course count is : ", userDetails.userCourseCount)
console.log(userDetails["courseList"])
console.table(userDetails.userCourseCount())
console.log(Object.keys(userDetails))
console.log(Object.values(userDetails))

// checking whether a key is present or not
console.log(userDetails.hasOwnProperty("lastName"))

