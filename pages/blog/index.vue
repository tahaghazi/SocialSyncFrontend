<template>
  <AppSection>
    <PageTitle page-title="Blog" />
    <div class="mb-5 max-w-md">
      <searchWidget filter="true" v-model="search" />
    </div>
    <div class="gap-8 md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full space-y-16 md:space-y-0 md:gap-y-16">
      <div v-if="pending">....</div>
      <PostBox v-else v-for="(post, index) in data.results" :post="post" :key="index" dir="rtl" />
    </div>
    <div class="flex justify-between py-20">
      <div>
        <button class="rounded-full bg-secondary py-3 px-3 text-light hover:bg-gray-700" v-if="data.previous" @click="offset -= limit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
      <div>
        <button class="rounded-full bg-secondary py-3 px-3 text-light hover:bg-gray-700" v-if="data.next" @click="offset += limit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  </AppSection>
</template>
<script setup>
let search = ref("");
const limit = 8;
let offset = ref(0);

const { data, pending } = await useFetch(`/api/blog/posts/`, {
  lazy: true,
  baseURL: "http://127.0.0.1:8000",
  watch: [search, offset],
  params: {
    format: "json",
    search: search,
    limit: limit,
    offset: offset,
  },
});
watch(search, () => {
  offset.value = 0;
});
useHead({
  titleTemplate: "%s - blog",
});
</script>
