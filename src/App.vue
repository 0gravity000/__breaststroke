<template>
  <NavbarMain />
  <div class="container">
    <div class="row">
      <div class="col-3">
        <SidebarHome />
      </div>
      <div class="col-9">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarMain from '@/components/NavbarMain.vue'
import SidebarHome from '@/components/SidebarHome.vue'

export default {
  components: {
    NavbarMain,
    SidebarHome,
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
