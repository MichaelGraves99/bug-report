<template>
  <div class="bug-form">
    <div class="text-right">
      <button class="btn btn-danger m-1"
        @click="showform = !showform">{{showform ? 'Hide Form' : 'Submit Bug'}}</button>
    </div>
    <form class=" my-3" v-if="showform" @submit.prevent="createBug">
      <div class="form-row">
        <div class="col">
          <input v-model="newBug.title" type="text" class="form-control" placeholder="Title" required>
        </div>
        <div class="col-7">
          <input v-model="newBug.description" type="text" class="form-control" placeholder="Description" required>
        </div>
        <div class="col">
          <input v-model="newBug.creator" type="text" class="form-control" placeholder="Creator" required>
        </div>
        <button class="btn btn-success" type="submit">Submit Bug</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "bug-form",
    data() {
      return {
        newBug: {},
        showform: false
      }
    },
    props: [],
    computed: {},
    methods: {
      createBug() {
        this.$store.dispatch('createBug', this.newBug)
        this.newBug = {}
        this.showform = false
      }
    },
    components: {}
  }
</script>