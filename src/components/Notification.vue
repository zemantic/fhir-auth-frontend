<template>
  <div ref="nav" class="rounded-lg px-4 py-3 font-semibold text-center">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from "vue";
import type { Ref } from "vue";
export default defineComponent({
  props: ["message", "type", "display"],
  setup(props) {
    const nav: Ref<null | HTMLElement> = ref(null);

    onMounted(() => {
      if (nav.value && props.type === "danger") {
        (nav.value as HTMLElement).classList.add("bg-red-200", "text-red-800");
      } else if (nav.value && props.type === "warning") {
        (nav.value as HTMLElement).classList.add(
          "bg-yellow-200",
          "text-yellow-800"
        );
      } else if (nav.value && props.type === "success") {
        (nav.value as HTMLElement).classList.add(
          "bg-green-200",
          "text-green-800"
        );
      }
    });
    return { nav };
  },
});
</script>
