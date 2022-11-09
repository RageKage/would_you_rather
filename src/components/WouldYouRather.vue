<template>
  <div class="wry">
    <h2>Would you rather...</h2>

    <h3>...{{ question }}</h3>

    <input
      type="radio"
      id="answer1"
      v-model="choice" 
      v-bind:value="answer1"
      @change="ChoiceMade"
    />
    <label>{{ answer1 }}</label>

    <input
      type="radio"
      v-model="choice"
      v-bind:value="answer2"
      @change="ChoiceMade" 
    />
    <label>{{ answer2 }}</label>
  </div>
</template>

<script>
export default {
  name: "WouldYouRather",
  emits: ["answer-changed"],
  props: {
    questionID: Number,
    question: String,
    answer1: String,
    answer2: String,
  },
  data() {
    return {
      choice: "",
    };
  },
  methods: {
    ChoiceMade() {
      // console.log(this.questionID)
      // emit the choice made to the app.vue
      this.$emit("answer-changed", this.choice, this.questionID);
    },
  },
};
</script>

<!--Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.wry {
  color: black;
  border-radius: 5px;
  text-align: center;
  background: linear-gradient(#e66465, #9198e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  margin: 5px;
  padding: 5px;
}
</style>
