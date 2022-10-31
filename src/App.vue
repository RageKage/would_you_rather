<template>
  <div id="app">
    <h1>Would you rather...</h1>
    <would-you-rather
      v-for="question in questions"
      v-bind:key="question.id"
      v-bind:question="question.Question"
      v-bind:answer1="question.AnswerOne"
      v-bind:answer2="question.AnswerTwo"
      @answer-changed="userAnswer"
    ></would-you-rather>
    <p v-for="question in questions"
      v-bind:key="question.id">{{question.UserSelectionMessage}}</p>
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
          AnswerOne: "No more cheese",
          AnswerTwo: "No more sweet drinks",
          UserSelectionMessage: "",
        },
        {
          id: 1,
          Question:
            "Would you rather have a tail that cant grab things or wings that cant fly?",
          AnswerOne: "can't grab",
          AnswerTwo: "can't fly",
          UserSelectionMessage: "",
        },
        {
          id: 2,
          Question:
            "Would you rather be incredibly luck with average intelligence or incredibly smart with average luck?",
          AnswerOne: "lucky dumb",
          AnswerTwo: "smart no luck",
          UserSelectionMessage: "",
        },
      ],
    };
  },
  methods: {
    userAnswer(choice,question ) {

      // console.log(`you checked a radio ${question}`)
      // this.UserSelectionMessage = '';

      // look back at the student sign in and see how it shows in vue that a student is present or not and how it moves from the rows to the app
      // this.questions.forEach(function (a) {
      //   a.UserSelectionMessage = choice
      //   console.log(a.UserSelectionMessage)
      //   this.UserSelectionMessage.push(a.UserSelectionMessage)
      // });
     
      this.questions.forEach(function(a){
        if (question == a.Question ) {
          a.UserSelectionMessage = choice
          this.UserSelectionMessage.push(a.UserSelectionMessage)
          // console.log(`they match ${question}`)
        }
        // a.UserSelectionMessage = choice
        // // console.log(a.UserSelectionMessage)
        // this.UserSelectionMessage.push(a.UserSelectionMessage)
      })
      //  console.log(this.UserSelectionMessage)
    },
  },
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
</style>
