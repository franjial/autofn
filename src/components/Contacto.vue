<template>
  <div>
    <div class="gray-nav"><b-container><nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/#/">
            <b-icon-house-fill></b-icon-house-fill>
          </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Contacte con nosotros</li>
      </ol>
    </nav></b-container></div>

    <b-container  class="text-justify pt-3">
      <b-row class="pt-3"><h2>Contacte con nosotros</h2></b-row>
      <b-row class="pt-1">Calle Cervantes 28 bajo Fernán Núñez (Córdoba)</b-row>
      <b-row class="pt-1"><a href="tel:690833811">Teléfono 690 833 811</a></b-row>
    </b-container>
  </div>
</template>

<script>
import { BIconHouseFill } from 'bootstrap-vue'
export default {
  data () {
    return { }
  },
  components: {
    BIconHouseFill
  }
}
</script>

<style scoped>
.gray-nav{
  display: block;
  width:100%;
  background:#e9ecef;
  background-clip: content-box, padding-box;
}
.breadcrumb{
  margin-left:-30px;
}
</style>
