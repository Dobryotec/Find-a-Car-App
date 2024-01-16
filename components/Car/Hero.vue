<template>
  <div
    class="relative min-h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('/images/car.webp')]"
  >
    <div
      class="z-5 absolute min-w-full min-h-full flex justify-center items-center"
    >
      <div class="text-center w-1/2 z-10">
        <h1 class="text-8xl font-serif mb-10 text-white">Find your car</h1>
        <CarSearchBar />
      </div>
    </div>
    <div class="z-1 absolute min-w-full min-h-full bg-black opacity-50"></div>
  </div>
</template>
