<script setup lang="ts">
import type { Movie } from '~/type/Movies';

const route = useRoute();
const config = useRuntimeConfig();

const {data:movie} = useFetch<Movie>(`/api/movies/${route.params.id}`)
</script>
<template>
  <div class="container mx-auto">
    <MovieDetail v-if="movie" :movie="movie" />
    <h1 class="text-4xl my-4">Related Movies</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
  
    </div>
  </div>
</template>
