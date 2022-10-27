<template>
  <div class="wry">


  <h2>Please make your choice</h2>

  <h3>{{ question }}</h3>


  <input type="radio"  id="answer1" 
  v-model="choice"
  v-bind:value = "answer1"
  @change="ChoiceMade">
  <label>{{ answer1 }}</label>

  <input type="radio"   
  v-model="choice"
  v-bind:value = "answer2"
  @change="ChoiceMade">
  <label>{{ answer2 }}</label>
  
  

  </div>
</template>

<script>
export default {
  name: 'WouldYouRather',
  props: {
    question: String,
    answer1: String,
    answer2: String,
  },
  data() {
    return {
      choice : '',
    }
  },
  methods: {
    ChoiceMade(){
      this.$emit('answer-changed', this.choice)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.wry {
  color: black;
  border: 1px solid green;
  border-radius: 5px;
  background: green;
}
</style>
