<template>
  <div class="homepage flex_container">
    <div class="flex_container__left fade-in-from-left">
      <h1 class="homepage__heading">Don’t stop the groove.</h1>
      <p class="homepage__caption">Find new music you love with a search</p>
      <Search
        v-model:inputValue="searchValue"
        @enter="$router.push({ name: 'albums', query: { search: $event } })"
      />
    </div>
    <div class="fade-in-from-right">
      <img
        src="@/assets/groove-image.jpg"
        alt="groove-image"
        class="groove_image"
      />
    </div>
  </div>
  <PopularAlbum :albums="albums">
    <h1 class="popular__albums-title">Popular albums</h1>
  </PopularAlbum>
</template>

<script>
import Search from "../../components/Searchbox/Search.vue";
import PopularAlbum from "../../container/PopularAlbums";

export default {
  name: "Home",
  components: {
    Search,
    PopularAlbum,
  },
  data() {
    return {
      albums: [],
      searchValue: "",
    };
  },
  created() {
    this.getAlbums();
  },
  methods: {
    async getAlbums() {
      const accessToken = localStorage.getItem("access_token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      try {
        const result = await fetch(
          "https://api.spotify.com/v1/browse/new-releases",
          config
        );
        const response = await result.json();
        this.albums = response.albums.items;
      } catch (err) {
        return err;
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./_home.scss"></style>
