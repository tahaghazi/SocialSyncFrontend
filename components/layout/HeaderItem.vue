<template>
  <header>
    <div class="wrapper py-10">
      <nav class="flex flex-col space-x-3 text-center">
        <div class="mb-6">
          <img class="m-auto" src="/favicon.ico" width="80" />
        </div>
        <ul class="flex space-x-3 justify-center items-center lg:text-xl">
          <NuxtLink to="/" class="hover:text-primary" active-class="text-primary">Home</NuxtLink>
          <span class="lg:hidden">|</span>
          <NuxtLink to="/about" class="hover:text-primary" active-class="text-primary">About</NuxtLink>
          <span class="lg:hidden">|</span>
          <NuxtLink to="/contact" class="hover:text-primary" active-class="text-primary">Contact</NuxtLink>
          <span class="lg:hidden">|</span>
          <NuxtLink to="/blog" class="hover:text-primary" active-class="text-primary">Blog</NuxtLink>
        </ul>
      </nav>
    </div>
  </header>
</template>
