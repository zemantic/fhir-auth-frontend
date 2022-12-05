import { defineStore } from "pinia";

export const UserStore = defineStore("user", {
  state: (): { name: string | null; email: string | null } => ({
    name: "",
    email: "",
  }),
  actions: {
    destroy() {
      this.name = null;
      this.email = null;
    },
    setUser(email: string, name: string) {
      this.email = email;
      this.name = name;
    },
  },
  getters: {
    getUser: (state) => {
      return {
        name: state.name,
        email: state.email,
      };
    },
  },
});
