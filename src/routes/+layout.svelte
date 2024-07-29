<script>
    import { searchMovie } from '$lib/services';
    let movieQuery = "";

    function searchForMovie(movie) {
        if (movie !== "") {
            searchMovie(movie)
        }
    }
</script>

<style>    
    .header {
        width: calc(100% - 20px);
        display: inline-flex;
        justify-content: space-between;
        padding: 0 10px;
        background-color: lightblue;
        margin-bottom: 10px;
        color: #fff;
    }

    .searchBox {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
    }
</style>

<div class="header">
    <h1>The movieApp</h1>

    <div class="searchBox">
        <input type="text" on:change={(e) => movieQuery = e.target.value} placeholder="Search for a movie" />
        <button on:click={searchForMovie(movieQuery)}>search</button>
    </div>
</div>

<slot/>