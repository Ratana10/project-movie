<script lang="ts" setup>
import type { PropType } from "vue";
import type { Movie } from "~/type/Movies";

const props = defineProps({
  movie: {
    type: Object as PropType<Movie>,
  },
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
        :src="imgUrl"
        alt=""
      />
      <div class="ml-12">
        <h1 class="text-3xl font-semibold">{{ movie?.title }}</h1>
        <!-- Start -->
        <div class="flex items-center mt-3">
          <div
            v-if="movie?.vote_average"
            v-for="star in Math.round(movie?.vote_average / 2)"
          >
            <svg
              class="w-4 h-4 fill-current text-yellow-500"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1l2.65 5.88 6.35.47-4.83 4.29 1.5 6.54L10 15.27l-6.68 3.34 1.5-6.54L1 7.35l6.35-.47L10 1z"
              />
            </svg>
          </div>
        </div>
        <div class="flex flex-row gap-3 my-2">
          <span
            v-for="genre in movie?.genres"
            class="inline-flex items-center rounded-md bg-gray-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-purple-700/10"
          >
            {{ genre.name }}
          </span>
        </div>
        <p class="font-medium">
          {{ movie?.release_date }}
        </p>
        <p class="">Duration: {{ movie?.runtime }} mins</p>

        <p class="font-medium mt-10">
          {{ movie?.overview }}
        </p>
        <div class="flex gap-3 mt-10">
          <button
            class="px-4 py-2 bg-yellow-700 font-bold text-black rounded-md flex items-center"
          >
            <img class="h-8 w-8 mr-1" src="/play.svg" alt="" />
            Play Trailor
          </button>
          <button
            class="px-4 py-2 bg-yellow-700 font-bold text-black rounded-md flex items-center"
          >
            <img class="h-8 w-8 mr-1" src="/love.svg" alt="" />
            Unfavorite
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
