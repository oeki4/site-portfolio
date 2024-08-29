<script>
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import * as fancy from "@fancyapps/ui";

const { Fancybox } = fancy;

export default {
  props: {
    options: Object,
  },
  mounted() {
    Fancybox.bind(this.$refs.container, "[data-fancybox]", {
      ...(this.options || {}),
    });
  },
  updated() {
    Fancybox.bind(this.$refs.container, "[data-fancybox]", {
      ...(this.options || {}),
    });
  },
  unmounted() {
    Fancybox.destroy();
  },
};
</script>

<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<style></style>
