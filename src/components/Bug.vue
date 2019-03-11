<template>
  <div class="bug">


  </div>
</template>


<script>
  export default {
    name: "Bug",
    props: ['bugData'],
    data() {
      return {}
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    },
    methods: {
    },
    components: {}
  }
</script>

<style>
  router-link {
    cursor: pointer
  }
</style>