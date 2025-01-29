// filter

const arr = [1, 2, 3,4 ,5, 6, 7, 8]

// const value = arr.filter((num) => num > 3)
// console.log(`Values greater than 3 are: ${value}`);

/* Same thing using for each */

// const newArr = []

// arr.forEach( (item) => {
//     if (item > 2) {
//         newArr.push(item)
//     }
// })
// console.log(newArr);

const books = [
    { title: 'Book1', genre: 'fiction', publish: '1991', edition: 2023},
    { title: 'Book2', genre: 'non-fiction', publish: '1981', edition: 2013},
    { title: 'Book3', genre: 'fiction', publish: '1971', edition: 2004},
    { title: 'Book4', genre: 'non-fiction', publish: '1991', edition: 2003},
    { title: 'Book5', genre: 'science', publish: '1988', edition: 2018},
    { title: 'Book6', genre: 'history', publish: '1997', edition: 2020},
    { title: 'Book7', genre: 'science', publish: '1955', edition: 2003},
    { title: 'Book8', genre: 'fiction', publish: '1999', edition: 2009},
    { title: 'Book9', genre: 'non-fiction', publish: '1891', edition: 2008},
    { title: 'Book10', genre: 'phylosophy', publish: '2001', edition: 2020}
];

let userBooks = books.filter( (book) => book.genre === 'history')
userBooks = books.filter( (book) => {
    return book.publish >= 1989 && book.genre === 'history'
})

console.log(userBooks);

