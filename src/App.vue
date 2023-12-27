<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="bg-myBlack h-12">
        <div class="flex py-3 text-myOlive text-xl font-bold space-x-8 pl-4">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/azure">Azure</RouterLink>
            <RouterLink to="/microsoft365">M365</RouterLink>
            <RouterLink to="/windows">Windows</RouterLink>
            <RouterLink to="/cisco">Cisco</RouterLink>
        </div>
      </nav>
  </header>

  <RouterView />
</template>
