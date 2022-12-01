<template>
  <div class="col-full">
    <form @submit.prevent="save">
        <div class="form-group">
            <textarea v-model="text" id="" name="" rows="10" cols="30" class="form-input" />
        </div>
        <div class="form-actions">
            <button class="btn-blue">Submit post</button>
        </div>
    </form>
  </div>
</template>

<script>
// 
export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        save() {
            const post = {
                text: this.text
            }
            this.$emit('save', { post }) // access under eventData.post
            
            this.text = ''
        }
    }
}
</script>

<style>

</style>