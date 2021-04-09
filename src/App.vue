<template>
  <div id="app" class="bg-white archivo-font">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style src="./assets/css/tailwind.css"></style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;700&display=swap");

.libre {
  font-family: "Libre Franklin", sans-serif;
}
.archivo-font {
  font-family: "Archivo", sans-serif;
}

.inter-font {
  font-family: "Inter", sans-serif;
}
</style>

<style src="./assets/css/fonts.css"></style>

