# 582-app-order-pizza

## Pizza ordering app

Welcome to the Pizza Buying App! This is an application developed in Vue.js, Node.js and MongoDB that allows users to choose pizzas from the menu or customize their own pizzas by adding ingredients and choosing sizes.

## Application Features

- Choose pizzas from the menu
- Customize your own pizza
- Add extra ingredients
- Choose the size of the pizza
- View the total price based on your choices

## Technologies

- Vue.js
- Jest (for testing)
- Node.js
- MongoDB
- Sass
- Prettier
- JavaScript
- HTML
- CSS

## Overall project structure

![Project Image](/docs//img/draw-project2.jpg)

## Screenshot

Menu Pizza
![Project Image](/docs//img/menu-pizza.png)
Select Size
![Project Image](/docs//img/select-size.png)
Custom Pizza
![Project Image](/docs//img/customize-pizza.png)
Cart / Preview Order
![Project Image](/docs//img/pizza-in-cart.png)
Order placed
![Project Image](/docs//img/order-placed.png)
Mobile First

![Project Image](/docs//img/mobile-first.png)

## API

![Project Image](/docs//img/582-app-order-pizza-API.jpg)

## Request Samples NODE.JS

```ruby
# GET Available Pizza's
fetch("https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev/pizza")
      .then((response) => response.json())
      .then((json) => {
        for (let pizza of json) {
          this.pizzaStore.addPizza(pizza);
        }
});

# GET Available Ingredient's
fetch("https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev/customizepizza")
        .then((response) => response.json())
        .then((json) => {
          for (let ingredient of json) {
            this.ingredientStore.addIngredient(ingredient);
          }
});

# POST Order
fetch("https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev/placeorder",
    {
      method: "POST",
      body: JSON.stringify(orderToDb),
      headers: {
        "Content-Type": "application/json",
      },
    }
    )
        .then((response) => {
          console.log(response);
          return response.text();
        })
        .then((data) => {
          console.log(data);
          this.pizzaStore.clearCart();
          this.$router.push("/orderplaced/" + orderToDb.orderNumber);
});

# GET Order
fetch(
        "https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev/previeworder/" +
          this.orderNumber
      )
        .then((response) => response.json())
        .then((json) => {
          this.pizzaStore.clearCart();

          console.log("JSONNNN", json);
          for (let pizza of json.pizza) {
            if (pizza.custom === true) {
              this.pizzaStore.addCustomToCart(pizza);
            } else {
              this.pizzaStore.addPizzaToCart(
                pizza,
                pizza.priceSelected,
                pizza.sizeSelected
              );
            }
            this.$router.push("/cart/" + pizza.id);
            console.log("order do FETCH", pizza);
        }
});
```


## Project setup

```bash
# clone this repository
git clone https://github.com/JulianaVanier/582-app-order-pizza.git

# navigate to the project directory
cd your-repo

# install dependencies
npm install

# clone the repository that contains file node to connect with DB
git clone https://github.com/JulianaVanier/582-codespace-order-pizza.git

#create your codespace with this repository and run file mongo.js
node mongo.js

# go to PORTS right click in 3000 and select port visibility PUBLIC

# open in browser

# go to repository 582-app-order-pizza to change fetch

#open file component MenuPizza.vue and change fetch
```
```ruby
fetch("HERE THE ADRESS OF YOUR CODESPACE THAT IS RUNNING + /pizza")
      .then((response) => response.json())
      .then((json) => {
        for (let pizza of json) {
          this.pizzaStore.addPizza(pizza);
        }
});
#open file component IngredientList.vue and change fetch
fetch("HERE THE ADRESS OF YOUR CODESPACE THAT IS RUNNING + /customizepizza")
        .then((response) => response.json())
        .then((json) => {
          for (let ingredient of json) {
            this.ingredientStore.addIngredient(ingredient);
          }
});

#open file component CartComponent.vue and change fetch
fetch("HERE THE ADRESS OF YOUR CODESPACE THAT IS RUNNING + /placeorder",
    {
      method: "POST",
      body: JSON.stringify(orderToDb),
      headers: {
        "Content-Type": "application/json",
        },
    }
    )
        .then((response) => {
          console.log(response);
          return response.text();
        })
        .then((data) => {
          console.log(data);
          this.pizzaStore.clearCart();
          this.$router.push("/orderplaced/" + orderToDb.orderNumber);
});

#open file component PreviewOrder.vue and change fetch
fetch(
        "HERE THE ADRESS OF YOUR CODESPACE THAT IS RUNNING + /previeworder/" +
          this.orderNumber
      )
        .then((response) => response.json())
        .then((json) => {
          this.pizzaStore.clearCart();

          console.log("JSONNNN", json);
          for (let pizza of json.pizza) {
            if (pizza.custom === true) {
              this.pizzaStore.addCustomToCart(pizza);
            } else {
              this.pizzaStore.addPizzaToCart(
                pizza,
                pizza.priceSelected,
                pizza.sizeSelected
              );
            }
            this.$router.push("/cart/" + pizza.id);
            console.log("order do FETCH", pizza);
        }
});
```
```bash
# save and run the application
npm run serve

# build for production with minification
npm run build

# run unit tests in watch mode
npm run test:unit
```
