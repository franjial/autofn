import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import HacerTest from '@/components/HacerTest'
import ConsultarNota from '@/components/ConsultarNota'
import PedirCita from '@/components/PedirCita'
import Contacto from '@/components/Contacto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'Autoescuela Fernán Núñez'
      }
    },
    {
      path: '/hacer-test/',
      component: HacerTest,
      meta: {
        title: 'Autoescuela Fernán Núñez'
      }
    },
    {
      path: '/consultar-nota/',
      component: ConsultarNota,
      meta: {
        title: 'Autoescuela Fernán Núñez'
      }
    },
    {
      path: '/pedir-cita/',
      component: PedirCita,
      meta: {
        title: 'Autoescuela Fernán Núñez'
      }
    },
    {
      path: '/contacto/',
      component: Contacto,
      meta: {
        title: 'Autoescuela Fernán Núñez'
      }
    }
  ]
})
