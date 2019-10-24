<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>Welcome to my vue site</h1>
        <h2>Feeling Good?</h2>
        <button class="btn btn-success" @click="goToMenu">Let's order</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goToMenu() {
        // this.$router.go(-1); //negative number goes
        // this.$router.replace("/menu"); //negative number goes
        // this.$router.replace({
        //   name: "menuLink"
        // }); //negative number goes back to next page, taking to the menu page
        this.$router.push({
          name: "menuLink"
        }); //behover to go back to lsat page is different
      }
    }
  };
</script>

<style>
  #home {
    background: url("../../src/assets/bg.jpg");
    height: 800px;
    padding: 10%;
    background-size: cover;
  }

  h1,
  h2 {
    margin: 6%;
  }

  .background {
    background: #eee;
    opacity: 0.8;
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
