<template>
  <div id="app">
    <h1>Would you rather...</h1>
    <would-you-rather
      v-for="question in questions"
      v-bind:key="question.id" 
      v-bind:questionID="question.id"
      v-bind:question="question.Question"
      v-bind:answer1="question.AnswerOne"
      v-bind:answer2="question.AnswerTwo"
      @answer-changed="userAnswer"
    ></would-you-rather>
    <!-- send the would you rather info using v-bind -->
    <h1>You Would You Rather...</h1> 
    <ul v-for="question in questions" v-bind:key="question.id">
      <li>{{ question.UserSelectionMessage }}</li> 
    </ul> <!--Make a list of all the users answers choices-->
  </div>
</template>

<script>
import WouldYouRather from "./components/WouldYouRather.vue";

export default {
  name: "App",
  components: {
    WouldYouRather,
  },
  data() {
    return {
      questions: [
        {
          id: 0,
          Question:
            "Would you rather never eat cheese again or never drink anything sweet again?",
          AnswerOne: "Not eat anymore cheese",
          AnswerTwo: "Not drink anymore sweet drinks",
          UserSelectionMessage: "",
        },
        {
          id: 1,
          Question:
            "Would you rather have a tail that can't grab things or wings that can't fly?",
          AnswerOne: "Have tail that can't grab things",
          AnswerTwo: "Have wings that can't fly",
          UserSelectionMessage: "",
        },
        {
          id: 2,
          Question: "Would you rather get up early or stay up late?",
          AnswerOne: "Get up early",
          AnswerTwo: "Stay up late",
          UserSelectionMessage: "",
        },
      ],
    };
  },
  methods: {
    userAnswer(choice, questionID) {
      // get back the user choice as well as the question ID so I can use it find the right Question and give it the right answer
      // console.log(`this choice is ${choice}`);
      // console.log(`this id is ${questionID}`);

      this.questions.forEach(function (a) {
        if (questionID === a.id) { // if the ID matches the the questions array id give it the choice that was made
          // console.log("they match");
          a.UserSelectionMessage = choice;
        }
      });
    },
  },
  sendID() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  display: block;
  font-size: 25px;
}
ul {
  padding-left: 0;
  text-align: center;
}
</style>
