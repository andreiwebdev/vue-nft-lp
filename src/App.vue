<template>
    <navbar-component />
    <hero-area />
    <auction-coming-soon />
    <nft-section />
</template>

<script>
import NavbarComponent from "./components/Navbar.vue";
import HeroArea from "./components/HeroArea.vue";
import AuctionComingSoon from "./components/AuctionComingSoon.vue";
import NftSection from "./components/NftSection.vue";

export default {
    name: "App",
    components: {
        NavbarComponent,
        HeroArea,
        AuctionComingSoon,
        NftSection,
    },
};
</script>
