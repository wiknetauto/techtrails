<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="bg-myBlack h-12">
        <div class="flex py-3 text-myOlive text-xl font-bold space-x-4 pl-4">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </div>
      </nav>
  </header>

  <RouterView />
</template>
