<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <pp-menu></pp-menu>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import Home from "./components/Home.vue";
  import Menu from "./components/Menu.vue";

  export default {
    // name: 'app',
    components: {
      ppHeader: Header,
      ppFooter: Footer,
      ppHome: Home,
      ppMenu: Menu
    }
  };
</script>

<style>
  /* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
