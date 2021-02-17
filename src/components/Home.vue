<template>
  <div>
    <div class="gray-nav"><b-container><nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active">
          <a href="/#/">
            <b-icon-house-fill></b-icon-house-fill> Autoescuela Fernán Núñez
          </a>
        </li>
      </ol>
    </nav></b-container></div>
    <b-container>
      <b-row class="text-justify pt-3">
      Autoescuela Fernán Núñez comenzó su andadura en el sector de la formación vial en 1985, siendo la primera autoescuela de la localidad, con el objetivo de ofrecer una enseñanza de calidad.
      En la actualidad Autoescuela Fernán Núñez cuenta con una sección situada en Fernán Núñez (Córdoba) con aulas informatizadas con los mejores programas informáticos del mercado, que junto con las explicaciones de nuestros profesores te garantizarán el éxito a la hora de obtener el teórico de los permisos AM y B.
      Ponemos a su disposición una flota de vehículos renovados constantemente para que el aprendizaje te resulte lo más fácil y comodo posible.
      Además, te gestionamos todos los permisos (B96,B+E,C1, C, C+E, D1,D,D+E) así como el Certificado de Aptitud Profesional (CAP)
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return { }
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
