<template>
    <div class="col-large push-top">

        <h1>{{ thread.title }}</h1>

        <post-list :posts="threadPosts"/>

        <post-editor @save="addPost"/>
    </div>
</template>

<script>
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'

export default {
  name: 'ThreadShow',
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    PostList,
    PostEditor
  },
  computed: {
    threads () {
      return this.$store.state.threads
    },
    posts() {
      return this.$store.state.posts
    },
    thread () {
      return this.threads.find(thread => thread.id === this.id)
      // tambien funciona con this.$route.params.id || this.id
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    addPost(eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>

<style>

</style>
