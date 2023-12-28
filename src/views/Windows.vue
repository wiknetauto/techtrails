<template>
    <Header :pageTitle="pageTitle" :titleTag="titleTag" :img="img" />
    <h1 class="text-4xl">The Windows Blog</h1>
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue'

export default {
    components: { Header },
    setup() {
        const pageTitle = ref('Windows')
        const titleTag = ref('systems administration')
        const img = ref('bg-home')

        return {pageTitle, titleTag, img}
    }
}
</script>
