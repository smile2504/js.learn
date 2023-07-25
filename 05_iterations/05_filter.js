//*******Filters */
const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
const newNums = myNums.filter( (nums) => nums > 4 )
console.log(newNums); 

const myNum = [1, 2, 3, 4, 5, 6, 7, 8]
const newNum = myNums.filter( (num) => {return num >4} )
console.log(newNum); 

//Do the same job using foreach

//const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
// const newNums = []
// myNums.forEach( (num) =>{
//     if (num > 4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

const books = [
    {title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book two', genre: 'Non-Fiction', publish: 1983, edition: 2007},
    {title: 'Book three', genre: 'History', publish: 1986, edition: 2008},
    {title: 'Book four', genre: 'Non-Fiction', publish: 1990, edition: 2014},
    {title: 'Book five', genre: 'Science', publish: 1982, edition: 2010},
    {title: 'Book six', genre: 'History', publish: 1995, edition: 2005},
    {title: 'Book seven', genre: 'Fiction', publish: 2000, edition: 2003},
    {title: 'Book eight', genre: 'History', publish: 1999, edition: 2009},
    {title: 'Book nine', genre: 'Science', publish: 1989, edition: 2011},
    {title: 'Book ten', genre: 'Fiction', publish: 1997, edition: 2012}
];

// const userBooks = books.filter( (bk) => bk.genre === 'History' )
const userBooks = books.filter( (bk) => bk.publish >= 1990 && bk.genre === 'History')

console.log(userBooks);

//*************************************************************************//


