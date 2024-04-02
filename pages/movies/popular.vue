<script setup lang="ts">
import type { APIResponse } from "~/type/APIResponse";

const { data } = await useFetch<APIResponse>(`/api/movies/popular`);
</script>
<template>
  <div class="container mx-auto">
    <h3 class="text-xl font-semibold mb-4 text-yellow-500">Popular Movies</h3>
    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
    >
      <div v-for="movie in data?.results">
        <MovieItem :movie="movie" />
      </div>
    </div>
  </div>
</template>
