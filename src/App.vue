<template>
  <HeaderApp></HeaderApp>
  <MenuPizza></MenuPizza>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import MenuPizza from "./components/MenuPizza.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    MenuPizza,
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
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .box-banner-top {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
}

.menu-pizza {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  .container {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .box-menu-pizza {
      width: 300px;
      height: 400px;
      border: 1px solid #ccc;
      margin: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      h2 {
        font-size: 20px;
        font-weight: bold;
      }
      img {
        width: 100%;
        height: 160px;
        object-fit: cover;
      }
      p {
        margin: 5px 0;
      }
    }
  }
}
.btn {
  // width: 100%;
  // height: 40px;
  padding: 10px 40px;
  background-color: #ff2401;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 15px;
}
.select-size {
  background-color: #eeeded;
  position: absolute;
  top: 80%;
  left: 40%;
  width: 35rem;
  max-height: 100%;
  // border: #acafb3 solid 1px;
  padding: 40px 0;
  border-radius: 8px;
  // display: flex;
  .select-size-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeeded;
    padding: 20px 0;
    .size {
      width: 100px;
      height: 100px;
      border: 1px solid #ccc;
      margin: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
  .btn {
    width: 50%;
    margin: auto;
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
