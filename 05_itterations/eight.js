// reduce prototype

const number = [1, 2, 3]

// const myTotal = number.reduce( function (acc, curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0)

/* lets go with arrow functions */
// const myTotal = number.reduce( (acc, curval) => {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// },0)

const myTotal = number.reduce( (acc, curr) => acc + curr) //shortest possible way
// console.log(myTotal);

const shoppingCart = [
    {
        item: "Shirt",
        price: 299
    },
    {
        item: "tye",
        price: 499
    },
    {
        item: "belt",
        price: 120
    },
    {
        item: "underwear",
        price: 365
    },
    {
        item: "coat",
        price: 2999
    },
    {
        item: "shoe",
        price: 15999
    }
]

const totalAmount = shoppingCart.reduce( (acc, curval) => acc + curval.price, 0)
console.log(`Pay total amount in Rs.${totalAmount}`);

