<template>
    <footer class="bg-black text-white py-10">
        <container-wrapper>
            <div class="flex items-center justify-center md:justify-end gap-4 text-white mb-10">
                <div class="flex items-center justify-end gap-6 text-white text-xl">
                    <a target="_blank" href="https://www.instagram.com"><i class="pi pi-instagram"></i></a>
                    <a target="_blank" href="https://github.com"><i class="pi pi-github"></i></a>
                    <a target="_blank" href="https://discord.com"><i class="pi pi-discord"></i></a>
                    <a target="_blank" href="https://twitter.com"><i class="pi pi-twitter"></i></a>
                    <a target="_blank" href="https://www.reddit.com"><i class="pi pi-reddit"></i></a>
                </div>
            </div>
            <div class="flex flex-col gap-8 text-center mb-10 md:flex-row md:items-center md:text-left">
                <img class="w-[100px] mx-auto cursor-pointer md:m-0" :src="logoImage" alt="Logo Footer">
                <div class="flex flex-col justify-center">
                    <div class="mb-4">Powered by</div>
                    <div class="flex flex-col items-center gap-2 md:flex-row md:gap-6">
                        <img class="w-[100px] cursor-pointer" :src="solanaImage" alt="solana image">
                        <img class="w-[100px] mb-6 cursor-pointer md:mb-0" :src="openSeaImage" alt="opensea image">
                    </div>
                </div>
            </div>
            <div class="text-sm text-center font-outfit md:flex md:items-center md:justify-between">
                <div class="mb-4 md:mb-0">Copyright © 2022 MT Foundation Limited. All rights reserved.</div>
                <ul class="md:flex md:gap-4">
                    <li class="mb-3 md:mb-0">About</li>
                    <li class="mb-3 md:mb-0">Privacy</li>
                    <li class="mb-3 md:mb-0">Contact us</li>
                    <li class="mb-3 md:mb-0">Disclaimer</li>
                </ul>
            </div>
        </container-wrapper>
    </footer>
</template>

<script>
import ContainerWrapper from "./ContainerWrapper.vue";
import logoImage from "../assets/logo.png";
import openSeaImage from "../assets/opensealogo.png";
import solanaImage from "../assets/solanalogo.png";

export default {
    name: "FooterSection",
    components: {
        ContainerWrapper,
    },
    data() {
        return {
            logoImage,
            openSeaImage,
            solanaImage,
        };
    },
};
</script>
