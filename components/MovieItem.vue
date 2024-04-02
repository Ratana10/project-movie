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
  <div class="">
    <NuxtLink to="/movies/123">
      <img
        class="hover:opacity-75 transition ease-in-out duration-150"
        :src="imgUrl"
        alt="Image"
      />
    </NuxtLink>
    <h3 class="text-xl">{{ movie?.title }}</h3>
    <div>
      <!-- Start -->
      <div class="flex items-center">
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
      <p
        class="text-sm text-gray-500"
        v-for="(item, index) in movie?.genres"
        :key="index"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>
