<template>
  <header
    class="sticky top-0 z-10 flex justify-between items-center space-x-1 border-b bg-white p-4 drop-shadow-md"
  >
    <NuxtLink class="text-3xl font-sans" to="/">Find a Car</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink to="/profile/listings" class="mr-5">profile</NuxtLink>
      <p class="cursor-pointer">Logout</p>
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>
  </header>
</template>

<script setup>
const user = useSupabaseUser();
</script>
