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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 100%;
  max-width: 1000px;
  // margin: 0 auto;
  // width: 1000px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
}
.display-cart-index {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}
.menu-pizza {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  // padding: 60px 0;
  .box-menu-pizza {
    width: 300px;
    height: 400px;
    // border: 1px solid #ccc;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    margin-top: 50px;
    // padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    h2 {
      font-size: 20px;
      font-weight: bold;
      font-family: "Poppins", sans-serif;
    }
    img {
      width: 200px;
      max-height: 100%;
      object-fit: cover;
      margin: 10px 0;
    }
    p {
      margin: 5px auto;
      font-family: "Poppins", sans-serif;
      width: 90%;
      font-size: 11px;
    }
    .price-size {
      font-size: 14px;
      font-weight: bold;
    }
    .description {
      font-size: 14px;
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
  margin: 15px 0;
}
.select-size {
  background-color: #eeeded;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 19rem;
  max-height: 100%;
  padding: 40px 0;
  border-radius: 8px;
  z-index: 1;
  .select-size-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeeded;
    padding: 10px 0;
    .size {
      width: 100px;
      height: 100px;
      border: 1px solid #ccc;
      margin: 0px 5px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .btn {
    width: 50%;
    margin: auto;
  }
}
// Style Preview Orders
.box-btn-previewOrder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn-previewOrder {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .btn {
      width: 300px;
      height: 100%;
      padding: 10px 40px;
      background-color: #bd2f19;
      color: #fff;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 8px;
      margin-top: 15px;
      letter-spacing: 1px;
    }
  }
  // .btn {
  //   width: 100%;
  //   height: 100%;
  //   padding: 10px 40px;
  //   background-color: #ff2401;
  //   color: #fff;
  //   font-weight: bold;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   cursor: pointer;
  //   border-radius: 8px;
  //   margin-top: 15px;
  // }
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
.box-menu-pizza {
  position: relative;
  width: fit-content;
  margin: auto;
  h2 {
    margin-bottom: 10px;
    font-family: "Poppins", sans-serif;
  }
  p {
    font-family: "Poppins", sans-serif;
  }
}

// Style for cart component
.review-order {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-title-checkout {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    .title {
      h1 {
        font-size: 50px;
        font-weight: bold;
      }
    }
  }

  .box-menu-pizza {
    width: 300px;
    height: 450px;
    // border: 1px solid #ccc;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    margin: 16px;
    // padding: 10px;
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
      width: 90%;
      font-size: 11px;
    }
    div:nth-child(4) {
      width: 100%;
    }
  }
  .box-total-price {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    .total-price {
      width: 300px;
      height: 100%;
      border: 1px solid #ccc;
      margin: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background-color: #f8fbfe;
      .total-price-title {
        font-size: 20px;
        font-weight: bold;
      }
      .total-price-value {
        font-size: 25px;
        font-weight: bold;
      }
    }
    .box-btn-checkout {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
    }
  }
}

.top-customize-view {
  width: 100%;
  // height: 100px;
  display: block;
  // justify-content: space-between;
  // align-items: center;
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

  .box-title-custom {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    .title {
      h1 {
        font-size: 50px;
        font-weight: bold;
      }
    }
  }
}
// Style for ingredient
.box-all-ingredients {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
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
  // margin: auto;
  position: relative;
  // width: 300px;
  // height: 340px;
  margin: auto;
  width: fit-content;
}

// Style for ingredients
.ingredient {
  position: absolute;
  top: 0;
  left: 0;
  // z-index: 50;
}

// Style for box quantity in
.box-features-cart {
  .delete-pizza {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #eeeded;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .qt-order-item {
    display: flex;
    justify-content: center;
    align-items: center;
    .qt-btn {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #eeeded;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .qt-number {
      margin: 0 10px;
    }
  }
  .total-price {
    p {
      margin-top: 10px;
      font-size: 18px;
      font-weight: bold;
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  // .box-menu-pizza {
  //   width: 300px;
  // }
  // Large devices (desktops, 992px and up)
  .select-size {
    background-color: #eeeded;
    position: absolute;
    top: 0%;
    left: -45%;
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
      width: 60%;
      margin: auto;
    }
  }
  @media (min-width: 992px) {
    // .menu-pizza {
    //   .box-menu-pizza p {
    //     font-size: 14px;
    //     .price-size {
    //       font-size: 120px;
    //       font-weight: bold;
    //     }
    //   }
    // }
  }
}
</style>
