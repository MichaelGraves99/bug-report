<template>
  <div class="comment row">
    <div class="card col-4" v-for="comment in comments">
      <div class="card-body">
        <h5 class="card-title">{{comment.creator}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{comment.flagged}}</h6>
        <p class="card-text">{{comment.content}}</p>
        <a @click="showForm = !showForm" v-if="!completed" class="card-link">Edit Comment</a>
        <a v-if="!completed" class="card-link" @click.prevent="deleteComment(comment)">Delete Comment</a>
        <form v-if="showForm" @submit.prevent="editComment(comment)">
          <div class="form-row">
            <div class="col-12">
              <input v-model="comment.content" type="text" class="form-control" placeholder="" required>
            </div>
            <div class="col">
              <button class="btn btn-success" type="submit">Edit Comment</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comment",
    props: ['id'],
    mounted() {
      this.$store.dispatch('getComments', this.$route.params.id) || {}
    },
    data() {
      return {
        completed: false,
        showForm: false
      }
    },
    computed: {
      comments() {
        return this.$store.state.comments
      },
      bug() {
        return this.$store.state.activeBug
      }
    },
    methods: {
      editComment(comment) {
        this.$store.dispatch('editComment', comment)
        this.showForm = false
      },
      deleteComment(comment) {
        this.$store.dispatch('deleteComment', comment)
      }
    },
    components: {}
  }
</script>