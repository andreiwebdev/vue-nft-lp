<template>
  <nav class="flex items-center w-full py-4 font-sora absolute top-0 left-0 z-10">
    <container-wrapper container-classes="flex items-center justify-between">
      <!-- logo -->
      <a href="#">
        <img class="w-[60px]" :src="Logo" alt="NFT Logo" />
      </a>
      <!-- nav menu mobile toggler -->
      <i
        @click="toggleMobileMenu"
        class="pi pi-bars text-white text-3xl cursor-pointer lg:hidden"
      ></i>
      <ul
        :class="`absolute top-0 left-0 z-10 bg-white w-full h-screen p-5 items-center flex-col justify-center gap-10 ${mobileMenuClasses} lg:flex lg:bg-transparent lg:static lg:gap-8 lg:text-white lg:w-fit h-fit lg:flex-row lg:h-fit`"
      >
        <li class="text-3xl uppercase cursor-pointer lg:text-lg lg:capitalize">Home</li>
        <li class="text-3xl uppercase cursor-pointer lg:text-lg lg:capitalize">
          Collections
        </li>
        <li class="text-3xl uppercase cursor-pointer lg:text-lg lg:capitalize">
          Foundation
        </li>
        <i
          @click="toggleMobileMenu"
          class="pi pi-times absolute top-5 right-5 cursor-pointer text-3xl text-black z-20 lg:hidden"
        ></i>
      </ul>
    </container-wrapper>
  </nav>
</template>

<script>
import ContainerWrapper from "./ContainerWrapper.vue";
import Logo from "../assets/logo.png";

export default {
  name: "NavbarComponent",
  components: {
    ContainerWrapper,
  },
  data() {
    return {
      isMenuOpen: false,
      mobileMenuClasses: "hidden",
      Logo,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.mobileMenuClasses = this.isMenuOpen ? "flex" : "hidden";
    },
  },
};
</script>
