<template>
  <div class="bug-form">
    <button class="btn btn-danger" @click="showform = !showform">{{showform ? 'Hide Form' : 'Submit Bug'}}</button>

  </div>
</template>

<script>
  export default {
    name: "bugForm",
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