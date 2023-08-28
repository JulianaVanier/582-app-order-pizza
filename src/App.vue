<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {
    // HeaderApp,
    // MenuPizza,
    // IndexView
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

.container {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.cart-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eeeded;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .cart {
    position: relative;
    img {
      width: 30px;
      height: 30px;
    }
    .qt-cart {
      position: absolute;
      top: -5px;
      right: -7px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ff2401;
      color: #fff;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
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
      width: 200px;
      max-height: 100%;
      object-fit: cover;
      margin: 10px 0;
    }
    p {
      margin: 5px 0;
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
  z-index: 1;
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
// Style for cart top
.top {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  .back-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #eeeded;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .title {
    h1 {
      font-size: 30px;
      font-weight: bold;
    }
  }
}

// Style for cart component
.review-order {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
      width: 200px;
      max-height: 100%;
      object-fit: cover;
      margin: 10px 0;
    }
    p {
      margin: 5px 0;
    }
  }
}

// Style for ingredient

.list-ingredients {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  .box-indredient {
    width: 200px;
    height: 200px;
    border: 1px solid #e9e8e8;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #f8fbfe;
    h3 {
      font-size: 18px;
      font-weight: bold;
    }
    img {
      width: 100px;
      max-height: 100%;
      object-fit: cover;
      margin: 10px 0;
    }
    p {
      margin: 5px 0;
    }
  }
}

.pizza-image {
  margin: auto;
  position: relative;
  width: 340px;
  height: 340px;
}

// Style for ingredients
.ingredient {
  position: absolute;
  top: 0;
  left: 0;
  // z-index: 50;
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
