<template>
  <div class="flex items-center">
    <div class="">
      <NuxtLink to="/" class="text-4xl">MHunter</NuxtLink>
    </div>
    <ul class="flex mt-5 gap-5 ml-5">
      <li>
        <NuxtLink to="/movies/popular" class="uppercase">
          Popular
        </NuxtLink>
      </li>
      <li>
        <NuxtLink>
          Actors
        </NuxtLink>
      </li>
      <li>
        <NuxtLink>
          Profile
        </NuxtLink>
      </li>
    </ul>
  </div>
  </template>