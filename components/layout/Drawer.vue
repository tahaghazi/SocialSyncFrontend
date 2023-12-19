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
      <NuxtLink to="/">
        <img src="/icon.png" data-src="/icon.png" class="lazyload aspect-square" height="58" width="58" alt="SocialSync" />
      </NuxtLink>
      <button @click="$emit('update:modelValue', !openDrawer)" class="-ml-[35px] rounded-full bg-secondary px-3 py-3 text-primary shadow hover:bg-primary hover:text-secondary" title="Close">
        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <ul class="overflow-y-auto pt-4 pb-20 text-gray-100 lg:pb-4 is-scroll h-full">
      <li class="py-1.5 w-full">
        <NuxtLink to="/" class="mx-4 flex items-start whitespace-nowrap rounded-lg px-5 py-5 text-light hover:bg-secondary hover:text-primary" activeClass="bg-secondary text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" height="23" width="23" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span class="pl-3">Home</span>
        </NuxtLink>
      </li>
      <li class="py-1.5 w-full">
        <NuxtLink to="/blog/" class="mx-4 flex items-start whitespace-nowrap rounded-lg px-5 py-5 text-light hover:bg-secondary hover:text-primary" activeClass="bg-secondary text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" height="23" width="23" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span class="pl-3">Blog</span>
        </NuxtLink>
      </li>
      <li class="py-1.5 w-full">
        <NuxtLink to="/blog/posts/" class="mx-4 flex items-start whitespace-nowrap rounded-lg px-5 py-5 text-light hover:bg-secondary hover:text-primary" activeClass="bg-secondary text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" height="23" width="23" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <span class="pl-3">My posts</span>
        </NuxtLink>
      </li>
      <li class="py-1.5 w-full">
        <NuxtLink to="/blog/new/" class="mx-4 flex items-start whitespace-nowrap rounded-lg px-5 py-5 text-light hover:bg-secondary hover:text-primary" activeClass="bg-secondary text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" height="23" width="23" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          <span class="pl-3">New post</span>
        </NuxtLink>
      </li>
      <li class="py-1.5 w-full">
        <NuxtLink to="/contact/" class="mx-4 flex items-start whitespace-nowrap rounded-lg px-5 py-5 text-light hover:bg-secondary hover:text-primary" activeClass="bg-secondary text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" height="23" width="23" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          <span class="pl-3">Contact</span>
        </NuxtLink>
      </li>
      <li class="py-1.5 w-full">
        <NuxtLink to="/about/" class="mx-4 flex items-start whitespace-nowrap rounded-lg px-5 py-5 text-light hover:bg-secondary hover:text-primary" activeClass="bg-secondary text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" height="23" width="23" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <span class="pl-3">About</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
