<template>
    <navbar-component />
    <hero-area />
    <auction-coming-soon />
</template>

<script>
import NavbarComponent from "./components/Navbar.vue";
import HeroArea from "./components/HeroArea.vue";
import AuctionComingSoon from "./components/AuctionComingSoon.vue";

export default {
    name: "App",
    components: {
        NavbarComponent,
        HeroArea,
        AuctionComingSoon,
    },
};
</script>
