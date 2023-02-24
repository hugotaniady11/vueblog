<template>
  <div>
    <NavbarVue />
  <router-view/>
  <FooterVue />
  </div>
</template>

<script>
import FooterVue from "./components/Footer.vue";
import NavbarVue from "./components/Navbar.vue";

export default {
  components: {
    NavbarVue, FooterVue
  }
}
</script>
<style>
</style>
