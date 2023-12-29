<template>
  <div class="about">
    <Header :pageTitle="pageTitle" :img="img" />
    <Body bodyTitle="Behind the Trail...">
        <div class="my-4 text-left">
            <p>
            Hello and welcome! My name is Nathan Wikman and I have a background in networking and systems administration, and I support clients in the finance and banking industry. I have experience with technologies including Azure, Cisco, Windows server, Microsoft 365, and VMware vSphere, and I pair my technical skills with a passion for customer service and a commitment to the job that forges positive perception and customer satisfaction.
            </p>
            <p class="mt-4">
            Tech Trails is an outgrowth of this and my desire to share the knowledge I've gained with other techs who are on the same journey, and allows me to explore exciting technologies new to me in the web development sphere. Tech Trails is a Vue 3 project utilizing Vite, the Vue router, and Tailwind CSS.
            </p>
        </div>
    </Body>
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue'
import Body from '../components/Body.vue'

export default {
    components: { Header, Body },
    setup() {
        const pageTitle = ref('About')
        const titleTag = ref('...seeking happy paths')
        const img = ref('bg-home')

        return {pageTitle, titleTag, img}
    }
}
</script>
