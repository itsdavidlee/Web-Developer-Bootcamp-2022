const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

//to get sum of prices... you could
//let total = 0;
//for (let price of prices) {
//     total += price
// }

//REDUCE
// const total = prices.reduce((total, price) => {
//     return total+price
// })

//to return total of array
const total = prices.reduce((total,price) => total+price)

//to return smallest integer in array
const smallest = prices.reduce((min,price) => {
    if(price < min) {
        return price;
    }
    return min;
})

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year:1996
    }
]

//to return best movie (based on highest score)
const highestRated = movies.reduce((bestMovieScore,currentMovieScore) => {
    if(bestMovieScore.score > currentMovieScore.score){
        return bestMovieScore
    }
    return currentMovieScore;
}
)

//third parameter of reduce is used for starting point
const evens = [2,4,6,8];
evens.reduce((sum,num)=> sum+num, 100) //120
