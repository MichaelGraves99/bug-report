<template>
  <div class="comment row">
    <div class="card col-4" v-for="note in notes">
      <div class="card-body">
        <h5 class="card-title">{{note.creator}}</h5>
        <p class="card-text">{{note.content}}</p>
        <a class="card-link" @click.prevent="deleteNote(note)">Delete Note</a>
        <form v-if="showform" @submit.prevent="editNote(note)">
          <div class="form-row">
            <div class="col-12">
              <input v-model="note.content" type="text" class="form-control" placeholder="" required>
            </div>
            <div class="col">
              <button class="btn btn-success" type="submit">Edit Note</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<!-- v-if="!completed" -->

<!-- <table class="table font2">
  <thead>
    <tr>
      <th scope="col">User</th>
      <th scope="col">Comment</th>
      <th scope="col"><button class="btn btn-success m-1"
          @click="showform = !showform">{{showform ? 'Hide Form' : 'Add Comment'}}</button></th>
    </tr>
    <form class=" my-3" v-if="showform" @submit.prevent="createNote">
      <div class="form-row">
        <div class="col">
          <input v-model="newNote.title" type="text" class="form-control" placeholder="Title" required>
        </div>
        <div class="col-7">
          <input v-model="newNote.content" type="text" class="form-control" placeholder="Content" required>
        </div>
        <div class="col">
          <input v-model="newNote.creator" type="text" class="form-control" placeholder="Creator" required>
        </div>
        <button class="btn btn-success" type="submit">Submit Bug</button>
      </div>
    </form>
  </thead>
  <tbody>
    <tr class="comment-list george" v-for="note in notes">
      <th scope="row">{{note.creator}}</th>
      <router-link :to="{name: 'Details', params:{id: bug._id}}">
        <td>{{note.content}}</td>
      </router-link>
      <td>
        <button class="btn btn-danger" type="submit">Delete</button>
      </td>
    </tr>
  </tbody>
</table> -->
<script>
  export default {
    name: "comment",
    props: ['id'],
    mounted() {
      this.$store.dispatch('getBug', this.$route.params.id) || {}
      this.$store.dispatch('getNotes', this.$route.params.id)
    },
    data() {
      return {
        // completed: false,
        showform: false,
      }
    },
    computed: {
      notes() {
        return this.$store.state.notes
      },
      bug() {
        return this.$store.state.actBug
      }
    },
    methods: {
      deleteNote(note) {
        this.$store.dispatch('deleteNote', note)
      }
    },
    components: {}
  }
</script>

<style>
  .card-link {
    background-color: lightcoral;
    cursor: pointer;
    border-radius: 8%;
    padding: 5px
  }
</style>