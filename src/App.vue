<template>
  <Header />
  <div class="main__wrapper">
    <div v-if="loadingPage">
      <p><Loader :color="black" />.</p>
    </div>
    <router-view v-else />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Loader from "@/components/Loader/Loader.vue";
import SpotifyApi from "@/mixins/spotify-mixin";

export default {
  name: "App",
  mixins: [SpotifyApi],
  components: {
    Header,
    Loader,
  },
};
</script>

<style lang="scss">
@import "./styles/_index.scss";

* {
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main__wrapper {
  padding: 0px 10% 100px;
}
</style>
