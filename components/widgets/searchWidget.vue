<script setup>
defineProps({
  filter: Boolean,
});
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="relative">
    <input @input="$emit('update:modelValue', $event.target.value)" :type="filter ? 'text' : 'search'" name="search" class="appearance-none bg-secondary focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary h-[50px] px-4 pl-12 py-1.5 rounded-md text-light w-full" placeholder="Search for ..." maxlength="50" required />
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 absolute top-4 left-4 opacity-40">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
    <button class="absolute top-4 right-4 opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary">
        <path fill-rule="evenodd" d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>
