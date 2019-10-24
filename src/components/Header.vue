<template>
  <header class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <a href="/" class="navbar-brand">My vue site</a>
      <ul class="navbar-nav">
        <router-link :to="{ name: 'homeLink' }" tag="li"
          ><a class="nav-link">HOME</a></router-link
        >
        <router-link :to="{ name: 'menuLink' }" tag="li"
          ><a class="nav-link">Menu</a></router-link
        >
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {};
</script>

<style>
  header {
    margin-bottom: 20px;
  }

  .navbar-brand {
    font-size: 1.5em;
  }

  ul li {
    display: inline-block;
  }
</style>
