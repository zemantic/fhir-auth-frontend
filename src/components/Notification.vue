<template>
  <div ref="nav" class="rounded-lg px-4 py-3 font-semibold text-center">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Ref } from "vue";

export default defineComponent({
  props: ["message", "type"],
  setup(props) {},
  mounted() {
    if (this.$props.type === "danger") {
      (this.$refs.nav as HTMLElement).classList.add(
        "bg-red-200",
        "text-red-800"
      );
    } else if (this.$props.type === "warning") {
      (this.$refs.nav as HTMLElement).classList.add(
        "bg-yellow-200",
        "text-yellow-800"
      );
    } else if (this.$props.type === "success") {
      (this.$refs.nav as HTMLElement).classList.add(
        "bg-green-200",
        "text-green-800"
      );
    }
  },
});
</script>
