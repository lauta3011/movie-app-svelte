<script>
    export let movies;
    export let title;

    import Movie from "../movie/Movie.svelte";
</script>

<style>
    .catalog {
        margin: 15px 5px;
    }
    .movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>

<div class="catalog">
    <h3>{title}</h3>

    <article class="movies ">
            {#if movies}
                {#each movies as movie (movie.id)}
                    <Movie movieId={movie.id} name={movie.name} title={movie.original_title} poster={movie.backdrop_path} overview={movie.overview} />
                {/each}    
            {:else}
                <p>cargando...</p>
            {/if}
    </article>
</div>