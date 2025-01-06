const a=[1,2,3,4];
console.log(a);
a.push(5)
console.log(a);
for (let i=1;i<=a.length;i++){
    console.log(a[i-1]);
}
const students=[
    {
        name:"shreya",
        roll:83,
        enroll:"shreya2345",
        contact:9876543256
    },
    {
        name:"kritika",
        roll:56,
        enroll:"kritika6754",
        contact:5678439245
    }
]
const rollEightythree = students.find((value,index)=>value.roll===83)
console.log (rollEightythree?.contact)
const studentnames=students.map((value,index)=>value.name)
console.log(studentnames)
