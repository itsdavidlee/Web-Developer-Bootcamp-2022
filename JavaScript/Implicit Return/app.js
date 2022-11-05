

const rollDie = () => {
    return Math.floor(Math.random() * 6) +1;
}

//Implicit Return - removes return by using parenthesis instead of curly brackets
const rollDie2 = () => (
    Math.floor(Math.random() * 6) +1
)

//for shorter functions, it will be easier to just do one-liners (no need for parenthesis and return keyword)
const add = (x,y) => x+y


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

const newMovies = movies.map(function(movie) {
    return `${movie.title} - ${movie.score/10};
}
)