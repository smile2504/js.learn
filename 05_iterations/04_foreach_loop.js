//******Foreach loop on array******//

//Note: foreach loop needs function
const coding = ["Java", "JavaScript", "Php", "Python", "Swift"]
coding.forEach( function (val){
    // console.log(val);
})

//***Foreach loop on objects inside array

const myCoding = [
    {
        lanuage: "JavaScript",
        file: "js"
    },
    {
        lanuage: "Python",
        file: "ph"
    },
    {
        lanuage: "Java",
        file: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.lanuage);
    console.log(item.file);
})


