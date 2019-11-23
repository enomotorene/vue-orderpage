<template>
  <header class="row">
    <!-- <nav class="navbar navbar-toggleable-md navbar-light">
      <a href="/" class="navbar-brand">My vue site</a>
      <ul class="navbar-nav">
        <router-link :to="{ name: 'homeLink' }" tag="li"
          ><a class="nav-link">HOME</a></router-link
        >
        <router-link :to="{ name: 'menuLink' }" tag="li"
          ><a class="nav-link">Menu</a></router-link
        >
      </ul>
    </nav> -->

     <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="/">Order page</a>
      <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <router-link :to="{ name: 'homeLink' }" tag="li"
          ><a class="nav-link">HOME</a></router-link
        >
        <router-link :to="{ name: 'menuLink' }" tag="li"
          ><a class="nav-link">Menu</a></router-link
        >
        </ul>
      </div>
    </div>
  </nav>

    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav> -->

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
