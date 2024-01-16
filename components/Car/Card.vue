<template>
  <div
    class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
    @click="navigateTo(`/car/${car.name}-${car.id}`)"
  >
    <div class="flex min-h-full">
      <img :src="car.url" :alt="car.name" class="w-[300px] min-h-full" />
      <div class="p-4 flex flex-col">
        <div>
          <h2 class="text-2xl text-blue-700">{{ car.name }}</h2>
          <p class="text-gray-700">
            {{ car.description }}
          </p>
          <h3 class="mt-auto text-xl">${{ car.price }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  car: Object,
});
</script>
