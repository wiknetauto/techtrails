<template>
    <div class="my-4">
        <h2 class="text-xl text-left text-myBlack font-bold">{{ post.title }}</h2>
        <p class="my-4 text-left"> {{ snippet }} </p>
        <span v-for="tag in post.tags" :key="tag" class="bg-myOlive text-myCream font-semibold text-sm py-1 px-3 rounded-full inline-flex items-center ml-2 mb-1">#{{ tag }}</span>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0,300) + "..."
        })
        return { snippet }
    }
}
</script>
