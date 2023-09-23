<script setup>
defineProps({
    pageTitle: {
    type: String,
    required: true
  }
})
</script>
<template>
    <h1 class="font-medium text-2xl mb-10 relative after:content-[''] after:absolute  after:border-b-2 after:border-secondary after:w-[80%] after:-bottom-1 after:-left-1 w-fit" >{{ pageTitle }}</h1>
</template>