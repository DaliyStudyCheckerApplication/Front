<template>
  <div class="base-timer" v-on:click="postmember">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="0" cy="0" r="500"></circle>
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining"
          :class="remainingPathColor"
          d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
        ></path>
      </g>
    </svg>
    <span class="base-timer__label">{{ formattedTimeLeft }}</span>
  </div>
  <div></div>
</template>

<script>
import axios from "axios";
const FULL_DASH_ARRAY = 283;

export default {
  data() {
    return {};
  },
  props: {
    alertThreshold: {
      type: Number,
      default: 5,
    },

    timeLimit: {
      type: Number,
      required: true,
    },

    timeLeft: {
      type: Number,
      required: true,
    },

    warningThreshold: {
      type: Number,
      default: 10,
    },
  },

  computed: {
    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },

    colorCodes() {
      return {
        info: {
          color: "green",
        },
        warning: {
          color: "orange",
          threshold: this.warningThreshold,
        },
        alert: {
          color: "red",
          threshold: this.alertThreshold,
        },
      };
    },

    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },

    timeFraction() {
      const rawTimeFraction = this.timeLeft / this.timeLimit;
      return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
    },

    remainingPathColor() {
      const { alert, warning, info } = this.colorCodes;

      if (this.timeLeft <= alert.threshold) {
        return alert.color;
      } else if (this.timeLeft <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    },
  },
  components: {},
  methods: {
    postmember: function () {
      console.log("POST요청");
      const API_URL = "/api/v1/check_study";
      // Make a request for a user with a given ID

      axios
        .post(API_URL, {
          memberId: 1,
        })
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    },
  },
};
</script>

<style scoped lang="scss">
.base-timer {
  position: relative;
  width: 100px;
  height: 100px;

  &__svg {
    transform: scaleX(-1);
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }

  &__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(65, 184, 131);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__label {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
}
</style>
