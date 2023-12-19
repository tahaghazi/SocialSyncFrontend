<script setup>
let openDrawer = ref(false);
</script>
<template>
  <header class="flex items-center mx-auto pt-6 w-full">
    <div class="wrapper flex items-center justify-between max-w-[1440px] mx-auto md:px-8 px-4 w-full">
      <NuxtLink to="/"> <img src="/icon.png" width="100" alt="SocialSync" /> </NuxtLink>
      <nav class="flex space-x-3 text-center">
        <!-- <ul class="font-medium hidden items-center lg:flex space-x-8 text-lg">
          <NuxtLink to="/" class="hover:text-primary" active-class="text-primary">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-primary" active-class="text-primary">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-primary" active-class="text-primary">Contact</NuxtLink>
          <NuxtLink to="/blog" class="hover:text-primary" active-class="text-primary">Blog</NuxtLink>
        </ul> -->
        <div class="flex items-center ml-8">
          <!-- <button id="notifications-button" data-section="section-notification" class="px-3 py-3 hover:text-primary focus:outline-none flex relative" aria-label="الإشعارات">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
          </button> -->
          <button @click="openDrawer = !openDrawer" class="-mr-3 px-3 py-3 hover:text-primary focus:outline-none" aria-label="القائمة الجانبية">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" width="40" height="40">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>
  <Drawer v-model="openDrawer" :open-drawer="openDrawer" />
</template>
