<script>
export default {
  props: {
    msg: String,
    type: String,
  },
  computed: {
    alertTypeColors() {
      let color = "gray";
      switch (this.type) {
        case "info":
          color = "blue";
          break;
        case "success":
          color = "green";
          break;
        case "error":
          color = "red";
          break;
        case "warning":
          color = "yellow";
          break;
      }
      return {
        boxStyle: "bg-color-50 text-color-400".replace(/color/gi, color),
        buttonStyle: "bg-color-50  focus:ring-color-400 hover:bg-color-200 text-color-400".replace(/color/gi, color),
      };
    },
  },
  methods: {
    removeAlert(e) {
      e.currentTarget.parentNode.remove();
    },
  },
};
</script>
<template>
  <div id="alert-1" class="flex items-center p-4 mb-4 rounded-lg dark:bg-secondary" :class="alertTypeColors.boxStyle" role="alert">
    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    </svg>
    <span class="sr-only">Info</span>
    <div class="ml-3 text-sm font-medium">
      {{ msg }}
    </div>
    <button @click="removeAlert" type="button" class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-secondary dark:hover:bg-gray-700" :class="alertTypeColors.buttonStyle" data-dismiss-target="#alert-1" aria-label="Close">
      <span class="sr-only">Close</span>
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
    </button>
  </div>
</template>
