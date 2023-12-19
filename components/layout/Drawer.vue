<script setup>
defineProps({
  openDrawer: {
    type: Boolean,
    required: true,
  },
});
defineEmits(["update:modelValue"]);
</script>
<template>
  <div id="overlay" @click="$emit('update:modelValue', !openDrawer)" :class="{ invisible: !openDrawer }" class="fixed inset-0 z-20 cursor-pointer bg-light/50 backdrop-blur-sm"></div>
  <nav id="drawer" :class="{ 'translate-x-96': !openDrawer }" class="fixed top-0 right-0 z-30 flex h-screen w-80 flex-col divide-y divide-secondary bg-dark transition-transform duration-300 ease-linear">
    <div class="sticky top-0 z-40 flex w-full items-center justify-between bg-dark px-4 py-6">
      <a href="{% url 'home' %}" title="{{ website_settings.general_settings.title }}">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk4IiBoZWlnaHQ9IjE5OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" data-src="{{ website_settings.general_settings.logo.url }}" class="lazyload aspect-square invert" height="58" width="58" alt="{{ website_settings.general_settings.title }}" />
      </a>
      <button @click="$emit('update:modelValue', !openDrawer)" class="-ml-[35px] rounded-full bg-secondary px-3 py-3 text-primary shadow hover:bg-primary hover:text-secondary" title="Close">
        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <ul class="overflow-y-auto pt-4 pb-20 text-gray-100 lg:pb-4 is-scroll h-full">
    
      <li class="py-1.5 w-full">
        <NuxtLink to="/" class="mx-4 flex items-start whitespace-nowrap rounded-lg px-5 py-5  text-light hover:bg-secondary hover:text-primary" activeClass="bg-secondary text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" height="23" width="23" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span class="pl-3">Home</span>
        </NuxtLink>
      </li>
      <li class="py-1.5 w-full">
        <NuxtLink to="/blog/new/" class="mx-4 flex items-start whitespace-nowrap rounded-lg px-5 py-5  text-light hover:bg-secondary hover:text-primary" activeClass="bg-secondary text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" height="23" width="23" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          <span class="pl-3">New post</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
