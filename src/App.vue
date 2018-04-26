<template>
  <div id="app">
    <random-count-card :ifCount=true  title='Production' :mount=100  desc='utilization'></random-count-card>
  </div>
</template>

<script>
import RandomCountCard from "./lib/RandomCountCard";
// import RandomCountCard from ''
export default {
  name: "App",
  components: {
    RandomCountCard
  }
};
</script>

<style>

</style>
