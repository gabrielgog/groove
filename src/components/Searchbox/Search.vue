<template>
  <div class="search">
    <img src="@/assets/search.svg" alt="search" />
    <input
      :value="inputValue"
      @input="$emit('update:inputValue', $event.target.value)"
      @keyup.enter="$emit('enter', inputValue)"
      placeholder="Search for an album..."
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    inputValue: {
      type: String,
    },
  },
  watch: {
    inputValue(val) {
      this.$emit("update:inputValue", val);
    },
  },
};
</script>

<style lang="scss" scoped src="./_search.scss"></style>
