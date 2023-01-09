<template>
  <div>
    <HeaderComponent/>
    <div class="flex">
      <SidebarComponent/>
      <Router-view />
    </div>
    <FooterComponent/>
  </div>
</template>

<script lang="ts">
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'
export default {
  components: { HeaderComponent, FooterComponent, SidebarComponent },
  name: 'App'
}
</script>
