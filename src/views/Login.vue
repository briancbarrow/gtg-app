<template>
  <div class="login">
    <b-button @click="handleSignIn" variant="primary">Sign In With Google</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import { db } from "@/db";
import firebase from "firebase";
import { mapActions } from "vuex";
import { authProvider, db } from "@/db";

export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions,
    handleSignIn() {
      let vComponent = this;
      // firebase.auth().signInWithRedirect(authProvider);
      firebase
        .auth()
        .signInWithPopup(authProvider)
        .then(async function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = result.credential.accessToken;
          let user = {
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
            email: result.user.email,
            emailVerified: result.user.emailVerified,
            uid: result.user.uid
          };
          console.log("user", user);

          let userExists = await db
            .collection("users")
            .doc(user.uid)
            .get()
            .then(snapshot => {
              console.log("snapshot", snapshot);
              return snapshot.exists;
              // do something with document
            });
          console.log("userExists", userExists);
          if (!userExists) {
            await db
              .collection("users")
              .doc(user.uid)
              .set({
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
                emailVerified: user.emailVerified
              })
              .then(() => {
                console.log("user updated!");
              });
          }
          vComponent.$store.dispatch("signIn", { token, user });
          // The signed-in user info.
          // this.$store.dispatch("updateUser", user);
          // ...
          vComponent.$router.push("/form");
        })
        .catch(function(error) {
          console.log("ERROR HERE:", error);
          // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // // The email of the user's account used.
          // var email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // ...
        });
    }
  }
};
</script>
