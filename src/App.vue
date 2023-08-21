<template>
  <HeaderApp></HeaderApp>
  <RegularPizza></RegularPizza>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import RegularPizza from "./components/RegularPizza.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    RegularPizza,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.banner-top {
  img {
    width: 60%;
  }
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
