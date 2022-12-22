<template>
  <div id="app">
    <pageHeader></pageHeader>
    <pageContent></pageContent>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageHeader from "./components/pageHeader.vue";
import pageContent from "./components/pageContent.vue";
import pageFooter from "./components/pageFooter.vue";

export default {
  name: "App",
  components: { pageHeader, pageContent, pageFooter },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
