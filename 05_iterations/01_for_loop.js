//************for loop************//

for (let i = 1; i <= 10; i++) {
    // const element = [i];
    if (i == 5) {
        console.log(`5 is middle number`);
    }
    console.log(i);
    
}



let myArray = ["Flash", "Batman", "Superman", "Spiderman", "Shaktimaan"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//***********break and continue***********//

for (let i = 1; i <= 20; i++) {
    if (i==10) {
        console.log(`10 is detected`);
        break;
    }
    console.log(`value of i is ${i}`);    
}


for (let i = 1; i <= 20; i++) {
    if (i==10) {
        console.log(`10 is detected`);
        continue;
    }
    console.log(`value of i is ${i}`);    
}






