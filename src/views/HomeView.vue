<template>
  <main>
    <Header :pageTitle="pageTitle" :titleTag="titleTag" :img="img" />
    <Body bodyTitle="Welcome!">
        <p class="my-4 text-left">Hi, my name is Nathan Wikman and I am the creator of Tech Trails, a blog dedicated to documenting common systems administration deployments and other projects I may be working on. Feel free to offer suggestions in the article comments or contact me directly below. So take a seat, grab a cup of coffee, and join me for hands-on experience in tech.</p>
    </Body>
  </main>
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue'
import Body from '../components/Body.vue'

export default {
    components: { Header, Body },
    setup() {
        const pageTitle = ref('Tech Trails')
        const titleTag = ref('...seeking happy paths')
        const img = ref('bg-home')

        return {pageTitle, titleTag, img}
    }
}
</script>
