<template>
  <div class="bug">

    <table class="table font2">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr :class="{fred : !bug.closed }" class="bug-list george" v-for="bug in bugs">
          <th scope="row">{{bug.createdAt}}</th>
          <router-link :to="{name: 'Details', params:{id: bug._id}}">
            <td>{{bug.title}}</td>
          </router-link>
          <td>{{bug.creator}}</td>
          <td>
            <i v-if="bug.closed" class="font2">Closed</i>
            <i v-if="!bug.closed" class="font2">Active</i>
          </td>
        </tr>
      </tbody>
    </table>
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

  .george {
    background-color: lightpink
  }

  .fred {
    background-color: lightgray
  }
</style>