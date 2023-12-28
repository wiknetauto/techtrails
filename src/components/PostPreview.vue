<template>
    <div>
        <h2>{{ post.title }}</h2>
        <p> {{ snippet }} </p>
        <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + "..."
        })
        return { snippet }
    }
}
</script>
