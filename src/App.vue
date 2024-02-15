<template>
    <navbar-component />
    <hero-area />
</template>

<script>
import NavbarComponent from "./components/Navbar.vue";
import HeroArea from "./components/HeroArea.vue";

export default {
    name: "App",
    components: {
        NavbarComponent,
        HeroArea,
    },
};
</script>
