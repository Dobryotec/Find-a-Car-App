<template>
  <div class="mr-10 mt-5 border-b pb-5">
    <div
      class="flex text-lg mt-2 items-center"
      v-for="(feature, index) in features"
      :key="index"
    >
      <img src="../../../images/icon-check.png" class="mr-3 w-[25px]" />
      <p>{{ feature }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  features: Array,
});
</script>
