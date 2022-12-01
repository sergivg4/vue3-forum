<template>
    <ForumList
      v-for="category in categories"
      :key="category.id"
      :forums="getForumsForCategory(category)"
      :title="category.name"
      :category-id="category.id"
    />
</template>

<script>

import ForumList from '@/components/ForumList'
export default {
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            forums: this.$store.state.forums
        }
    },
    components: {
        ForumList
    },
    methods: {
        getForumsForCategory(category) {
            return this.$store.state.forums.filter(forum => forum.categoryId === category.id)
        }
    }
}
</script>

<style>

</style>