<template>
  <AppSection>
    <PageTitle :page-title="post.title" />
    <time :datetime="post.date" v-text="post.dat"></time>
    <div v-html="post.content" dir="rtl"></div>
  </AppSection>
</template>
<script setup>
const route = useRoute();
const { data: post, pending } = await useFetch(`/api/posts/posts/${route.params.slug}/?format=json`, {
  baseURL: "http://127.0.0.1:8000",
});

useHead({ title: post.value ? post.value.title : " " });
</script>
