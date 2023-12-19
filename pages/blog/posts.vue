
<template>
  <AppSection>
    <PageTitle page-title="Blog" />
    <div class="mb-5 max-w-md">
      <searchWidget filter="true" v-model="search" />
    </div>
    <div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
      <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" style="background-position: 10px 10px;"></div>
      <div class="relative rounded-xl overflow-auto">
        <div class="shadow-sm overflow-hidden my-8">
          <table class="border-collapse table-auto w-full text-sm">
            <thead>
              <tr>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Title</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Content</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Date</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-slate-800">
              <tr v-if="!pending" v-for="(post, index) in data.results">
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400" v-text="post.title"></td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400" v-text="post.content.substr(0, 100)"></td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"> <time :datetime="post.created_at" v-text="new Date(post.created_at).toDateString()"></time></td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
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

const { data, pending } = await useFetch(`/api/posts/posts/`, {
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
