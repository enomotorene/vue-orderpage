<template>
  <div class="row">
    <!-- {{ $route.params.items }} pathのmenuの後ろを変えるとメニュー名が変わる -->
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Add to basket</th>
          </tr>
        </thead>
        <tbody v-for="(item, key, index) in getMenuItems" :key="key">
          <tr>
            <td>
              <strong>{{ item.name }}</strong>
            </td>
          </tr>
          <tr v-for="(option, k, ind) in item.options" v-bind:key="ind">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td>
              <button
                class="btn btn-sm btn-outline-success"
                type="button"
                @click="addToBasket( item, option )"
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- shopping basket -->
    <div class="col-sm-12 col-md-6">
      <div v-if="basket.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody v-for="item in basket" :key="item">
            <tr>
              <td>
                <button
                  class="btn btn-secondary"
                  @click="decreaseQuantity(item)"
                  type="button"
                >
                  -
                </button>
                <span> {{ item.quantity }} - </span>
                <button
                  class="btn btn-secondary"
                  @click="increaseQuantity(item)"
                  type="button"
                >
                  +
                </button>
              </td>
              <td>{{ item.name }} {{ item.size }}"</td>
              <td>{{ item.price * item.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <p>Order total:</p>
        <button class="btn btn-success btn-block" @click="addNewOrder">Place Order</button>
      </div>
      <div v-else>
        <p>{{ basketText }}</p> {{ this.$store.state.orders }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        basket: [],
        basketText: "Your basket is empty!"
      };
    },
    computed: {
      ...mapGetters([
        'getMenuItems'
      ])
    },
    methods: {
      //function here
      addToBasket(item, option) {
        this.basket.push({
          name: item.name,
          price: option.price,
          size: option.size,
          quantity: 1
        });
      },
      removeFromBasket(item) {
        this.basket.splice(this.basket.indexOf(item), 1);
      },
      increaseQuantity(item) {
        item.quantity++;
      },
      decreaseQuantity(item) {
        item.quantity--;

        if (item.quantity === 0) {
          this.removeFromBasket(item);
        }
      },
      addNewOrder() {
        this.$store.commit('addOrder', this.basket)
        this.basket = []
        this.basketText = "Thank you, your order has been placed! :)"
      }
    }
  };
</script>
