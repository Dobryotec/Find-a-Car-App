<template>
  <div>
    <div class="mt-32 flex">
      <CarSideBar />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const {capitalizeFirstLetter} =useUtilities()

definePageMeta({
  layout: "custom",
});


useHead({
  title: `${
    route.params.make ? capitalizeFirstLetter(route.params.make) : "Cars"
  } in ${capitalizeFirstLetter(route.params.city)} `,
});
</script>
