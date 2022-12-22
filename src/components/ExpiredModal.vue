<template>
  <div class="root">
    <div class="black-bg">
      <div class="white-bg">
        <h4>{{ messagetitle }}</h4>
        <p>
          `이재원님, 예정시각 2100로 부터 {{ getminutes }}분 {{ getseconds }}초
          지나 만료되었습니다.`
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpiredModal",
  data() {
    return {
      messagetitle: "출석 가능 시간이 만료되었습니다.",
    };
  },
  props: {
    timeLimit: {
      type: Number,
      required: true,
    },

    timeLeft: {
      type: Number,
      required: true,
    },
  },

  computed: {
    getminutes() {
      const timeLeft = this.timeLeft;
      const timeLimit = this.timeLimit;
      const minutes = Math.floor(timeLeft / 60);
      console.log(timeLimit);
      return `${minutes}`;
    },
    getseconds() {
      const timeLeft = this.timeLeft;
      let seconds = timeLeft % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${seconds}`;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 50%;
  height: 50%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.white-bg {
  width: 70%;
  height: 70%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
