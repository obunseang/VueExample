<template>
  <div class="navigation">
    <ul>
      <li>
        <router-link class="brand" to="/">
         <strong>DOGEBOOK</strong>
        </router-link>
      </li>
    </ul>
    <ul>
      <li v-if="isProfileLoaded">
        <router-link to="/account">{{ name }}</router-link>
      </li>
      <li v-if="isAuthenticated" @click="logout">
        <span class="logout">Logout</span>
      </li>
      <li v-if="!isAuthenticated && !authLoading">
        <router-link to="/login">Login</router-link>
      </li>
    </ul>    
  </div>

</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.navigation {
  display: flex;
  align-items: center;
  background-color: #ffa035;
  padding: 5px;

  ul {
    display: flex;
    &:first-child {
      flex-grow: 1;
    }
    li {
      padding-right: 1em;
    }
  }
}
.brand {
  display: flex;
  align-items: center;
}
.logout {
  &:hover {
    cursor: pointer;
  }
}
</style>

<script>
import { mapGetters, mapState } from "vuex";
import { AUTH_LOGOUT } from "actions/auth";

export default {
  name: "dashboard",
  methods: {
    logout: function() {
      	this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
    }
  },
  computed: {
    ...mapGetters(["getProfile", "isAuthenticated", "isProfileLoaded"]),
    ...mapState({
        authLoading: state => state.auth.status === "loading",
      	name: state => `${state.user.profile.title} ${state.user.profile.name}`
    })
  }
};
</script>

