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

