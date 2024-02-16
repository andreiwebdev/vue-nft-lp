<template>
    <div
        :style="`background-image: url(${image})`"
        :class="`p-3 h-96 w-full bg-cover bg-no-repeat bg-center relative z-[2] xl:h-[660px] cursor-pointer hover:shadow-2xl transition-all`"
    >
        <div class="border-[2px] border-black w-full h-full">
            <div class="bg-white w-[50%] absolute left-0 bottom-0 p-3">
                <div class="bg-white relative font-outfit">
                    <div class="text-sm text-[#C2C2C6] xl:text-lg">
                        Collectible
                    </div>
                    <div class="text-[20px] font-semibold xl:text-2xl">
                        MTNFT-{{ id }}
                    </div>
                </div>
            </div>
            <div
                class="bg-white w-[50%] h-[74px] absolute right-0 bottom-0 p-3 z-[-1] xl:h-[84px]"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NftItem",
    props: ['id', 'image'],
};
</script>
