<template>
  <button v-on:click="postmember">체크버튼</button>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      checkIncomplete: "지금 출석체크 하세요",
      checkComplete: "출석체크 완료!",
    };
  },
  methods: {
    buttonClick: function () {
      console.log("버튼 클릭");

      const API_URL = "/api/v1/member_info?id=12";
      // Make a request for a user with a given ID
      axios
        .get(API_URL)
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
          console.log("excuted!");
        });
    },
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
          console.log("excuted!");
        });
    },
  },
};
</script>

<style></style>
