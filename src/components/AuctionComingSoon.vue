<template>
    <container-wrapper container-classes="mb-20 lg:mb-40">
        <div
            class="text-center lg:text-left lg:flex lg:justify-between lg:items-center"
        >
            <div class="mb-20 lg:mb-0">
                <h2 class="font-outfit font-bold text-3xl mb-4 lg:text-4xl">
                    AUCTION IS COMING SOON
                </h2>
                <p class="text-gray-500 text-sm lg:text-md">
                    Our public sale event will be held on August 17, 2022.
                </p>
            </div>
            <div class="xl:w-[300px] xl:text-right timer">
                <span class="relative">
                    <span
                        class="absolute top-full right-0 font-semibold text-[14px]"
                        >Hours</span
                    >
                    <span
                        class="font-semibold text-5xl lg:text-6xl xl:text-8xl opacity-25 tracking-wider"
                        >{{ formatTime(hours) }}</span
                    > </span
                ><span
                    class="font-semibold text-5xl lg:text-6xl xl:text-8xl opacity-25 tracking-wider"
                    >/</span
                >
                <span class="relative">
                    <span
                        class="absolute top-full right-0 font-semibold text-[14px]"
                        >Minutes</span
                    >
                    <span
                        class="font-semibold text-5xl lg:text-6xl xl:text-8xl opacity-25 tracking-wider"
                        >{{ formatTime(minutes) }}</span
                    > </span
                ><span
                    class="font-semibold text-5xl lg:text-6xl xl:text-8xl opacity-25 tracking-wider"
                    >/</span
                >
                <span class="relative">
                    <span
                        class="absolute top-full right-0 font-semibold text-[14px]"
                        >Seconds</span
                    >
                    <span
                        class="font-semibold text-5xl lg:text-6xl xl:text-8xl opacity-25 tracking-wider"
                        >{{ formatTime(seconds) }}</span
                    >
                </span>
            </div>
        </div>
    </container-wrapper>
</template>

<script>
import ContainerWrapper from "./ContainerWrapper.vue";

export default {
    name: "AuctionComingSoon",
    components: {
        ContainerWrapper,
    },
    data() {
        return {
            countdown: null,
            hours: 0,
            minutes: 0,
            seconds: 0,
            totalSeconds: 80 * 60 * 60,
        };
    },
    mounted() {
        this.startCountdown();
    },
    beforeUnmount() {
        clearInterval(this.countdown);
    },
    methods: {
        startCountdown() {
            this.countdown = setInterval(() => {
                this.totalSeconds--;
                this.calculateTime();
                if (this.totalSeconds <= 0) {
                    clearInterval(this.countdown);
                    // Reset countdown to 80 hours
                    this.totalSeconds = 80 * 60 * 60;
                }
            }, 1000);
        },
        calculateTime() {
            this.hours = Math.floor(this.totalSeconds / 3600);
            this.minutes = Math.floor((this.totalSeconds % 3600) / 60);
            this.seconds = this.totalSeconds % 60;
        },
        formatTime(time) {
            return time < 10 ? `0${time}` : time;
        },
    },
};
</script>

<style scoped>
    @media screen and (min-width: 1280px) {
        .timer {
            width: 560px;
        }
    }
</style>
