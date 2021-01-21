<template>  
    <div class="main-container">      
        <router-view />
        <loading v-if="isLoading" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { USER_REQUEST } from "actions/user";

export default {
  name: 'App',
  created: function() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST);
    }
  },
  computed: {
    ...mapGetters(["authStatus","isAuthenticated","isProfileLoaded"]),
    isLoading: function() {
      return this.authStatus === "loading" || (this.isAuthenticated && !this.isProfileLoaded)
    }
  }
}
</script>