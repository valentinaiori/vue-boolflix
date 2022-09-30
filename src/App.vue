<template>
  <div id="app">
    <MainComponent />
  </div>
</template>

<script>

import MainComponent from './components/MainComponent.vue';


export default {
  name: "App",
  components: {
    MainComponent
  },
}

</script>

<style lang="scss">
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
</style>