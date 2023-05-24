// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// // ----

// const double = (arr) => arr.map((val) => val * 2)




// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

// const squareAndFindEvens = (numbers) => numbers.map((squaredNumbers) => 

// const squareAndFindEvens = (numbers) => numbers.filter((squaredNumbers) => (numbers.reduce((squaredNumbers,nextNum) => nextNum ** 2)) %2 == 0)


// const squareAndFindEvens = (numbers) => numbers.filter((squaredNums) => (numbers.map((num) => num**2)) %2 == 0)

const numberList = [1,5,7,4,10]

// const squareAndFindEvens  = (numbers) => numbers.map((num) => num**2)



// const squareAndFindEvens = (numbers) => {
//     var squares = numbers.map((num) => {
//       return num ** 2;
//     });
//     var evens = squares.filter((square) => {
//       return square % 2 === 0;
//     });
//     return evens;
//   }

  const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)


// return an array that has only even number from the array of squared numbers