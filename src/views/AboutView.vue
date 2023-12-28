<template>
  <div class="about">
    <Header :pageTitle="pageTitle" :img="img" />
    <h1 class="text-2xl font-bold underline">This is an about page</h1>
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue'

export default {
    components: { Header },
    setup() {
        const pageTitle = ref('About')
        const titleTag = ref('...seeking happy paths')
        const img = ref('bg-home')

        return {pageTitle, titleTag, img}
    }
}
</script>
