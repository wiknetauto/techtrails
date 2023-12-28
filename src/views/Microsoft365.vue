<template>
    <Header :pageTitle="pageTitle" :titleTag="titleTag" :img="img" />
    <h1 class="text-4xl">The Microsoft 365 Blog</h1>
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue'

export default {
    components: { Header },
    setup() {
        const pageTitle = ref('M365')
        const titleTag = ref('...the enterprise standard')
        const img = ref('bg-home')

        return {pageTitle, titleTag, img}
    }
}
</script>
