<template>
  <div class="bug-details container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{bug.title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{bug.creator}}</h6>
            <p class="card-text">{{bug.description}}</p>
            <a v-if="!bug.closed" class="card-link"
              @click="editForm = !editForm">{{editForm ? 'Hide Form' : 'Edit'}}</a>
            <a v-if="!bug.closed" class="card-link"
              @click="bugform = !bugform">{{bugform ? 'Hide Form' : 'Make Comment'}}</a>
            <form v-if="bugform" @submit.prevent="createComment">
              <div class="form-row">
                <div class="col">
                  <input v-model="newComment.creator" type="text" class="form-control" placeholder="Name" required>
                </div>
                <div class="col-7">
                  <input v-model="newComment.content" type="text" class="form-control" placeholder="Comment" required>
                </div>
                <button class="btn btn-success" type="submit">Submit Comment</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
    <comment></comment>
  </div>
</template>


<script>
  import Comment from "@/components/Comment.vue";

  export default {
    name: "bugDetails",
    props: ["id"],
    mounted() {
      this.$store.dispatch("getBug", this.id) || {};
    },
    data() {
      return {
        newComment: {
          bug: this.id,
          flagged: "pending"
        },
        bugForm: false,
        editForm: false
      };
    },
    computed: {
      bug() {
        return this.$store.state.activeBug;
      }
    },
    methods: {
      createComments() {
        this.$store.dispatch("createComments", this.newComments);
        this.newComment = {};
        this.showForm = false;
      },

      components: {
        Comments
      }
    };
</script>