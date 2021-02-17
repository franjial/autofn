<template>
  <div id="app">
    <Header></Header>
    <Menu></Menu>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: 26px;
}

a{
  color: #1EC8BB;
  text-decoration: none;
}
a:hover{
  color: rgb(167, 44, 44);
  text-decoration: none;
}
</style>
