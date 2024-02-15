<template>
    <navbar-component />
    <hero-area />
    <auction-coming-soon />
    <nft-section />
    <newsletter-section />
</template>

<script>
import NavbarComponent from "./components/Navbar.vue";
import HeroArea from "./components/HeroArea.vue";
import AuctionComingSoon from "./components/AuctionComingSoon.vue";
import NftSection from "./components/NftSection.vue";
import NewsletterSection from "./components/NewsletterSection.vue";

export default {
    name: "App",
    components: {
        NavbarComponent,
        HeroArea,
        AuctionComingSoon,
        NftSection,
        NewsletterSection,
    },
};
</script>
