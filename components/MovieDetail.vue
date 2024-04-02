<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Movie } from '~/type/Movies';

const props = defineProps({
  movie: {
    type: Object as PropType<Movie>
  }
});

const config = useRuntimeConfig();

const imgUrl = computed(() => {
  return props.movie?.poster_path
    ? `${config.public.imgBaseUrl}${props.movie?.poster_path}`
    : "";
});

</script>

<template>
<div class="mt-10 border-b border-gray-600 pb-2">
    <div class="flex">
      <img
        class="w-[350px] h-[410px] hover:opacity-75 transition ease-in-out duration-150"
        src="https://timesofindia.indiatimes.com/photo/90355881.cms"
        alt=""
      />
      <div class="ml-12">
        <h1 class="text-3xl font-semibold">{{ movie?.title }}</h1>
        <div class="flex items-center">
          <img class="w-4 h-4" src="/star.svg" alt="" />
          <p class="ml-2">47% | 2020-1001</p>
        </div>
        <p class="text-sm text-gray-500">Science Fiction, Drama</p>
        <p class="font-medium mt-10">
         {{ movie?.overview }}
        </p>
        <div class="flex gap-3  mt-10">
          <button class="px-4 py-2 bg-yellow-700 font-bold text-black rounded-md flex items-center">
            <img class="h-8 w-8 mr-1" src="/play.svg" alt="">
            Play Trailor
          </button>
          <button class="px-4 py-2 bg-yellow-700 font-bold text-black rounded-md flex items-center">
            <img class="h-8 w-8 mr-1" src="/love.svg" alt="">
            Unfavorite
          </button>
        </div>
      </div>
    </div>
  </div>
</template>