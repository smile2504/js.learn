//Reduce using function
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acc, curr){
    console.log(`accumulator: ${acc} and current value: ${curr}`);
    return acc + curr
}, 2)

console.log(myTotal);


//Reduce using arrow function

const mytotal = myNums.reduce((acc, curr) => acc + curr, 3)
console.log(mytotal);

// Reduce method to calculate the prices
const shoopingCart = [
    {
        itemName: "jeans",
        price: 1999
    },
    {
        itemName: "shirt",
        price: 1699
    },
    {
        itemName: "t-shirt",
        price: 999
    },
    {
        itemName: "hoodie",
        price: 2999
    },
]

const priceToPay = shoopingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(priceToPay);
