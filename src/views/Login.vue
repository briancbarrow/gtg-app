<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png" />
    <b-button variant="primary">Sign In With Google</b-button>
    <b-button variant="primary">Primary</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default {
  name: "Home",
  components: {},
  methods: {
    handleSignIn() {
      firebase.auth().signInWithRedirect(googleProvider);
    }
  }
};
</script>
