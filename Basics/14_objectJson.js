const course = {
  courseName : "JAVASCRIPT",
  courseInstructor : "Reeturaj",
  CoursePrice : 999,
} 

//firste methood of accessing the value 
console.log(course.CoursePrice)
//Second methood of accessing the value
const {courseInstructor} = course;
console.log(courseInstructor)

//destructure od seond methood
const {courseInstructor : namej} = course;
console.log(namej)
