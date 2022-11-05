const exams = [80,98,92,78,77,90,89,84,81,77]

exams.every(score => score >= 75); //true
//returns true if all score is >= 75

exams.some(score => score >= 75); //true)
//returns true if some scores are >= 75

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

movies.some(movie => movie.year > 2015)