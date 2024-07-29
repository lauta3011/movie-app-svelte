import { goto } from '$app/navigation';

export async function trendingMovies() {
    let movies = null;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjZjZDUyZTQyNjgwN2ZiNWMzNzdhN2IwMGZmZTk1MyIsIm5iZiI6MTcyMTc4MzI3OS40Mzg1Mywic3ViIjoiNWRkNmY0MjkyODcyM2MwMDEyNTFlZTFiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.TwE7TTSptGX9x_ZnOaz3UwD4WWgFyL4C82-2KiprvvY'
        }
    }

    try {
        let res = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
        res = await res.json();

        movies = res.results;
    } catch (error) {
        console.error(error);
    }
    return movies
}

export let movieList = {
    query: 'Search query',
    movies: []
};

export async function searchMovie(movie) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US&page=1`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjZjZDUyZTQyNjgwN2ZiNWMzNzdhN2IwMGZmZTk1MyIsIm5iZiI6MTcyMTc4MzI3OS40Mzg1Mywic3ViIjoiNWRkNmY0MjkyODcyM2MwMDEyNTFlZTFiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.TwE7TTSptGX9x_ZnOaz3UwD4WWgFyL4C82-2KiprvvY'
        }
    }

    try {
        let res = await fetch(url, options)
        res = await res.json();

        movieList = { 
            query: movie,
            movies: res.results
        }

        goto('/search'); 
    } catch (error) {
        console.error(error);
    }
}