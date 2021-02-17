<template>
  <div>
    <div class="gray-nav"><b-container><nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/#/">
            <b-icon-house-fill></b-icon-house-fill>
          </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Pedir cita en tráfico</li>
      </ol>
    </nav></b-container></div>

    <b-container  class="text-justify pt-3">
      <b-row class="pt-3"><h2>Pedir cita en tráfico</h2></b-row>
      <b-row>Para realizar tramites en todas las jefaturas es necesario
        solicitar cita previa. La cita siempre se concederá dentro de los
        quince días siguientes a la petición de la misma. Se le mostrarán
        los días y horarios disponibles y podrá elegir la cita que más le
        convenga. Puede realizar los trámites el propio interesado o su
        representante debidamente autorizado. Para ello, simplemente deberá
        introducir en el formulario el nombre, apellidos y NIF de la persona
        que le va representar. En el caso de que le surja algún imprevisto,
        puede anular la cita o modificarla a través del 060.
      </b-row>
      <b-row class="pt-2">
        <a href="https://sedeapl.dgt.gob.es/WEB_NCIT_CONSULTA/solicitarCita.faces">
          Click para acceder al servicio de cita de la Jefatura Provincial de Tráfico
        </a>
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
