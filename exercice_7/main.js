const courses = ['Pain', 'Lait', 'Œufs', 'Tomates'];
console.log(courses[0]);
console.log(courses[3]);
const total = document.getElementById("total")
total.textContent = courses.length
const liste = document.getElementById("liste")
// for (let i = 0; i < courses.length; i++) {
//     const li = document.createElement("li") ;
//     liste.appendChild(li)
// }
courses.push("cafe")
courses.forEach((course , index) => {
     const li = document.createElement("li") ;

     li.textContent = index + " . " + course

     liste.appendChild(li)
});