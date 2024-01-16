<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>

<script setup>
const route = useRoute();
const { cars } = useCars();

const { capitalizeFirstLetter } = useUtilities();
const car = computed(() => {
  return cars.find(({ id }) => id === parseInt(route.params.id));
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Car with ID of ${route.params.id} does not exist`,
  });
}

definePageMeta({
  layout: "custom",
});

useHead({
  title: capitalizeFirstLetter(route.params.name),
});
</script>
