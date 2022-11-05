

//using arrow functions

// const newMovies = movies.map( movie => (
//     `${movie.title} - ${movie.score/10}`
// ))

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
numbers.filter(n => {
    return n < 10
})

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const goodMovies = movies.filter(movie => {
    return movie.score > 80
})

//implicit return
// const goodMovies = movies.filter( m => m.score > 80)

//If I wanted to grab a new array of just the titles of goodMovies...
const goodTitles = movies.filter(movie => movie.score >80).map(movie => movie.title)