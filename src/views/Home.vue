<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Bugs</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <bugForm></bugForm>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <bug></bug>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Bug from "@/components/Bug.vue";
import BugForm from "@/components/BugForm.vue";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBugs");
  },
  components: {
    Bug,
    BugForm
  }
};
</script>