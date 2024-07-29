<script>
    import { onMount } from 'svelte';
    import { trendingMovies } from '$lib/services';
    import Slider from '$lib/components/slider/Slider.svelte';

    let movies = null;
  
    onMount(async () => {
        await trendingMovies().then((list) => movies = list);
    });    
</script>

<Slider title={"Trending"} movies={movies} />
<Slider title={"New"} movies={movies} />
<Slider title={"TV Shows"} movies={movies} />