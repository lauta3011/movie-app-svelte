<script>
    import { movieList } from "$lib/services";
    import Catalog from "$lib/components/catalog/Catalog.svelte";


</script>

<Catalog title={movieList.query} movies={movieList.movies} />