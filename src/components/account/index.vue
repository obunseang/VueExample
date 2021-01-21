<template>
  <div>
    <div class="headline">      
      <h1>Your profile</h1>
    </div>
    <p v-if="isProfileLoaded">
      <strong>Name: </strong> <i>{{ profile.title }} {{ profile.name }}</i>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.headline {
  margin-top: 1em;
  display: flex;
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
}
</style>

<script>
import {mapGetters, mapState } from "vuex";

export default {
  name: "account",
  computed: {
    ...mapState({ profile: state => state.user.profile }),
    ...mapGetters(["isProfileLoaded"]),
  }
};
</script>
