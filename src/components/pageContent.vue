<template>
  <article>
    <div>
      <div v-show="istimeexpired">
        <BaseTimer v-bind:time-left="timeLeft" v-bind:time-limit="timeLimit" />
      </div>
    </div>
    <div v-show="!istimeexpired">
      <ExpiredModal
        v-bind:time-left="timeLeft"
        v-bind:time-limit="timeLimit"
      ></ExpiredModal>
    </div>
  </article>
</template>

<script>
import BaseTimer from "./BaseTimer.vue";
import ExpiredModal from "./ExpiredModal.vue";
const TIME_LIMIT = 5;

export default {
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

<style></style>
