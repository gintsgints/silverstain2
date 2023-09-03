<template>
  <Popper :show="showhide">
    <v-btn class="text-none text-subtitle-1" @mouseenter="showhide = true" @mouseleave="showhide = false">{{text}}</v-btn>
    <template #content>
      <slot />
    </template>
  </Popper>
</template>

<script lang="ts" setup>

import { defineComponent, ref } from 'vue';
import Popper from "vue3-popper";

let showhide = ref(false)

defineComponent({
  components: {
    Popper,
  },
});

defineProps(['text'])

</script>

<style>
:root {
  --popper-theme-background-color: #fad7dd;
  --popper-theme-background-color-hover: #fad7dd;
  --popper-theme-border-width: 1px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
