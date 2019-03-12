<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 text-center font1">
        <h1>Bug Report</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <bugForm></bugForm>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <bug></bug>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Bug from '@/components/Bug.vue'
  import BugForm from '@/components/BugForm.vue'
  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getBugs')
    },
    components: {
      Bug,
      BugForm
    }
  }
</script>

<style>
  .font1 {
    font-family: 'Permanent Marker', cursive;
  }

  .font2 {
    font-family: 'Play', sans-serif;
  }
</style>