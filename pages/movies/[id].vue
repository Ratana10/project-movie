
import MovieItem from '~/components/MovieItem.vue';
<template>
  <div class="container mx-auto">
    <MovieDetail />
    <h1 class="text-4xl my-4">Related Movies</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
      <Cast />
      <Cast />
      <Cast />
      <Cast />
      <Cast />
      <Cast />
      <Cast />
      <Cast />
      <Cast />
      <Cast />
    </div>
  </div>
</template>
