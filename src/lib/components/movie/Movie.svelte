<script>
    export let movieId;
    export let title;
    export let name;
    export let overview;
    export let poster;

    const movie = {
        id: movieId,
        title: title || name,
        overview: overview.length < 200 ? overview : overview.substring(0, 200) + '...' ,
        imageURL: `https://image.tmdb.org/t/p/w500${poster}`
    }
</script>

<style>
    .movie {
        width: 30rem;
        height: 300px;
        margin: 5px;
        border-radius: 8px;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .texts {
        color: #fff; 
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h3, p {
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>

<div class="movie" style="background-image: url({movie.imageURL});">
    <div class="texts">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
    </div>
</div>
