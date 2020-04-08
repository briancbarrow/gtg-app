<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          type="number"
          v-model.number="form.reps"
          required
          placeholder="Number of Reps"
        ></b-form-input>
      </b-form-group>

      <b-form-select required v-model="form.selected" :options="options"></b-form-select>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { db } from "@/db";

export default {
  data() {
    return {
      exercises: [],
      form: {
        selected: "",
        reps: undefined
      }
    };
  },

  firestore: {
    exercises: db.collection("exercises")
  },
  computed: {
    options: function() {
      let options = this.exercises.map(ex => {
        return ex.name;
      });
      return options;
    }
  },
  created() {},
  methods: {
    onSubmit() {
      db.collection("workouts").add({
        userId: this.$store.state.user.uid,
        ...this.form
      });
      console.log("FORM SUBMITTED");
    }
  }
};
</script>

<style >
form {
  max-width: 500px;
  margin: auto;
}

form select {
  margin-bottom: 15px;
}
</style>