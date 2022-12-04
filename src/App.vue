<template>
  <div id="app">
    <div id="root">
      <BaseTimer :time-left="timeLeft" :time-limit="timeLimit" />
      <CheckButton id="check-button"></CheckButton>
    </div>
  </div>
</template>

<script>
import BaseTimer from "./BaseTimer.vue";
import CheckButton from "./CheckButton.vue";

const TIME_LIMIT = 20;

export default {
  name: "App",

  components: {
    BaseTimer,
    CheckButton,
  },

  data() {
    return {
      timePassed: 0,
      timerInterval: null,
    };
  },

  computed: {
    timeLimit() {
      return TIME_LIMIT;
    },

    timeLeft() {
      return this.timeLimit - this.timePassed;
    },
  },

  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    },
  },

  mounted() {
    this.startTimer();
  },

  methods: {
    onTimesUp() {
      clearInterval(this.timerInterval);
    },

    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },
  },
};
</script>

<style>
body {
  background-color: #fff;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
#root {
  display: flex;
  flex-flow: column;
}

#check-button {
  margin-top: 20px;
}
</style>
