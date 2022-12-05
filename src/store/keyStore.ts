import { defineStore } from "pinia";

export const KeyStore = defineStore("key", {
  state: (): { key: string | null } => ({
    key: null,
  }),
  actions: {
    destroy() {
      this.key = null;
    },
    setKey(newKey: string) {
      this.key = newKey;
    },
  },
  getters: {
    getKey: (state): string | null => {
      return state.key;
    },
  },
});
