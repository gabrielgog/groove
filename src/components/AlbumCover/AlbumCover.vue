<template>
  <div :class="`album__cover stagger__in--${index + 1}`">
    <div class="album__cover-content">
      <div class="album__cover-content__caption">
        <p class="album__cover-content__caption_name">{{ album.name }}</p>
        <p class="album__cover-content__caption_artist">
          {{ album.artists.map((artist) => artist.name).join(", ") }}
        </p>
      </div>
      <img src="../../assets/player.svg" alt="media" />
    </div>
    <div class="album__cover-image">
      <img :src="album.images[0].url" alt="album" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumCover",
  props: {
    album: {
      type: Object,
    },
    index: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped src="./_album-cover.scss"></style>
