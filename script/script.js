const courseList = [
    {code: "ACIT 1620" , name: "Web Fundamental Technologies"},
    {code: "ACIT 1630" , name: "Database Systems"},
    {code: "ACIT 1310" , name: "Technical Math For IT"}
]

let input = ""
do{
    input = prompt("Enter a 4-digit code: ");
} 
while (!(input.length == 4) || isNaN(input));

let a = 0;
for (let i in courseList)
{
    if ((courseList[i].code).includes(input)){
        console.log(`Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`)
        a=1;
        break;
    }

    // else {
    //     newCourse = {code: "ACIT "+input, name:null}
    //     courseList.push(newCourse)
    //     console.log(courseList)
    //     break;
    // }
    
}

if (a===0) {
    newCourse = {code: "ACIT "+input, name:null}
    courseList.push(newCourse)
    console.log("Success")
    console.log(courseList)
}
