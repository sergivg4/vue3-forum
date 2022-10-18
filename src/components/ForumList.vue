<template>
<div class="col-full">
  <div class="forum-list">

    <h2 class="list-title">
        <router-link v-if="categoryId" :to="{name: 'Category', params: {id: categoryId}}">{{ title }}</router-link>
        <span v-else>{{ title }}</span>
    </h2>

    <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
            <router-link
                :to="{name: 'Forum', params: {id: forum.id}}"
                class="text-xlarge"
            >
                {{ forum.name }}
            </router-link>
            <p>{{ forum.description }}</p>
        </div>
    
        <div class="threads-count">
            <p>
                <span class="count">{{ forum.threads?.length }}</span>
                {{ forumThreadsWord(forum) }}
            </p>
        </div>

        <!-- <div class="last-thread">
            <img class="avatar" src="" alt=""> {{ lastPostUserById(forum.lastPostId).avatar }}
            <div class="last-thread-details">
                <a href="thread.html">{{ lastPostTextSubstr(forum) }}...  </a>
                <p class="text-small">By <a href="profile.html">  {{ lastPostUserById(forum.lastPostId).name }} </a>, <AppDate :timestamp="postById(forum.lastPostId).publishedAt" /> </p>
            </div>
        </div> -->
    </div>
 </div>
</div>
</template>

<script>

export default {
    props: {
        forums: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            default: 'Forums'
        },
        categoryId: {
            type: String,
            required: false
        }
    },
    computed: {
        posts() {
            return this.$store.state.posts
        },
        users() {
            return this.$store.state.users
        }
    },
    methods: {
        forumThreadsWord (forum) {
            if (forum.threads?.length) {
                return forum.threads.length > 1 ? 'threads' : 'thread'
            } else {
                return 'no threads'
            }
        },
        postById(postId) {
            return this.posts.find(p => p.id === postId)
        },
        userById(userId) {
            return this.users.find(p => p.id === userId)
        }// ,
        // lastPostUserById(postId) {
        //     const post = this.posts.find(p => p.id === postId)
        //     console.log(this.userById(post.userId).name)
        //     return this.userById(post.userId)
        // },
        // lastPostTextSubstr(forum) {
        //     var lastPostText = this.postById(forum.lastPostId).text
        //     console.log(lastPostText.substr(0, 30))
        //     return lastPostText.substr(0, 30)
        // }
    }
}
</script>

<style>

</style>