const num = [ 1, 2, 3, 4,5 , 6, 7, 8, 9]

let number = num
            .map( (nums) => {
                return nums * 11
            })
            .map( (nums) => {
                return nums + 11
            })
    console.log(number);
    