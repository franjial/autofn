<template>
  <div class="dark-container"><b-container>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="my-0">
      <b-navbar-brand href="/#/" class="pl-auto">AUTOESCUELA FERNÁN NÚÑEZ</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="text-uppercase" v-for="item in elements" :key="item.id" v-bind:href="item.link">{{item.name}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container></div>
</template>

<script>
export default {
  name: 'Menu',
  components: {

  },
  data () {
    return {
      elements: [{ id: 1, name: 'Hacer test', link: '/#/hacer-test' },
        { id: 2, name: 'Consultar nota', link: '/#/consultar-nota' },
        { id: 3, name: 'Pedir cita en tráfico', link: '/#/pedir-cita' },
        { id: 4, name: 'Contacte  con nosotros', link: '/#/contacto' }]
    }
  }
}
</script>

<style scoped>
  .navbar{
    margin-left: -30px;
  }
  .navbar-nav .nav-item .nav-link {
      color: white;
      transition: 0.3s;
      height: 100%;
      margin: 0px;
  }
  .navbar-nav .nav-item.active .nav-link,
  .navbar-nav .nav-item:hover .nav-link {
      color: #f2f2f2;
      background: #1EC8BB;
  }

  .dark-container{
    display: block;
    width:100%;
    background: #343a40;
    background-clip: content-box, padding-box;
  }
</style>
