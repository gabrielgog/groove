<template>
  <div class="albums">
    <PopularAlbums :albums="albums" :loading="loading">
      <div class="albums__content fade-in">
        <img
          @click="$router.push({ name: 'home' })"
          src="@/assets/arrow.svg"
          alt="search"
        />
        <h1 class="albums__content_title">
          Albums <br />
          matching "{{ searchValue }}"
        </h1>
        <p class="albums__content_caption">
          Find new music you love with a search
        </p>
        <Search v-model:inputValue="searchValue" @enter="getSearchResult" />
      </div>
    </PopularAlbums>
  </div>
</template>

<script>
import Search from "../../components/Searchbox/Search.vue";
import PopularAlbums from "../../container/PopularAlbums";

export default {
  name: "Albums",
  components: {
    PopularAlbums,
    Search,
  },
  data() {
    return {
      searchValue: this.$route.query.search,
      albums: [],
      loading: false,
    };
  },
  created() {
    this.getSearchResult();
  },
  methods: {
    async getSearchResult() {
      this.loading = true;
      const accessToken = localStorage.getItem("access_token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      try {
        const result = await fetch(
          `https://api.spotify.com/v1/search?q=${this.searchValue}&type=album`,
          config
        );
        const response = await result.json();
        this.albums = response.albums.items;
      } catch (err) {
        return err;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./_albums.scss"></style>
