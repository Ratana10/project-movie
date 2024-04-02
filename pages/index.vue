<script setup lang="ts">
import type { APIResponse } from "~/type/APIResponse";

const { data } = await useFetch<APIResponse>(`/api/movies/playing`);

</script>
<template>
  <div class="container mx-auto">
    <h3 class="text-xl font-semibold mb-4 text-yellow-500">Playing Movies</h3>
    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
    >
      <div v-for="movie in data?.results">
        <MovieItem :movie="movie" />
      </div>
    </div>
    <div class="my-14 flex fle-row items-center justify-center gap-4">
      <button
        class="px-4 py-2 bg-gray-600 rounded text-white hover:bg-yellow-600"
      >
        Previous
      </button>
      <button class="px-4 py-2 rounded text-white bg-yellow-600">1</button>
      <button
        class="px-4 py-2 bg-gray-600 rounded text-white hover:bg-yellow-600"
      >
        Next
      </button>
    </div>
  </div>
</template>
