<template>
    <Header :pageTitle="pageTitle" :titleTag="titleTag" :img="img" />
    <h1 class="text-4xl">The Azure Blog</h1>
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue'

export default {
    components: { Header },
    setup() {
        const pageTitle = ref('Azure')
        const titleTag = ref('...following cloud trails')
        const img = ref('bg-home')

        return {pageTitle, titleTag, img}
    }
}
</script>
