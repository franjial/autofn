<template>
  <div>
    <div class="gray-nav"><b-container><nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/#/">
            <b-icon-house-fill></b-icon-house-fill>
          </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Notas de examen</li>
      </ol>
    </nav></b-container></div>

    <b-container>
      <b-row class="pt-3"><h2>Notas de examen</h2></b-row>
      <b-row class="pt-2">
        <a href="https://sedeapl.dgt.gob.es/notasexamen/">Consultar notas de examen.</a>
      </b-row>
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
