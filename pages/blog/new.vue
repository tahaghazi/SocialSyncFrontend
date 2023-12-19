ange<style>
input[type="file"]::-webkit-file-upload-button {
  visibility: hidden;
}
</style>
<template>
  <AppSection>
      <AlertItem :class="{'hidden':(pending || !status)}" :type="status" :msg="success?'Saved successfully.':'Please check'" />

    <PageTitle page-title="New Post" />
    <form enctype="multipart/form-data" @submit.prevent="submitForm" class="py-10">
      <fieldset class="space-y-5 max-w-md mx-auto">
        <div class="relative">
          <input v-model="formData.title" name="title" class="appearance-none bg-secondary focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary h-[50px] px-4 pl-12 py-3 rounded-md text-light w-full" placeholder="Enter the title" maxlength="50" required />
          <span class="w-5 h-5 absolute top-4 left-4 opacity-40 flex">
            T
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            </svg>
          </span>
        </div>
        <div class="relative">
          <textarea v-model="formData.content" name="content" class="appearance-none bg-secondary focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary h-[100px] px-4 pl-12 py-3 rounded-md text-light w-full" rows="2" placeholder="Write your post here" required></textarea>
          <span class="w-5 h-5 absolute top-4 left-4 opacity-40">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          </span>
        </div>
        <div class="relative">
          <label class="block appearance-none bg-secondary focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary h-[50px] px-4 pl-12 py-3 rounded-md text-light w-full">
            <input @change="handleFile" name="image" type="file" placeholder="Enter the title" class="ml-[-100px]" accept="image/*" />
            <span class="w-5 h-5 absolute top-4 left-4 opacity-40">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </span>
          </label>
        </div>
        <div class="relative">
          <button :disabled="isLoading" class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-sm font-semibold text-light hover:text-primary sm:w-auto mx-auto">
            <svg :class="{ hidden: !isLoading }" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span :class="{ hidden: isLoading }" class="mt-1.5">Confirm</span>
          </button>
        </div>
      </fieldset>
    </form>
  </AppSection>
</template>

<script setup>
const consent = ref(false);
const isLoading = ref(false);
const success = ref(false);
const { csrf } = useCsrf();
let requestData = new FormData();
let status = ref(null);

let formData = ref({
  title: "",
  content: "",
});
async function handleFile(e) {
  requestData.append("image", e.target.files[0]);
}
const submitForm = async (e) => {
  isLoading.value = true;
  for (const [key, value] of Object.entries(formData.value)) {
    requestData.append(key, value);
  }

  const res = await useFetch(`/api/posts/posts/`, {
    lazy: true,
    baseURL: "https://081d-41-68-98-196.ngrok-free.app",
    method: "POST",
    headers: {},
    body: requestData,
  });
  isLoading.value = res.pending.value;
  success.value = res.status.value === "success";
  status.value = res.status.value 

  if (success) {
    // Reset form data and file input
    e.target.reset();
    formData.value = {};
  }
};
useHead({
  titleTemplate: "%s - post - new",
});
</script>
