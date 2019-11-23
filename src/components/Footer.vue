<template>
  <!-- <footer class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <ul class="navbar-nav">
        <router-link to="/" tag="li"><a class="nav-link">HOME</a></router-link>
        <router-link to="/about" tag="li"
          ><a class="nav-link">ABOUT</a></router-link
        >
        <router-link to="/admin" tag="li"
          ><a class="nav-link">ADMIN</a></router-link
        >
      </ul>
    </nav>
  </footer> -->


  <footer class="footer text-center">
    <!-- <div class="container">
      <div class="row"> -->

        <!-- Footer Location -->
        <!-- <div class="col-lg-4 mb-5 mb-lg-0">
          <router-link to="/" tag="li"><a class="nav-link">HOME</a></router-link>
        </div> -->

        <!-- Footer Social Icons -->
        <!-- <div class="col-lg-4 mb-5 mb-lg-0">
          <router-link to="/about" tag="li"
          ><a class="nav-link">ABOUT</a></router-link
        >
        </div> -->

        <!-- Footer About Text -->
        <!-- <div class="col-lg-4">
          <router-link to="/admin" tag="li"><a class="nav-link">ADMIN</a></router-link>
        </div>

      </div>
    </div> -->
    
    <div class="container">
      <div class="row">
        <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
          <p class=" small mb-4 mb-lg-0 sk-title-color">&copy; copyright (c) 2019 SUKIMATCH</p>
        </div>
        <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <router-link to="/" tag="li"><a class="nav-link">HOME</a></router-link>
            </li>
            <li class="list-inline-item mr-3">
              <router-link to="/about" tag="li"><a class="nav-link">ABOUT</a></router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="/admin" tag="li"><a class="nav-link">ADMIN</a></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>


<style>
* {
  list-style: none;
}

</style>