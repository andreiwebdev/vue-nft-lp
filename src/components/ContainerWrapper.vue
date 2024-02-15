<template>
  <div :class="`container mx-auto px-4 ${containerClasses}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContainerWrapper",
  props: {
    containerClasses: {
      type: String,
      default: "",
    },
  },
};
</script>
