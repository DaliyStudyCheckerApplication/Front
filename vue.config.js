const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://ec2-3-37-180-254.ap-northeast-2.compute.amazonaws.com:8080",
  },
});
