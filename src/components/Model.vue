<template>
  <div
    v-if="visible"
    class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0"
  >
    <div class="bg-white px-16 py-14 rounded-md text-center">
      <h1 class="text-xl mb-1 font-bold text-slate-500">Confirm your action</h1>
      <p class="font-thin text-slate-700">
        In order to confirm your acction type
        <span class="font-bold uppercase">{{ message }}</span> and press
        confirm.
      </p>
      <input
        type="text"
        v-model="userInput"
        class="block w-full mb-2 rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
      />
      <button
        @click="hide"
        class="bg-red-500 px-4 py-2 rounded-md text-md text-white"
      >
        Cancel
      </button>
      <button
        @click="confirmAction"
        class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, ref, computed } from "vue";
const props = defineProps(["message", "modelData"]);
const emit = defineEmits(["callbackEvent", "hideModel"]);

const visible = computed({
  get() {
    return props.modelData.visible;
  },
  // setter
  set(newValue: boolean) {},
});

let userInput = ref("");
const confirmAction = () => {
  if (
    (props.message as string).toLowerCase() === userInput.value.toLowerCase()
  ) {
    emit("callbackEvent", props.modelData.callbackReturn);
    hide();
  }
};

const hide = () => {
  emit("hideModel");
};
</script>
