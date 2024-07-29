<script>
    export let movies;
    export let title;
    import Movie from "../movie/Movie.svelte";
</script>

<style>
    .slider {
        margin: 15px 5px;
    }
    .movies {
        display: inline-flex;
    }

    .wrapper {
        overflow: auto;
    }
    .wrapper::-webkit-scrollbar {
        width: 8px;
    }

    .wrapper::-webkit-scrollbar-track {
        background-color: #f0f0f0;
    }

    .wrapper::-webkit-scrollbar-thumb {
        background-color: #888888;
        border-radius: 4px;
    }

</style>

<div class="slider">
    <h3>{title}</h3>

    <article class="wrapper ">
        <div class="movies">
            {#if movies}
                {#each movies as movie (movie.id)}
                    <Movie movieId={movie.id} name={movie.name} title={movie.original_title} poster={movie.backdrop_path} overview={movie.overview} />
                {/each}    
            {:else}
                <p>cargando...</p>
            {/if}
        </div>
    </article>
</div>