<template>
  <div
    class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <img
      class="absolute w-7 right-2 top-2 z-20"
      :src="favored ? heartFilled : heartOutline"
      alt="heart"
      @click="emit('favorite', car.id)"
    />
    <div
      class="flex min-h-full"
      @click="navigateTo(`/car/${car.name}-${car.id}`)"
    >
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
import heartFilled from "../../images/heartFilled.svg";
import heartOutline from "../../images/heartOutline.svg";
const props = defineProps({
  car: Object,
  favored: Boolean,
});

// const favored = useState(`favored-${props.car.id}`, () => {return false})

const emit = defineEmits(["favorite"]);
</script>
