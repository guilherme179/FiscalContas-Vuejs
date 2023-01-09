<template>
  <div class="lg:flex p-8 border-2 rounded-md bg-gradient-to-t from-navbar-400 to-navbar-700 ">
    <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Clientes
        </h2>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4 justify-self-end">
        <Editar />

        <Buscar />

        <Deletar />

        <Cadastrar />
    </div>
  </div>
</template>

<script lang="ts">
import Buscar from './modal/Buscar.vue'
import Cadastrar from './modal/Cadastrar.vue'
import Deletar from './modal/Deletar.vue'
import Editar from './modal/Editar.vue'

export default {
  components: { Deletar, Cadastrar, Buscar, Editar },
  name: 'Title'
}
</script>
