<template>
  <div id="app" class="bg-white archivo-font">
    <Landing />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Landing from "./components/Landing.vue";

export default {
  name: "App",
  components: {
    Footer,
    Landing,
  },
};
</script>

<style src="./assets/css/tailwind.css"></style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700&display=swap");

.archivo-font {
  font-family: "Archivo", sans-serif;
}

.inter-font {
  font-family: "Inter", sans-serif;
}
</style>
