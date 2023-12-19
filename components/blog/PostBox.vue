<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <article :id="post.id" class="rounded-xl max-w-md relative w-full mx-auto">
    <NuxtLink :to="'/blog/' + post.slug" :title="post.title">
      <img :src="post.image" class="aspect-[3/2] bg-secondary rounded-xl w-full lazyloaded hover:opacity-50" alt="صورة المقالة" />
    </NuxtLink>
    <div class="flex flex-col space-y-4 text-right pt-8 w-full">
      <div class="flex items-center text-sm space-x-4 rtl:space-x-reverse">
        <a href="#" class="rounded-full bg-secondary py-2 px-4 font-medium text-light hover:bg-gray-700">social</a>
      </div>
      <h3 class="font-medium text-lg text-light leading-[1.75]">
        <NuxtLink :to="'/blog/' + post.slug" :title="post.title">
          {{ post.title }}
        </NuxtLink>
      </h3>
      <p class="text-gray-400" v-text="sliceContent"></p>
    </div>
  </article>
</template>
<script>
export default {
  computed: {
    sliceContent() {
      let value = this.post.content;
      if (value.length > 100) {
        return value.substr(0, 100) + "...";
      }
      return value;
    },
  },
};
</script>
