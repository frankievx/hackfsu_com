<template>
  <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
</template>

<script>
  export default {
    props: {
    },
    computed: {
      
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>