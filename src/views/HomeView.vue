<template>
  <main>
    <Header :pageTitle="pageTitle" :titleTag="titleTag" :img="img" />
  </main>
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue'

export default {
    components: { Header },
    setup() {
        const pageTitle = ref('Tech Trails')
        const titleTag = ref('...seeking happy paths')
        const img = ref('bg-home')

        return {pageTitle, titleTag, img}
    }
}
</script>
