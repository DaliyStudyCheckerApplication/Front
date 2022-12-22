<template>
  <div id="app">
    <div id="root">
      <div v-show="istimeexpired">
        <BaseTimer v-bind:time-left="timeLeft" v-bind:time-limit="timeLimit" />
      </div>
    </div>
    <div class="root-modal" v-show="!istimeexpired">
      <ExpiredModal
        v-bind:time-left="timeLeft"
        v-bind:time-limit="timeLimit"
      ></ExpiredModal>
    </div>
  </div>
</template>

<script>
import BaseTimer from "./components/BaseTimer.vue";
import ExpiredModal from "./components/ExpiredModal.vue";

const TIME_LIMIT = 5;

export default {
  name: "App",

  components: {
    BaseTimer,
    ExpiredModal,
  },

  data() {
    return {
      timePassed: 0,
      timerInterval: null,
      istimeexpired: true,
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
        this.istimeexpired = false;
      }
    },
  },

  mounted() {
    this.startTimer();
  },

  methods: {
    onTimesUp() {
      clearInterval(this.timerInterval);
      this.istimeexpired = true;
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
  flex-flow: column;
  width: 100%;
}
#root {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

#root-modal {
  justify-content: center;
  /* align-items: center; */
}
</style>
