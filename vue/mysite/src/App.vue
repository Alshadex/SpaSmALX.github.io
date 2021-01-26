<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="view">
      <router-view/>
    </transition>
  </div>
</template>

<style>
body {
    background-color: rgb(23, 45, 71);
    padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: rgb(23, 45, 71);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #0dbb56;
  font-size: 20px;
}

#nav a.router-link-exact-active {
  color: #d1d3d2;
}

.page {
    width: 100%;
    box-sizing: border-box;
}

.view-enter-active, .view-leave-active {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
    transition-delay: 0.5s;
}

.view-enter, .view-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}

.view-enter-to, .view-leave {
    opacity: 1;
    transform: translateX(0px);
}
</style>
