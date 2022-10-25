<template>
<div id="app">

<h1>Would you rather...</h1>
<would-you-rather 
v-bind:question = "wryQuestion"
v-bind:answer1="wryAnswerOne"
v-bind:answer2 = "wryAnswerTwo"
@answer-changed = "answerChanged"></would-you-rather>
<p>{{UserSelectionMessage}}</p>
</div>
</template>

<script>
import WouldYouRather from './components/WouldYouRather.vue'

export default {
  name: 'App',
  components: {
    WouldYouRather
  },
  data() {
    return{
      wryQuestion :'Would you rather never eat cheese again or never drink anything sweet again?',
      wryAnswerOne : 'No more cheese',
      wryAnswerTwo: 'No more sweet drinks',
      UserSelectionMessage: ''

    }
  },
  methods: {
    answerChanged(choice){
       this.UserSelectionMessage  = `You chose ${choice}`
    }
  }
}
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
