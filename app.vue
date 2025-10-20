<template>
  <div class="sm:px-[50px] px-5">
    <NuxtLayout>
      <AppNav />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import AppNav from '~/components/AppNav.vue'
</script>

<style>
body {
  font-family: "poppins", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  scroll-behavior: smooth;
}


.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(.9rem);
  transform: scale(1.1);
}
</style>
