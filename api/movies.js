// api/movies.js

const movies = [
    {
        title: 'Movie 1',
        description: 'A thrilling action movie with amazing visual effects.',
        link: 'https://example.com/watch/movie1'
    },
    {
        title: 'Movie 2',
        description: 'A heartwarming drama about family and love.',
        link: 'https://example.com/watch/movie2'
    },
    // Add more movies as needed
];

const query = new URLSearchParams(window.location.search).get('query');

const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
);

console.log(JSON.stringify(filteredMovies));
