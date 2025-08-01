async function searchMovies() {
    const query = document.getElementById('search-bar').value;
    const results = await fetchMovies(query);
    displayResults(results);
}

async function fetchMovies(query) {
    const response = await fetch(`https://vidsrc.to/api/movies?query=${query}`);
    const data = await response.json();
    return data;
}

function displayResults(results) {
    const resultsContainer = document.getElementById('movie-results');
    resultsContainer.innerHTML = '';

    results.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <button onclick="watchMovie('${movie.link}')">Watch Now</button>
        `;
        resultsContainer.appendChild(movieItem);
    });
}

function watchMovie(link) {
    window.open(link, '_blank');
}
